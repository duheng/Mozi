import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeSelector from 'selectors/home';
import * as HomeActions from 'actions/home';
import connect from 'store/connect';

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

@connect(HomeSelector, HomeActions)
export default class Zi extends Component {
  static navigationOptions = {
       headerTitle: '子',
  };

  componentWillMount() {
    this.props.actions.fetchLibrary();
    this.props.navigation.setParams({ sharPage: this.sharPage });
  }

  sharPage = () => {
    console.log('get share Zi dom');
    return null;
  };

  render() {
    const { home } = this.props;
    console.log('zi---',this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to zi!</Text>

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
