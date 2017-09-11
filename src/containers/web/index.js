import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

export default class Web extends Component {
  static navigationOptions = {
    headerTitle: 'Web',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>这是一个webview封装页面!</Text>
      </View>
    );
  }
}
