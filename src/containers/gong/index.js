import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HomeSelector from 'selectors/home';
import * as HomeActions from 'actions/home';
import ListItem from 'components/ListItem';
import connect from 'store/connect';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
  headerButton: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#42c02e',
    backgroundColor: '#42c02e',
    margin: 10,
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

@connect(HomeSelector, HomeActions)
export default class Gong extends Component {
  static navigationOptions = {
    headerTitle: 'FlatList and Placeholder',
  };

  constructor(...args) {
    super(...args);
    this.state = {
      done: true,
    };
  }

  componentWillMount() {
    this.props.actions.fetchLibrary();
  }

  headerImageScrollView = () => {
    const { navigation } = this.props;
    navigation.navigate('HeaderImageScrollView');
  };

  renderHeader = () => {
    return (
      <View style={styles.headerButton}>
        <Text style={styles.welcome} onPress={this.headerImageScrollView}>
          点击进入自定义头部图片 & 缩放!
        </Text>
      </View>
    );
  };

  renderItem = item => {
    return <ListItem data={item.item.data[0]} gopage={this.goPage} />;
  };

  render() {
    const { home } = this.props;
    if (!home) {
      return null;
    }
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.data[0].id}
        ListHeaderComponent={this.renderHeader}
        renderItem={this.renderItem}
        data={home}
      />
    );
  }
}
