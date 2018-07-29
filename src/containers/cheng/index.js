import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Placeholder from 'rn-placeholder';
import CustomPlaceholder from './CustomPlaceholder';

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
    width: '90%',
    margin: 10,
  },
});

export default class Cheng extends Component {
  static navigationOptions = {
    headerTitle: '城',
  };
  constructor(...args) {
    super(...args);

    this.state = {
      isReady: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.box}>左边图右内容布局</Text>
          <Placeholder.ImageContent
            size={60}
            animate="fade"
            lineNumber={4}
            lineSpacing={5}
            lastLineWidth="70%"
            onReady={this.state.isReady}
          >
            <Text>左边图右内容布局</Text>
          </Placeholder.ImageContent>
        </View>
        <View style={styles.box}>
          <Text style={styles.box}>一行直线的布局</Text>
          <Placeholder.Line
            size={60}
            animate="fade"
            lineNumber={4}
            lineSpacing={5}
            lastLineWidth="30%"
            onReady={this.state.isReady}
          >
            <Text>一行直线的布局</Text>
          </Placeholder.Line>
        </View>
        <View style={styles.box}>
          <Text style={styles.box}>只有图片的布局</Text>
          <Placeholder.Media
            size={60}
            animate="fade"
            lineNumber={4}
            lineSpacing={5}
            lastLineWidth="30%"
            onReady={this.state.isReady}
          >
            <Text>只有图片的布局</Text>
          </Placeholder.Media>
        </View>
        <View style={styles.box}>
          <Text style={styles.box}>段落布局</Text>
          <Placeholder.Paragraph
            size={60}
            animate="fade"
            lineNumber={4}
            lineSpacing={5}
            lastLineWidth="30%"
            onReady={this.state.isReady}
          >
            <Text>段落布局</Text>
          </Placeholder.Paragraph>
        </View>
        <View style={styles.box}>
          <Text style={styles.box}>这是自定义demo</Text>
          <CustomPlaceholder animate="fade" bgColor="yellow" />
        </View>
      </View>
    );
  }
}
