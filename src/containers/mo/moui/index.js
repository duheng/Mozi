import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Toast, Loading, } from 'components';

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

export default class Moui extends Component {
  static navigationOptions = {
    headerTitle: '墨组件',
  };

  showToast = (state = 'default') => {
    if (state == 'success') {
      Toast.show({ title: '恭喜您！', state: 'success', });
    } else if (state == 'fail') {
      Toast.show({ title: '抱歉！', state: 'fail', });
    } else {
      Toast.show({ title: '这是我的自定义Toast！', });
    }
  }

  showLoading = () => {
    Loading.show();
    setTimeout(_ => {
      Loading.hide();
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.showToast();
          }}
        >Toase default</Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.showToast('success');
          }}
        >Toase success</Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.showToast('fail');
          }}
        >Toase fail</Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.showLoading();
          }}
        >Loading!</Text>
      </View>
    );
  }
}
