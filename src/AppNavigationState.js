import React, { Component, } from 'react';
import { BackHandler, ToastAndroid, Platform, } from 'react-native';
import { connect, } from 'react-redux';
import { NavigationActions, } from 'react-navigation';
import JPushModule from 'jpush-react-native';
import Routers from './routers/app';
// state持久化
const persistenceKey = 'persistenceKey';
const persistNavigationState = async navState => {
  try {
    console.log('navState_______', navState);
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  } catch (err) {
    // handle the error according to your needs
  }
};
const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey);
  return JSON.parse(jsonString);
};

const getPersistenceFunctions = __DEV__
  ? {
    persistNavigationState,
    loadNavigationState,
  }
  : undefined;

@connect(state => ({ nav: state.nav, }))
export default class AppNavigationState extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      // 通知 JPushModule 初始化完成，发送缓存事件。
      JPushModule.notifyJSDidLoad(() => {});
    } else {
      JPushModule.initPush();
    }

    // 接收自定义消息
    JPushModule.addReceiveCustomMsgListener(message => {
      // this.setState({ pushMsg: message, });
    });
    // 接收推送通知
    JPushModule.addReceiveNotificationListener(message => {
      // console.log(`receive notification: ${message}`);
    });
    // 打开通知
    JPushModule.addReceiveOpenNotificationListener(() => {
      console.log('Opening notification!');
      !!this.root && this.root._navigation.navigate('Gong');
    });
  }

  componentWillUnmount() {
    !!this.onBackPress && BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.lastBackPressed = null;

    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
    JPushModule.removeReceiveOpenNotificationListener();
    JPushModule.clearAllNotifications();
  }

  onBackPress = () => {
    const { dispatch, nav, } = this.props;
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      return false;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return (
      <Routers
        ref={ref => {
          this.root = ref;
        }}
        {...getPersistenceFunctions}
        onNavigationStateChange={(prevState, currentState) => {
          const appState = currentState.routes;
          if ((appState && appState.length > 1) || appState[0].index > 0) {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
          } else {
            BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
          }
        }}
      />
    );
  }
}
