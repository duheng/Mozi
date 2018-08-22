import React, { Component, } from 'react';
import { StyleSheet, } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Plug from './plug';
import Moui from './moui';
import Rule from './rule';

const activeTabColor = '#42c02e';
const defaultTabColor = "#949494";

const styles = StyleSheet.create({
  underline: {
    height: 3,
    backgroundColor: '#42c02e',
    alignItems: 'center',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#fcfcfc',
    backgroundColor: 'white',
    marginBottom: -0.5,
  },
});

export default class Mo extends Component {
  static navigationOptions = {
    headerTitle: '墨子攻城',
  };
  render() {
    const { navigation, } = this.props;
    return (
      <ScrollableTabView
        scrollWithoutAnimation={false}
        locked={false}
        initialPage={0}
        tabBarUnderlineStyle={styles.underline}
        tabBarInactiveTextColor={defaultTabColor}
        tabBarActiveTextColor={activeTabColor}
        renderTabBar={() => <DefaultTabBar style={styles.border} />}
      >
        <Plug tabLabel={'墨依赖'} navigation={navigation} />
        <Moui tabLabel={'墨组件'} navigation={navigation} />
        <Rule tabLabel={'墨规范'} navigation={navigation} />
      </ScrollableTabView>
    );
  }
}
