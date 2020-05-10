import React, { Component, } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  RefreshControl,
  SectionList,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';
import { Icon, } from 'components';
import { ListItem, ListParagraph, } from '../../components';
import HomeSelector from '../../app/selectors/home';
import * as HomeActions from '../../app/actions/home';
import connect from '../../app/store/connect';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  sectionHead: {
    height: 30,
    paddingTop: 6,
    paddingLeft: 10,
    backgroundColor: '#F7F7F7',
    shadowColor: '#666666',
    shadowOffset: { height: 2, width: 0, },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  sectionHeadText: {
    fontSize: 12,
    color: '#666666',
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
    marginRight: 4,
  },
});

@connect(HomeSelector, HomeActions)
export default class Zi extends Component {
  static navigationOptions = ({ navigation, params, }) => {
    return {
      headerTitle: <View style={styles.headerTitle}>
        <Text style={styles.headerText} onPress={_ => Alert.alert('自定头部标题')}>{ !!params && params.headerName }</Text>
        <Icon name="ios-arrow-forward" size={15} color="#FFFFFF" />
      </View>,

      headerRight: <TouchableOpacity style={{ paddingHorizontal: 15, }} onPress={_ => Alert.alert('自定头部右侧')}>
        <Icon name="md-qr-scanner" size={20} color="#FFFFFF" />
      </TouchableOpacity>,
    };
  };
  constructor(...args) {
    super(...args);
    this.state = {
      isRefreshing: false,
      flagApi: true,
    };
  }


  componentWillMount() {
    this.props.navigation.setParams({
      title: '墨子',
    });
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

  componentDidMount() {
    this.props.navigation.setParams({ headerName: '自定义头部', });
  }


  onRefresh = () => {
    this.setState({ isRefreshing: true, });
    setTimeout(() => {
      this.setState({ isRefreshing: false, });
    }, 3000);
  };

  goPage = (gourl = 'https://www.baidu.com/') => {
    this.props.navigation.navigate('Web', {
      onGoBack: () => this.onRefresh(),
      url: gourl,
    });
  };

  sectionList = () => {
    const { home, } = this.props;

    return (
      <SectionList
        ref={view => { this.flist = view; }}
        style={styles.container}
        stickySectionHeadersEnabled // 安卓粘性头部需要开启这个，ios默认开启
        initialNumToRender={6}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.01}
        removeClippedSubviews
        windowSize={350} // 如果你的列表的2-3行占一屏的话，这个值应该设置450-600之前，如果四五行占一屏应该设置300-350之间
        sections={home.movies}
        renderItem={item => {
          return this.renderItem(item);
        }}
        renderSectionHeader={item => {
          return this.renderHeader(item);
        }}
        keyExtractor={item => {
          return item.id;
        }}
        refreshControl={
          <RefreshControl
            onRefresh={this.onRefresh}
            refreshing={this.state.isRefreshing}
            title="努力加载中..."
            tintColor="#FF5200"
            titleColor="#FF5200"
            progressBackgroundColor="#FF5200"
          />
        }
      />
    );
  };

  renderHeader = headerItem => {
    console.log('renderHeader---', headerItem);
    return (
      <View style={styles.sectionHead}>
        <Text style={styles.sectionHeadText}>{headerItem.section.data[0].nm}</Text>
      </View>
    );
  };

  renderItem = renderItem => {
    const __url = 'https://www.jianshu.com/p/984ef99641f5';
    return (
      <ListItem
        data={renderItem.item}
        gopage={() => {
          this.goPage(__url);
        }}
      />
    );
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
    return (
      <ListParagraph style={{ flex: 1, }} ParagraphLength={6} isLoading={loading} hasTitle list={this.sectionList} />
    );
  }
}
