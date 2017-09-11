import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
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
const dataSource = [
  {
    data: [{ name: 'nader' }, { name: 'chris' }],
    key: 'A',
  },
  { data: [{ name: 'nick' }, { name: 'amanda' }], key: 'B' },
];

@connect(HomeSelector, HomeActions)
export default class Zi extends Component {
  static navigationOptions = {
    headerTitle: '子',
  };

  componentWillMount() {
    this.props.actions.fetchLibrary();
  }

  renderItem = item => {
    return <Text style={styles.text}>{item.item.name}</Text>;
  };

  renderHeader = headerItem => {
    return <Text style={styles.header}>{headerItem.section.key}</Text>;
  };

  render() {
    // const { home } = this.props;
    console.log('zi---', this.props);

    // {home &&
    //   home.map(item => {
    //     return (
    //       <Text key={item.data.list[0].id}>{item.data.list[0].name}</Text>
    //     );
    //   })}
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to zi!</Text>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={dataSource}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}
