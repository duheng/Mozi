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

export default class Web extends Component {
  static navigationOptions = {
    headerTitle: 'Web',
  };
  reLoad = () => {
    const { navigation } = this.props;
    navigation.state.params.onGoBack();
    navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>这是一个webview封装页面!</Text>
        <Text style={styles.welcome} onPress={this.reLoad}>
          点击返回刷新页面数据!
        </Text>
      </View>
    );
  }
}
