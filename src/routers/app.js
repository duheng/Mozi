import { createBottomTabNavigator, createStackNavigator, } from 'react-navigation';
import * as pages from './index';
import { BottomTabNavigatorConfig, StackNavigatorConfig, } from '../config';

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

const Routers = createStackNavigator(
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

export default Routers;
