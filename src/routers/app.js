import { StackNavigator, TabNavigator } from "react-navigation"
import { Mo, Zi, Gong, Cheng, Web, Back, Backa, HeaderImageScrollView } from "./index"

import { headerOptions, RouteConfigs, TabNavigatorConfig, StackNavigatorConfig } from "../config"

const TabBarText = {
  mo: "墨",
  zi: "子",
  gong: "攻",
  cheng: "城",
}

const Nav = TabNavigator(
  {
    Mo: {
      screen: Mo,
      path: "Mo",
      navigationOptions: props => {
        return RouteConfigs({
          iconame: "ios-home",
          label: TabBarText.mo,
          props,
        })
      },
    },
    Zi: {
      screen: Zi,
      path: "Zi",
      navigationOptions: props => {
        return RouteConfigs({
          iconame: "ios-planet",
          label: TabBarText.zi,
          props,
        })
      },
    },
    Gong: {
      screen: Gong,
      path: "Gong",
      navigationOptions: props => {
        return RouteConfigs({
          iconame: "ios-analytics",
          label: TabBarText.gong,
          props,
        })
      },
    },
    Cheng: {
      screen: Cheng,
      path: "Cheng",
      navigationOptions: props => {
        return RouteConfigs({
          iconame: "ios-contacts",
          label: TabBarText.cheng,
          props,
        })
      },
    },
  },
  TabNavigatorConfig({
    initialRouteName: "Mo",
  }),
)

const Routers = StackNavigator(
  {
    Nav: {
      screen: Nav,
    },
    Web: {
      screen: Web,
      navigationOptions: props => {
        return headerOptions({
          ...props,
          ...{
            back: true,
          },
        })
      },
    },
    Back: {
      screen: Back,
      navigationOptions: props => {
        return headerOptions({
          ...props,
          ...{
            back: true,
          },
        })
      },
    },
    Backa: {
      screen: Backa,
      navigationOptions: props => {
        return headerOptions({
          ...props,
          ...{
            back: true,
          },
        })
      },
    },
    HeaderImageScrollView: {
      screen: HeaderImageScrollView,
      navigationOptions: props => {
        return headerOptions({
          ...props,
          ...{
            back: true,
          },
        })
      },
    },
  },
  StackNavigatorConfig({
    initialRouteName: "Nav",
  }),
)
export default Routers
