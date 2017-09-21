import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Placeholder from 'rn-placeholder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  box: {
    width: 300,
    margin: 10,
  },
});
export default class Cheng extends Component {
  static navigationOptions = {
    headerTitle: '城',
  };
  constructor(...args) {
    super(...args);
    console.log('Placeholder....', Placeholder);
    this.state = {
      isReady: false,
    };
    // setTimeout(() => {
    //   this.setState({
    //     isReady: true,
    //   });
    // }, 8000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Placeholder.ImageContent
            size={60}
            animate="fade"
            lineNumber={4}
            lineSpacing={5}
            lastLineWidth="70%"
            onReady={this.state.isReady}
          >
            <Text>Placeholder has finished :D</Text>
          </Placeholder.ImageContent>
        </View>
        <View style={styles.box}>
          <Placeholder.Line
            size={60}
            animate="fade"
            lineNumber={4}
            lineSpacing={5}
            lastLineWidth="30%"
            onReady={this.state.isReady}
          >
            <Text>Placeholder has finished :D</Text>
          </Placeholder.Line>
        </View>
        <View style={styles.box}>
          <Placeholder.Media
            size={60}
            animate="fade"
            lineNumber={4}
            lineSpacing={5}
            lastLineWidth="30%"
            onReady={this.state.isReady}
          >
            <Text>Placeholder has finished :D</Text>
          </Placeholder.Media>
        </View>
        <View style={styles.box}>
          <Placeholder.Paragraph
            size={60}
            animate="fade"
            lineNumber={4}
            lineSpacing={5}
            lastLineWidth="30%"
            onReady={this.state.isReady}
          >
            <Text>Placeholder has finished :D</Text>
          </Placeholder.Paragraph>
        </View>
      </View>
    );
  }
}
