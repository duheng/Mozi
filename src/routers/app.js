import { createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { mergeJSON, } from 'utils/util';
import { BottomTabNavigatorConfig, StackNavigatorConfig, } from '../config';
import * as pages from './index';

const { AuthLoading, LogIn, } = pages;

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
  const { routeName, params, } = routes[index];
  const __defaultNavigationOptions = StackNavigatorConfig({ initialRouteName: routeName, }).defaultNavigationOptions;
  const __navigationOptions = pages[routeName].navigationOptions;
  let targetNavigationOptions = {};
  if (typeof (__navigationOptions) === 'function') {
    targetNavigationOptions = __navigationOptions({ navigation, params, });
  } else {
    targetNavigationOptions = { ...__navigationOptions, };
  }
  mergeJSON(__defaultNavigationOptions, targetNavigationOptions);
  return targetNavigationOptions;
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

// 权限验证路由
const AuthStack = createStackNavigator(
  { LogIn, },
  StackNavigatorConfig({
    initialRouteName: 'LogIn',
  })
);

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
