import React, { Component, } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, AsyncStorage, Button, } from 'react-native';
import DeviceInfo from 'react-native-device-info';
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

// const deviceId = DeviceInfo.getDeviceId();

// const myDeviceId = async () => {
//   const deviceId = await DeviceInfo.getDeviceId();
//   if(deviceId) {
//     return deviceId
//   }
//   return null
// }


@connect(BaseSelector, BaseActions)
export default class SignIn extends Component {
  static navigationOptions = {
    headerTitle: '',
  };

  constructor(...args) {
    super(...args);
    this.state = {
      deviceId: 'lxy',
    };
    this._getDeviceId();
  }

  _getDeviceId = async () => {
    try {
      const deviceId = await DeviceInfo.getDeviceId();
      if (deviceId) {
        console.log('deviceId------', deviceId);
        this.setState({
          deviceId,
        });
      }
    } catch (e) {
      console.log('在模拟器中不能获取deviceId');
    }
  }


  _signInAsync = async () => {
    console.log('_signInAsync---', this.state);

    const PARAM = {
      account: 'app_void',
      password: '123456',
      deviceId: '123',
    };
    this.props.actions.fetchSigIn(PARAM);
    // await AsyncStorage.setItem('userToken', 'abc');
    // this.props.navigation.navigate('App');
  };
  render() {
    console.log('props-----', this.props);
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}
