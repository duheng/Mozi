import { AsyncStorage, } from 'react-native';
import { Toast, Loading, } from 'components';
import { LOGIN_KEY, } from '../constants/apiConfig';
import * as types from '../constants/actionTypes';


export const logIn = params => {
  console.log('登录---', params);
  return async dispatch => { // 用的时候把这里换成你的接口，接口验证成功后执行下面的代码
    await AsyncStorage.setItem(LOGIN_KEY, 'true', (error) => {
      if (error) {
        return Toast.show({ title: '登录失败', state: 'fail', });
        console.log('登录失败');
      }
      console.log('login########', params);
      dispatch({
        type: types.SET_LOGIN_STATE,
        isLogIn: true,
      });
      console.log('登录成功');
    });
  };
};
