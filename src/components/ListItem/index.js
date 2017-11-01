import React, { PureComponent } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./item.style"

export default class MovieItem extends PureComponent {
  render() {
    const { image, title, category, summary, like } = this.props.data

    return (
      <TouchableOpacity style={styles.item} onPress={this.props.gopage}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.right}>
          <View style={styles.rightTop}>
            <Text style={[styles.width50, styles.fontSize15, styles.black]} numberOfLines={1}>
              {title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={[styles.fontSize15, styles.red]}>{like}</Text>
              <Text style={[styles.fontSize11, styles.red, { paddingBottom: 2 }]}>喜欢</Text>
            </View>
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.colorGray}>{category}</Text>
            <Text style={[styles.colorGray, { paddingTop: 3 }]} numberOfLines={1}>
              {summary}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
