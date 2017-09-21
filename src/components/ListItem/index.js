import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './item.style';

const directorStyle = (date = false) => {
  const style = [styles.colorGray];
  if (!date) {
    style.push({ marginTop: 10 });
  }
  return style;
};

export default class MovieItem extends PureComponent {
  render() {
    const {
      director,
      actor,
      name,
      poster,
      wantCount,
      date = false,
    } = this.props.data;

    return (
      <TouchableOpacity style={styles.item} onPress={this.props.gopage}>
        <Image source={{ uri: poster }} style={styles.image} />
        <View style={styles.right}>
          <View style={styles.rightTop}>
            <Text
              style={[styles.width50, styles.fontSize15, styles.black]}
              numberOfLines={1}
            >
              {name}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={[styles.fontSize15, styles.red]}>{wantCount}</Text>
              <Text
                style={[styles.fontSize11, styles.red, { paddingBottom: 2 }]}
              >
                想看
              </Text>
            </View>
          </View>
          <View style={styles.rightInfo}>
            <Text style={directorStyle(date)}>导演：{director}</Text>
            <Text
              style={[styles.colorGray, { paddingTop: 3 }]}
              numberOfLines={1}
            >
              主演：{actor}
            </Text>
            {!!date && (
              <Text
                style={[styles.colorGray, { paddingTop: 3 }]}
                numberOfLines={1}
              >
                {date} 上映
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
