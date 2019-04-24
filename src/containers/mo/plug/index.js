import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

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
  icons: 'https://www.jianshu.com/p/a25e4ecce60f',
  splash: 'https://www.jianshu.com/p/4540ac17dfd4',
};

export default class Plug extends Component {
  static navigationOptions = {
    headerTitle: '墨依赖!&',
  };

  goWeb = (gourl = 'https://www.jianshu.com/u/c971c7ffa27e') => {
    const { navigation, } = this.props;
    navigation.navigate('Web', {
      url: gourl,
    });
  };

  goBack = () => {
    const { navigation, } = this.props;
    navigation.navigate('Backa');
  };

  goTab = () => {
    const { navigation, } = this.props;
    navigation.navigate('Gong');
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
            this.goTab();
          }}
        >
          跳转到指定tab页面
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

      </View>
    );
  }
}
