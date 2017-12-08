/**
 * Author: 墨子
 * GitHub: https://github.com/duheng/Mozi
 * Email: duheng1100@163.com
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import configureStore from './app/store/configureStore';
import rootSaga from './app/sagas';
import App from './AppNavigationState';

const store = configureStore();
// run root saga
store.runSaga(rootSaga);

export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide(); // 隐藏启动屏
  }

  render() {
    return (
      <Provider store={store}>
        <App
          ref={ref => {
            this.rootNav = ref;
          }}
        />
      </Provider>
    );
  }
}
