import { createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { BottomTabNavigatorConfig, StackNavigatorConfig, } from '../config';
import * as pages from './index';

const { SigIn, AuthLoading, } = pages;

const TabNav = createBottomTabNavigator(
  {
    Mo: pages.Mo,
    Zi: pages.Zi,
    Gong: pages.Gong,
    Cheng: pages.Cheng,
  },
  BottomTabNavigatorConfig({
    initialRouteName: 'Mo',
  }),
);

TabNav.navigationOptions = ({ navigation, }) => {
  // 设置tabBar的标题
  const { routes, index, } = navigation.state;
  const { routeName, } = routes[index];
  return pages[routeName].navigationOptions;
};

const AppStack = createStackNavigator(
  {
    Root: TabNav,
    Web: pages.Web,
    Back: pages.Back,
    Backa: pages.Backa,
    HeaderImageScrollView: pages.HeaderImageScrollView,
  },
  StackNavigatorConfig({
    initialRouteName: 'Root',
  }),
);

const AuthStack = createStackNavigator({ SignIn: SigIn, });

const App = createSwitchNavigator(
  {
    AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(App);
