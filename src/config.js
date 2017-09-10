import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import Icon from 'components/Icon';

const activeTabColor = '#42c02e';
const defaultTabColor = '#949494';

const headerOptions = props => {
  const {
    navigation,
    navigationOptions,
    screenProps,
    visible = true,
    back = false,
    right = false,
    setTitle = false,
  } = props;
  const { state, goBack } = navigation;
  const headerLeft = back ? (
    <TouchableOpacity
      onPress={() => {
        goBack(null);
      }}>
      <Icon name="ios-arrow-back" size={30} color="white" />
    </TouchableOpacity>
  ) : (
    <View />
  );

  const headerRight = right ? (
    <TouchableOpacity
      onPress={() => {
        state.params.sharPage && state.params.sharPage();
      }}>
      <Icon name="md-share-alt" size={30} color="white" />
    </TouchableOpacity>
  ) : (
    <View />
  );

  let header = visible === false ? null : undefined;
  let headerTitle = '墨子攻城';

  return {
    headerTitle,
    headerLeft,
    headerRight,
    header,
    ...navigationOptions,
  };
};

const RouteConfigs = options => {
  const { iconame = null, label = null, props } = options;
  return {
    ...headerOptions(props),
    tabBarLabel: label,
    tabBarIcon: ({ focused }) => {
      if (!iconame) return null;
      const IcoName = focused ? iconame : `${iconame}-outline`;
      const IcoColor = focused ? activeTabColor : defaultTabColor;
      return <Icon name={IcoName} size={20} color={IcoColor} />;
    },
  };
};

const TabNavigatorConfig = options => {
  const {
    initialRouteName = '',
    tabBarPosition = 'bottom',
    swipeEnabled = false,
    scrollEnabled = false,
    animationEnabled = false,
    showIcon = true,
  } = options;

  return {
    initialRouteName: initialRouteName,
    tabBarPosition: tabBarPosition,
    swipeEnabled: swipeEnabled,
    scrollEnabled: scrollEnabled,
    animationEnabled: animationEnabled,
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        margin: 0,
        padding: 0,
        fontSize: 12,
      },
      style: {
        height: 50,
        borderTopColor: '#e5e5e5',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e5e5e5',
        backgroundColor: '#f8f8f8',
      },
      pressColor: '#e5e5e5',
      pressOpacity: 0.3,
      indicatorStyle: {
        height: 0,
      },
      inactiveTintColor: defaultTabColor,
      activeTintColor: activeTabColor,
      showLabel: true,
      showIcon: showIcon,
      upperCaseLabel: false,
    },
  };
};
const StackNavigatorConfig = options => {
  const { initialRouteName = '' } = options;
  return {
    initialRouteName: initialRouteName,
    navigationOptions: {
      headerTitleStyle: { fontSize: 18, color: '#9c9c9c' },
      headerStyle: { height: 64, backgroundColor: '#262a37' },
    }, //路由页面的配置选项，它会被 RouteConfigs 参数中的 navigationOptions 的对应属性覆盖。
    mode: 'card', //页面跳转方式 card - 原生系统默认的的跳转;modal - 只针对iOS平台，模态跳转
    headerMode: 'screen', //float - 渐变，类似iOS的原生效果;screen - 标题与屏幕一起淡入淡出;none - 没有动画
    cardStyle: { backgroundColor: '#F5FCFF' }, //为各个页面设置统一的样式，比如背景色，字体大小等
    transitionConfig: () => ({
      // 配置页面跳转的动画，覆盖默认的动画效果
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  };
};

module.exports = {
  headerOptions,
  RouteConfigs,
  TabNavigatorConfig,
  StackNavigatorConfig,
};
