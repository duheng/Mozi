import React, { Component, } from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator, } from 'react-native';
import { authState, } from './AuthState';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class AuthLoading extends Component {
  static navigationOptions = {
    headerTitle: '',
  };

  constructor(props) {
    super(props);
    this._authStateAsync();
  }


  _authStateAsync = _ => {
    console.log('#######3');
    authState(router => {
      this.props.navigation.navigate(router);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
