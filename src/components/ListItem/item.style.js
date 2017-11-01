/**
 * description:独立样式文件demo
 * Author: 墨子
 * GitHub: https://github.com/duheng/Mozi
 * Email: duheng1100@163.com
 */

import { StyleSheet } from "react-native"

export default StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  image: {
    marginLeft: 10,
    width: 66,
    height: 93,
  },
  right: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightInfo: {
    marginTop: 10,
  },
  colorGray: {
    color: "#666",
    width: "60%",
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
    color: "#FF5200",
  },
  black: {
    color: "#333",
  },
  width50: {
    width: "50%",
  },
})
