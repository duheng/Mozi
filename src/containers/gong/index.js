import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Gong extends Component {
  static navigationOptions = {
      headerTitle: '攻'
  }
  render() {
    const { home } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to gong!
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
