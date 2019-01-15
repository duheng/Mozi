import React, { Component, } from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator, AsyncStorage, } from 'react-native';
import BaseSelector from '../../app/selectors/base';
import * as BaseActions from '../../app/actions/base';
import connect from '../../app/store/connect';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
@connect(BaseSelector, BaseActions)
export default class AuthLoading extends Component {
  static navigationOptions = {
    headerTitle: '',
  };

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
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
