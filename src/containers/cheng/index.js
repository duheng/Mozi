import React, { Component, } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  InteractionManager,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";

import HotUpdate, { ImmediateCheckCodePush, } from "components/CodepushUpdate";
import { Icon, } from "components";
import BaseSelector from "selectors/base";
import * as BaseActions from "actions/base";
import connect from "store/connect";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 102,
  },
  header: {
    width: "100%",
    height: 160,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },
  logos: {
    width: 60,
    height: 60,
    padding: 2,
    marginLeft: 23,
    marginRight: 13,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
  },
  headerRight: {
    width: "65%",
  },
  titles: {
    fontSize: 17,
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: 24,
    marginBottom: 4,
  },
  names: {
    fontSize: 13,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  listiTem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    borderColor: "#EBEBEB",
    borderBottomWidth: 1,
  },
  listiTemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
  },
  icons: {
    width: 16,
    height: 16,
  },
  listiTemName: {
    fontSize: 14,
    fontWeight: "400",
    color: "#353535",
    marginLeft: 2,
  },
  borderTops: {
    borderColor: "#EBEBEB",
    borderTopWidth: 1,
  },
});

@connect(
  BaseSelector,
  BaseActions
)
export default class Mine extends Component {
  static navigationOptions = ({ navigation, params, }) => {
    return {
      headerTitle: (
        <ImageBackground
          style={styles.header}
          source={require("assets/logo.png")}
        >
          <Image style={styles.logos} source={require("assets/logo.png")} />
          <View style={styles.headerRight}>
            <Text
              style={styles.titles}
              onPress={_ => {
                params.goBusi();
              }}
            >
              {!!params && params.name}
            </Text>
            <Text style={styles.names}>
              用户名：{!!params && params.bdName}
            </Text>
          </View>
        </ImageBackground>
      ),
      headerTitleContainerStyle: {
        left: 0,
        right: 0,
      },
    };
  };
  constructor(...args) {
    super(...args);
    this.state = {
      menus: [
        {
          id: "A001",
          name: "账号管理",
          icon: require("assets/logo.png"),
        },
        {
          id: "A002",
          name: "联系墨子",
          icon: require("assets/logo.png"),
        },
        {
          id: "A003",
          name: "调用QQ",
          icon: require("assets/logo.png"),
        },
        {
          id: "A004",
          name: "检查更新",
          icon: require("assets/logo.png"),
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      goBusi: this._goBusi,
      name: "个人中心",
      bdName: "墨子攻城",
    });
  }

  _goBusi = () => {
    this.props.navigation.navigate("ChoiceBusi");
  };

  renderItems() {
    const { menus, } = this.state;
    return (
      <View style={styles.listContainer}>
        {menus.map(item => {
          const __style = [ styles.listiTem, ];
          if (item.id == "A005") {
            __style.push({ marginTop: 40, }, styles.borderTops);
          }
          console.log("__style---", __style);
          return (
            <TouchableOpacity
              key={item.id}
              onPress={_ => this.tapMenu(item.id)}
            >
              <View style={__style}>
                <View style={styles.listiTemLeft}>
                  <Image style={styles.icons} source={item.icon} />
                  <Text style={styles.listiTemName}>{item.name}</Text>
                </View>
                <Icon name="ios-arrow-forward" size={20} color={"#BEBEBE"} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  tapMenu = id => {
    console.log("id------", id);
    if (id == "A001") {
      this.props.navigation.navigate("Account");
    } else if (id == "A002") {
      this.alertCall();
    } else if (id == "A003") {
      this.linkQQ();
    } else if (id == "A004") {
      ImmediateCheckCodePush();
    } else if (id == "A005") {
      console.log("*******", this.props);
      this.props.navigation.navigate("ChoiceBusi");
    }
  };

  linkQQ = () => {
    const qq = "12345678";
    const url = `mqqwpa://im/chat?chat_type=wpa&uin=${qq}`;
    this.call(url);
  };

  alertCall = () => {
    Alert.alert(
      "打给: 墨子",
      "联系电话: 12345678",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => this.call("tel: 18310097722"), },
      ],
      { cancelable: false, }
    );
  };

  call = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log(`Can't handle url: ${url}`);
        } else {
          Linking.openURL(url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };

  render() {
    return (
      <View style={styles.container}>
        <HotUpdate />
        {this.renderItems()}
      </View>
    );
  }
}
