
import React, { Component, } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, } from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import Icon from '../Icon';

const { width, height, } = Dimensions.get('window');
const Toast = {
  show: (option) => {
    // state: default (默认提示) success（成功） fail（失败）
    const defaultOption = { title: '请请入提示文案', duration: 2000, state: 'default', };
    const options = { ...defaultOption, ...option, };
    const { title, duration, state, } = options;
    let toastUI = (<View style={styles.toastMask}>
      <View style={styles.indicatorViewStyleDefault}>
        <Text style={styles.indicatorTextStyleDefault}>{title}</Text>
      </View>
    </View>);

    if (state == 'success') {
      toastUI = (<View style={styles.toastMask}>
        <View style={styles.indicatorViewStyle}>
          <Icon name="md-checkmark" size={50} color={'#FFFFFF'} />
          <Text style={styles.indicatorTextStyle}>{title}</Text>
        </View>
      </View>);
    } else if (state == 'fail') {
      toastUI = (<View style={styles.toastMask}>
        <View style={styles.indicatorViewStyle}>
          <Icon name="md-close" size={50} color={'#FFFFFF'} />
          <Text style={styles.indicatorTextStyle}>{title}</Text>
        </View>
      </View>);
    }

    this.sibling = new RootSiblings(toastUI);
    this.times = setTimeout(_ => {
      Toast.hide();
    }, duration);
  },

  hide: () => {
    if (this.sibling instanceof RootSiblings) {
      this.sibling.destroy();
      delete this.times;
    }
  },

};

const styles = StyleSheet.create({
  toastMask: {
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  indicatorTextStyle: {
    color: '#FFFFFF',
    marginTop: -2,
    marginLeft: 8,
    textAlign: 'center',
  },
  indicatorViewStyleDefault: {
    backgroundColor: '#111',
    maxWidth: '70%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  indicatorTextStyleDefault: {
    lineHeight: 18,
    color: '#FFFFFF',
  },
}
);

export default Toast;
