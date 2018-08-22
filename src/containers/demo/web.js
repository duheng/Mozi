import React, { Component, } from 'react';
import { WebView, StyleSheet, ActivityIndicator, } from 'react-native';

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default class Web extends Component {
  static navigationOptions = {
    headerTitle: 'Web',
  };
  // 这是返回刷新的demo，如果需要就取消注释调试一下
  // reLoad = () => {
  //   const { navigation } = this.props;
  //   console.log('navigation____', navigation);
  //   navigation.state.params.onGoBack();
  //   navigation.goBack();
  // };

  loading = () => {
    return <ActivityIndicator style={styles.webview} size="small" color="#c5c5c5" />;
  };

  render() {
    const { navigation, } = this.props;
    const { url, userAgent = 'Mozi/', } = navigation.state.params;
    console.log('web props___', url);
    return (
      <WebView
        ref={ref => {
          this.webview = ref;
        }}
        style={styles.webview}
        source={{ uri: url, }}
        userAgent={userAgent}
        startInLoadingState
        renderLoading={() => {
          return this.loading();
        }}
      />
    );
  }
}
