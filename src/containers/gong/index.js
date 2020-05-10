import React, { Component, } from 'react';
import { StyleSheet, Text, View, FlatList, InteractionManager, } from 'react-native';
import HomeSelector from '../../app/selectors/home';
import * as HomeActions from '../../app/actions/home';
import { ListItem, ListParagraph, } from '../../components';
import connect from '../../app/store/connect';

const styles = StyleSheet.create({
  container:
   {
     flex: 1,
     marginLeft: 10,
   },
  headerButton: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#B0B0B0',
    backgroundColor: '#B0B0B0',
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

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.actions.fetchMovies({
        ci: 1,
        limit: 100,
        offset: 0,
        token: 'mozi',
        optimus_uuid: 'mozi',
      });
    });
  }

  headerImageScrollView = () => {
    const { navigation, } = this.props;
    navigation.navigate('HeaderImageScrollView');
  };

  flatList = () => {
    const { home, } = this.props;

    return (
      <FlatList
        ref={view => { this.flist = view; }}
        style={styles.container}
        initialNumToRender={8}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.01}
        removeClippedSubviews
        windowSize={350} // 如果你的列表的2-3行占一屏的话，这个值应该设置450-600之前，如果四五行占一屏应该设置300-350之间
        keyExtractor={item => `gong_${item.data[0].id}`}
        ListHeaderComponent={() => {
          return this.renderHeader();
        }}
        renderItem={item => {
          return this.renderItem(item);
        }}
        data={home.movies}
      />
    );
  };
  renderHeader = () => {
    return (
      <View style={styles.headerButton}>
        <Text style={styles.welcome} onPress={this.headerImageScrollView}>
          自定义头部图片 & 缩放!
        </Text>
      </View>
    );
  };

  renderItem = item => {
    return <ListItem data={item.item.data[0]} />;
  };

  render() {
    const { home, } = this.props;
    let loading = true;
    if (!!home.movies && home.movies.length > 0) {
      loading = false;
    }
    setTimeout(() => {
      this.flist && this.flist.recordInteraction();
    }, 50);
    return <ListParagraph style={{ flex: 1, }} ParagraphLength={8} isLoading={loading} list={this.flatList} />;
  }
}
