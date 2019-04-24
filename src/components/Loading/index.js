
import React, { Component, } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

const { width, height, } = Dimensions.get('window');
const Loading = {

  show: (title = '请稍后...') => {
    this.sibling = new RootSiblings(
      <View style={styles.loadingMask}>
        <View style={styles.indicatorViewStyle}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.indicatorTextStyle}>{title}</Text>
        </View>
      </View>
    );
  },

  hide: () => {
    if (this.sibling instanceof RootSiblings) {
      this.sibling.destroy();
    }
  },

};

const styles = StyleSheet.create({
  loadingMask: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorViewStyle: {
    backgroundColor: '#111',
    width: 120,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  indicatorTextStyle: {
    color: '#FFFFFF',
    marginTop: 10,
  },
}
);

export default Loading;
