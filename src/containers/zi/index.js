import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  SectionList,
  InteractionManager,
} from "react-native"
import { ListItem, ListParagraph } from "../../components"
import HomeSelector from "../../app/selectors/home"
import * as HomeActions from "../../app/actions/home"
import connect from "../../app/store/connect"

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  sectionHead: {
    height: 30,
    paddingTop: 6,
    paddingLeft: 10,
    backgroundColor: "#F7F7F7",
    shadowColor: "#666666",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  sectionHeadText: {
    fontSize: 12,
    color: "#666666",
  },
})

@connect(HomeSelector, HomeActions)
export default class Zi extends Component {
  static navigationOptions = {
    headerTitle: "SectionList Demo",
  }
  constructor(...args) {
    super(...args)
    this.state = {
      isRefreshing: false,
    }
  }

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.actions.fetchJunShi()
    })
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    setTimeout(() => {
      this.setState({ isRefreshing: false })
    }, 3000)
  }

  goPage = (gourl = "https://www.baidu.com/") => {
    this.props.navigation.navigate("Web", { onGoBack: () => this.onRefresh(), url: gourl })
  }

  sectionList = () => {
    const { home } = this.props
    return (
      <SectionList
        style={styles.container}
        stickySectionHeadersEnabled // 安卓粘性头部需要开启这个，ios默认开启
        initialNumToRender={6}
        sections={home}
        renderItem={item => {
          return this.renderItem(item)
        }}
        renderSectionHeader={item => {
          return this.renderHeader(item)
        }}
        keyExtractor={item => {
          return item.itemid
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
    )
  }

  renderHeader = headerItem => {
    return (
      <View style={styles.sectionHead}>
        <Text style={styles.sectionHeadText}>{headerItem.section.data[0].source}</Text>
      </View>
    )
  }

  renderItem = renderItem => {
    const { url } = renderItem.item
    return (
      <ListItem
        data={renderItem.item}
        gopage={() => {
          this.goPage(url)
        }}
      />
    )
  }

  render() {
    const { loading } = this.props
    return (
      <ListParagraph ParagraphLength={6} isLoading={loading} hasTitle list={this.sectionList} />
    )
  }
}
