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

export default class Backa extends Component {
  static navigationOptions = {
    headerTitle: '第一个入栈的页面',
  };

  goBack = () => {
    const { navigation, } = this.props;
    navigation.navigate('Back');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goBack();
          }}
        >
          点此去第二个入栈的页面
        </Text>
      </View>
    );
  }
}
