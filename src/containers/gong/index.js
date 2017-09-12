import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Gong extends Component {
  static navigationOptions = {
    headerTitle: '攻',
  };
  headerImageScrollView = () => {
    const { navigation } = this.props;
    navigation.navigate('HeaderImageScrollView');
  };

  render() {
    const { home } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.headerImageScrollView}>
          点击进入自定义头部图片 & 缩放!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
