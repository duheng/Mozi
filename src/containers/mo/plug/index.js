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

export default class Plug extends Component {
  static navigationOptions = {
    headerTitle: '墨依赖',
  };

  goWeb = () => {
    const { navigation } = this.props;
    navigation.navigate('Web');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.goWeb}>
          点击进入墨依赖!
        </Text>
        <Text style={styles.welcome}>react-navigation集成!</Text>
        <Text style={styles.welcome}>codepush集成!</Text>
        <Text style={styles.welcome}>jpush集成!</Text>
        <Text style={styles.welcome}>redux集成!</Text>
        <Text style={styles.welcome}>redux-saga集成!</Text>
      </View>
    );
  }
}

