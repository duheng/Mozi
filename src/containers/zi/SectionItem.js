import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 66,
    height: 93,
  },
  right: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightInfo: {
    marginTop: 10,
  },
  colorGray: {
    color: '#666',
    width: '60%',
    fontSize: 12,
  },
  fontSize15: {
    fontSize: 15,
  },
  fontSize13: {
    fontSize: 13,
  },
  fontSize11: {
    fontSize: 11,
  },
  red: {
    color: '#FF5200',
  },
  black: {
    color: '#333',
  },
  width50: {
    width: '50%',
  },
});

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
      id,
      director,
      actor,
      name,
      poster,
      wantCount,
      boxOffice,
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
