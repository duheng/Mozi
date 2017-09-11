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

export default class Moui extends Component {
  static navigationOptions = {
    headerTitle: '墨组件',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>分享!</Text>
        <Text style={styles.welcome}>Toase!</Text>
        <Text style={styles.welcome}>Loading!</Text>
        <Text style={styles.welcome}>Tips!</Text>
      </View>
    );
  }
}
