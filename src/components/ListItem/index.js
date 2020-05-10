import React, { PureComponent, } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import styles from './item.style';

export default class MovieItem extends PureComponent {
  render() {
    console.log('listitem----', this.props.data);
    // return (<View></View>)
    const {
      img,
      nm,
      showInfo,
      sc,
      comingTitle,
      wish,
    } = this.props.data;
    const image = img.replace(/http:/g, 'https:').replace(/w.h/g, '128.180');
    return (
      <TouchableOpacity style={styles.item} onPress={this.props.gopage}>
        <Image source={{ uri: image, }} style={styles.image} />
        <View style={styles.right}>
          <View style={styles.rightTop}>
            <Text style={[ styles.width50, styles.fontSize15, styles.black, ]} numberOfLines={1}>
              {nm}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
              <Text style={[ styles.fontSize15, styles.red, ]}>{wish}</Text>
              <Text style={[ styles.fontSize11, styles.red, { paddingBottom: 2, }, ]}>喜欢</Text>
            </View>
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.colorGray} />
            <Text style={[ styles.colorGray, { paddingTop: 3, }, ]} numberOfLines={1}>
              {comingTitle}
            </Text>
            <Text style={[ styles.colorGray, { paddingTop: 3, }, ]} >
              {showInfo}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
