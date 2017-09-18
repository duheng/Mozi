import React, { Component } from 'react';
import { WebView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default class Web extends Component {
  static navigationOptions = {
    headerTitle: 'Web',
  };
  // reLoad = () => {
  //   const { navigation } = this.props;
  //   console.log('navigation____', navigation);
  //   navigation.state.params.onGoBack();
  //   navigation.goBack();
  // };
  render() {
    const { navigation } = this.props;
    const { url } = navigation.state.params;
    console.log('web props___', url);
    return (
      <WebView
        ref={ref => {
          this.webview = ref;
        }}
        style={styles.webview}
        source={{ uri: url }}
      />
    );
  }
}
