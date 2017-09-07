import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'components/Icon';

const activeTabColor = '#42c02e';
const defaultTabColor = '#949494';

const headerOptions = props => {
  const { navigation, screenProps, visible = true, setTitle = false } = props;
  const { state, goBack } = navigation;
  const { onSelectShareIcon, onSelectSearchIcon } = screenProps;
  const headerLeft = <View />;
  const headerRight = (
    <TouchableOpacity
      onPress={() => {
        props.navigation.state.params.sharPage();
      }}>
      <Icon name="ios-share" size={30} color="white" />
    </TouchableOpacity>
  );

  let header;
  if (visible === false) {
    header = null;
  }

  let headerTitle = '墨子攻城';
  if (!!state.params && !!state.params.title) {
    headerTitle = state.params.title;
  }

  const headerStyle = { backgroundColor: '#262a37' };
  const headerTitleStyle = {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    alignSelf: 'center',
  };
  const headerBackTitle = '返回';
  const headerBackTitleStyle = { color: 'white' };
  const headerTintColor = { color: 'white' };
  return {
    headerStyle,
    headerTitle,
    headerLeft,
    headerRight,
    headerTitleStyle,
    headerBackTitle,
    headerBackTitleStyle,
    headerTintColor,
    header,
  };
};

const TabOptions = (iconame, tabBarLabel) => {
  return {
    tabBarLabel: tabBarLabel,
    tabBarIcon: ({ focused }) => {
      const IcoName = focused ? iconame : `${iconame}-outline`;
      const IcoColor = focused ? activeTabColor : defaultTabColor;
      return <Icon name={IcoName} size={20} color={IcoColor} />;
    },
    headerMode: 'screen',
  };
};

const TabNavigatorConfig = options => {
  const {
    initialRouteNameOP = '',
    tabBarPositionOP = 'bottom',
    swipeEnabledOP = false,
    scrollEnabledOP = false,
    animationEnabledOP = false,
  } = options;

  return {
    initialRouteName: initialRouteNameOP,
    tabBarPosition: tabBarPositionOP,
    swipeEnabled: swipeEnabledOP,
    scrollEnabled: scrollEnabledOP,
    animationEnabled: animationEnabledOP,
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        margin: 0,
        padding: 0,
        fontSize: 12,
      },
      tabStyle: {
        height: 52,
        borderTopColor: '#e5e5e5',
        borderTopWidth: 0.5,
      },
      style: {
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
      showIcon: true,
      upperCaseLabel: false,
    },
  };
};

module.exports = {
  headerOptions,
  TabOptions,
  TabNavigatorConfig,
};
