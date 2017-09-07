import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Cheng extends Component {
  static navigationOptions = {
      headerTitle: '城'
  }
  render() {
    const { home } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to cheng!
        </Text>
      </View>
    );
  }
}

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
});
