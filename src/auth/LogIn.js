import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, TextInput, AsyncStorage, TouchableOpacity, } from 'react-native';
import { Toast, Loading, } from 'components';
import { hexMD5, } from 'utils/md5';
import BaseSelector from 'selectors/base';
import * as BaseActions from 'actions/base';
import connect from 'store/connect';

import Logo from 'assets/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 50,
    marginBottom: 30,
  },
  textInputStyle: {
    width: '86%',
    height: 40,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '86%',
    height: 40,
    backgroundColor: '#4BD3CA',
    borderRadius: 22,
    marginTop: 30,
  },
  loginColor: {
    color: '#FFFFFF',
  },
});


@connect(BaseSelector, BaseActions)
export default class SignIn extends Component {
  static navigationOptions = {
    headerTitle: '墨子登录',
  };

  constructor(...args) {
    super(...args);
    this.state = {
      account: '',
      password: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isLogIn) {
      return {
        isLogIn: props.isLogIn,
      };
    }
    return null;
  }
  componentDidUpdate() {
    if (this.state.isLogIn) {
      this._goLocation();
    }
  }

  _goLocation = _ => { // 登录成功跳转到主页
    this.props.navigation.navigate('App');
  }

  _signInAsync = async () => {
    const { account, password, } = this.state;
    if (account == '') {
      return Toast.show({ title: '用户名不能为空', });
    } else if (password == '') {
      return Toast.show({ title: '密码不能为空', });
    }
    const PARAM = {
      account,
      password: hexMD5(password),
    };
    this.props.actions.logIn(PARAM);
  };

  _changeUser = (account) => {
    this.setState({ account, });
  };

  _changePwd = (password) => {
    this.setState({ password, });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>用户名密码随便输入，不为空就行</Text>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <TextInput style={styles.textInputStyle} placeholder="用户名/手机号/邮箱" autoCapitalize="none" onChangeText={this._changeUser} />
        <TextInput style={styles.textInputStyle} placeholder="密码" autoCapitalize="none" secureTextEntry onChangeText={this._changePwd} />
        <TouchableOpacity style={styles.login} onPress={this._signInAsync} >
          <Text style={styles.loginColor}>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
