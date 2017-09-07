import { StackNavigator, TabNavigator } from 'react-navigation';
import * as modules from 'containers/index';
import { headerOptions, TabOptions, TabNavigatorConfig } from 'config';

const { Mo, Zi, Gong, Cheng } = modules;
const TabBarText = {
  mo: '墨',
  zi: '子',
  gong: '攻',
  cheng: '城',
};

const combineOptions = options => {
  const { type = 'tab', ico = null, prop } = options;
  const { routeName } = prop.navigation.state;
  const routeNameLow = routeName.toLowerCase();
  const navigationOptions =
    type === 'tab'
      ? {
          ...TabOptions(ico, TabBarText[routeNameLow]),
          ...headerOptions(prop),
          ...modules[routeName].navigationOptions,
        }
      : {
          ...headerOptions(prop),
          ...modules[routeName].navigationOptions,
        };
  return navigationOptions;
};

const Nav = TabNavigator(
  {
    Mo: {
      screen: Mo,
      path: 'Mo',
      navigationOptions: props => {
        return combineOptions({
          type: 'tab',
          ico: 'ios-home',
          prop: props,
        });
      },
    },
    Zi: {
      screen: Zi,
      path: 'Zi',
      navigationOptions: props => {
        return combineOptions({
          type: 'tab',
          ico: 'ios-planet',
          prop: props,
        });
      },
    },
    Gong: {
      screen: Gong,
      path: 'Gong',
      navigationOptions: props => {
        return combineOptions({
          type: 'tab',
          ico: 'ios-analytics',
          prop: props,
        });
      },
    },
    Cheng: {
      screen: Cheng,
      path: 'Cheng',
      navigationOptions: props => {
        return combineOptions({
          type: 'tab',
          ico: 'ios-contacts',
          prop: props,
        });
      },
    },
  },
  TabNavigatorConfig({
    initialRouteName: 'Mo',
  }),
);

const AppNavigator = StackNavigator(
  {
    Nav: {
      screen: Nav,
    },
  },
  {
    headerMode: 'screen',
  },
);
export default AppNavigator;
