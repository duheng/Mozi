import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeSelector from 'selectors/home';
import * as HomeActions from 'actions/home';
import connect from 'store/connect';

@connect(HomeSelector, HomeActions)
export default class Mo extends Component {
  static navigationOptions = {
      headerTitle: '墨组件'
  }

  componentWillMount() {
    console.log('Mo componentWillMount')
    this.props.actions.fetchLibrary();
      this.props.navigation.setParams({ sharPage: this.sharPage });
  }

  sharPage() {
    console.log('get share Mo dom')
  }

  render() {
    const { home } = this.props;
    return (
      <View  style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Mozi!
        </Text>
        {home &&
          home.map(item => {
            return (
              <Text key={item.data.list[0].id}>{item.data.list[0].name}</Text>
            );
          })}
      </View>
    );
  }
}

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
