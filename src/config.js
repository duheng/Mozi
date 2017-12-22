import React from "react"
import { View, Image } from "react-native"
import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator"
import NavigationButton from "./components/NavigationButton"
import Logo from "./commons/assets/logo.png"

const activeTabColor = "#42c02e"
const defaultTabColor = "#949494"

const headerOptions = props => {
  const { navigation, navigationOptions, visible = true, back = false, right = false } = props
  const { goBack } = navigation
  const headerLeft = back ? (
    <NavigationButton
      name="back"
      callback={() => {
        goBack(null)
      }}
    />
  ) : (
    <View />
  )

  const headerRight = right ? (
    NavigationButton([
      {
        name: "share",
        callback: () => {
          console.log("this is my share button")
        },
      },
      {
        name: "reload",
        callback: () => {
          console.log("this is my search button")
        },
      },
    ])
  ) : (
    <View />
  )

  const header = visible === false ? null : undefined
  const headerTitle = (
    <Image
      source={Logo}
      style={{
        width: 30,
        height: 30,
        alignSelf: "center",
        borderRadius: 15,
      }}
      resizeMode="contain"
    />
  )

  return {
    headerTitle,
    headerLeft,
    headerRight,
    header,
    headerTitleStyle: { fontSize: 18, alignSelf: "center", color: "#9c9c9c" },
    headerStyle: {
      height: 64,
      backgroundColor: "#262a37",
    },
    ...navigationOptions,
  }
}

const RouteConfigs = options => {
  const { iconame = null, label = null, props } = options
  return {
    ...headerOptions(props),
    tabBarLabel: label,
    tabBarIcon: ({ focused }) => {
      if (!iconame) return null
      const IcoName = focused ? iconame : `${iconame}-outline`
      const IcoColor = focused ? activeTabColor : defaultTabColor
      return <NavigationButton name={IcoName} size={20} color={IcoColor} usename />
    },
  }
}

const TabNavigatorConfig = options => {
  const {
    initialRouteName: InitialRouteName = "",
    tabBarPosition: TabBarPosition = "bottom",
    swipeEnabled: SwipeEnabled = false,
    scrollEnabled: ScrollEnabled = false,
    animationEnabled: AnimationEnabled = false,
    showIcon: ShowIcon = true,
  } = options

  return {
    initialRouteName: InitialRouteName,
    tabBarPosition: TabBarPosition,
    swipeEnabled: SwipeEnabled,
    scrollEnabled: ScrollEnabled,
    animationEnabled: AnimationEnabled,
    backBehavior: "none",
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        margin: 0,
        padding: 0,
        fontSize: 12,
      },
      style: {
        margin: 0,
        padding: 0,
        height: 50,
        borderTopColor: "#e5e5e5",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderBottomColor: "#e5e5e5",
        backgroundColor: "#f8f8f8",
      },
      pressColor: "#e5e5e5",
      pressOpacity: 0.3,
      indicatorStyle: {
        height: 0,
      },
      inactiveTintColor: defaultTabColor,
      activeTintColor: activeTabColor,
      showLabel: true,
      showIcon: ShowIcon,
      upperCaseLabel: false,
    },
  }
}
const StackNavigatorConfig = options => {
  const { initialRouteName: InitialRouteName = "" } = options
  return {
    initialRouteName: InitialRouteName,
    mode: "card", // 页面跳转方式 card - 原生系统默认的的跳转;modal - 只针对iOS平台，模态跳转
    headerMode: "screen", // float - 渐变，类似iOS的原生效果;screen - 标题与屏幕一起淡入淡出;none - 没有动画
    cardStyle: { backgroundColor: "#F5FCFF" }, // 为各个页面设置统一的样式，比如背景色，字体大小等
    transitionConfig: () => ({
      // 配置页面跳转的动画，覆盖默认的动画效果
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  }
}

module.exports = {
  headerOptions,
  RouteConfigs,
  TabNavigatorConfig,
  StackNavigatorConfig,
}
