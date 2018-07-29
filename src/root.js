/**
 * Author: 墨子
 * GitHub: https://github.com/duheng/Mozi
 * Email: duheng1100@163.com
 */
import React, { Component, } from 'react';
import { Provider, } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import configureStore from './app/store/configureStore';
import App from './AppNavigationState';

const store = configureStore();

@codePush
export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide(); // 隐藏启动屏
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
