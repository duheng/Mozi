import React from 'react';
import { Image, } from 'react-native';
import NavigationButton from './components/NavigationButton';
import { tabBar, window, } from '../app';

const BottomTabNavigatorConfig = options => {
  const { inactiveTintColor, activeTintColor, list, } = tabBar;
  const { initialRouteName = '', showIcon = true, } = options;

  return {
    initialRouteName,
    tabBarOptions: {
      inactiveTintColor,
      activeTintColor,
      showLabel: true,
      showIcon,
      indicatorStyle: {
        height: 0,
      },
      style: {
        height: 49,
        margin: 0,
        padding: 0,
        borderTopColor: "#F0F0F0",
        borderTopWidth: 1,
      },
      labelStyle: {
        fontSize: 12,
        margin: 0,
        padding: 0,
      },
    },
    navigationOptions: ({ navigation, }) => {
      const { routeName, } = navigation.state;
      const { icoPath, icoName, text, } = list[routeName];
      return {
        tabBarIcon: ({ focused, tintColor, }) => {
          if (icoPath) {
            return (
              <Image
                source={icoPath}
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            );
          }
          const IcoName = focused ? icoName : `${icoName}-outline`;
          return <NavigationButton name={IcoName} size={20} color={tintColor} usename />;
        },
        tabBarLabel: text,
      };
    },
  };
};

const StackNavigatorConfig = options => {
  const { initialRouteName = '', } = options;
  const {
    headerBackTitle = null,
    headerTintColor = '#FFFFFF',
    gesturesEnabled = true,
    headerBackgroundColor = '#262a37',
    headerTitleStyle = {
      alignSelf: 'center',
      fontSize: 18,
      flex: 1,
      textAlign: 'center',
      color: '#9c9c9c',
    },
  } =
    window || {};
  return {
    initialRouteName,
    mode: 'card', // 页面跳转方式 card - 原生系统默认的的跳转;modal - 只针对iOS平台，模态跳转
    headerMode: 'float', // float - 渐变，类似iOS的原生效果;screen - 标题与屏幕一起淡入淡出;none - 没有动画
    cardStyle: { backgroundColor: '#F5FCFF', }, // 为各个页面设置统一的样式，比如背景色，字体大小等
    navigationOptions: {
      headerBackTitle, // 返回按钮文字
      headerTintColor, // 返回按钮颜色
      gesturesEnabled, // 是否支持滑动返回
      headerTitleStyle,
      headerStyle: {
        backgroundColor: headerBackgroundColor,
      },
    },
  };
};

module.exports = {
  BottomTabNavigatorConfig,
  StackNavigatorConfig,
};
