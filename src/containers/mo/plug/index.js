import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const apiurls = {
  mozi: 'https://github.com/duheng/Mozi',
  icons: 'https://zhuanlan.zhihu.com/p/29447462',
  splash: 'https://zhuanlan.zhihu.com/p/29495955',
};

export default class Plug extends Component {
  static navigationOptions = {
    headerTitle: '墨依赖',
  };

  goWeb = (gourl = apiurls.mozi) => {
    const { navigation } = this.props;
    navigation.navigate('Web', {
      url: gourl,
    });
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.navigate('Backa');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goWeb(apiurls.splash);
          }}
        >
          启动屏!
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goBack();
          }}
        >
          返回到指定页面Demo!
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goWeb();
          }}
        >
          react-navigation集成!
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goWeb(apiurls.icons);
          }}
        >
          react-native-vector-icons集成!
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goWeb();
          }}
        >
          codepush集成!
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goWeb();
          }}
        >
          jpush集成!
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goWeb();
          }}
        >
          redux集成!
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goWeb();
          }}
        >
          redux-saga集成!
        </Text>
      </View>
    );
  }
}
