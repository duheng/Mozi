# Mozi
此项目致力于构建一套最基础，最精简，可维护的react-native项目，是在我们开发的 微影专业版 项目经验基础上进行升级和改造：

**项目初始化**
```
git clone https://github.com/duheng/Mozi.git

cd Mozi

yarn # npm install

yarn # npm run ios(android)

```

### 依赖库

    1. react-navigation: 是官方主推的导航库，支持ios和安卓，如果你想很好的支持安卓用户最好用这个，
    [导航器性能对比](http://reactnative.cn/docs/0.43/navigation.html)

   
    
### 组件库
     1.  MOUI: 是一套轻量的适用于react-native的ui组件库，待开发..
     2.  react-native-vector-icons: 是可以直接使用图片名就能加载图标的第三方库,类似于web的iconfont矢量图，使用很方便, 你不需要在工程文件夹里塞各种图片, 节省很多空间
     3. react-native-scrollable-tab-view：是一个很好用的可滑动的tab导航，（如果你的项目的tab没有超过一屏的话就用react-navigation的TabNavigator）

### 消息推送
    1. jpush-react-native: 极光推送官方支持的 React Native 插件（Android & iOS）
    2. react-native-code-push: 微软的热更新开源库