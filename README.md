# Mozi
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/duheng/Mozi)
[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)](https://github.com/duheng/Mozi)
[![Codecov branch](https://img.shields.io/codecov/c/github/codecov/example-python/master.svg)](https://github.com/duheng/Mozi)


此项目致力于构建一套最基础，最精简，可维护的react-native项目，会提供群里关注度高的问题的解决方案以及demo，此项目虽然还不够完善，但是以此为基础足可以搭建一个大型项目：


群号:397885169（有问题或者需求欢迎进群探讨 ）

知乎：https://www.zhihu.com/people/duheng2011/activities

简书：http://www.jianshu.com/u/c971c7ffa27e


**项目演示**


------


<p align="center">

<img height="470" src="https://github.com/duheng/Mozi/blob/master/splash.gif" />
<img height="470" src="https://github.com/duheng/Mozi/blob/master/SectionList.gif" />
<img height="470" src="https://github.com/duheng/Mozi/blob/master/HeaderImageScrollView.gif" />

</p>



------

**项目结构**

```
├── README.md                   // help
├── src                         // Ract Native
│   ├── app
│   ├── commons                 // 共享基础模块
│   ├── components              // Ract Native 通用组件
│   ├── containers
│   │    ├── page               // 具体业务模块
│   │    ├── app.js             // 导航注册
│   │    └── index.js           // page模块聚合页
│   ├── config.js               // 导航通用配置
│   └── root.js                 // Ract Native 入口页
│
├── index.ios.js                // ios入口文件
├── ios                         // ios原生部分
├── index.android.js            // android入口文件
├── android                     // android原生部分
├── node_modules                // 项目依赖包
├── __test__                    // 自动化测试
├── package.json                // 项目配置信息
├── pre-commit                  // 提交代码时按照.eslint的配置进行校验
├── .editorconfig               // 统一不同编辑器配置
├── .babelrc                    // 设置转码的规则和插件
├── .eslintrc                   // 代码校验规则配置
└── yarn.lock                   // 依赖的版本信息管理
```






**项目初始化**


```
git clone https://github.com/duheng/Mozi.git

cd Mozi

yarn # npm install

yarn # npm run ios(android)

```


**特别注意**   目前npm5存在安装新库时会删除其他库的问题，导致项目无法正常运行。请尽量使用yarn代替npm操作；

### 依赖库

    1. react-navigation: 是官方主推的导航库，支持ios和安卓，如果你想很好的支持安卓用户最好用这个，
    [导航器性能对比](http://reactnative.cn/docs/0.43/navigation.html)
    2. redux:   a predictable state container
    3. react-redux:  offical react binding for redux
    4. redux-saga:  An alternative side effect model for Redux apps
    5. redux-logger:    日志





### 组件库
     1.  MOUI: 是一套轻量的适用于react-native的ui组件库，待开发..
     2.  react-native-vector-icons: 是可以直接使用图片名就能加载图标的第三方库,类似于web的iconfont矢量图，使用很方便, 你不需要在工程文件夹里塞各种图片, 节省很多空间
     3. react-native-scrollable-tab-view：是一个很好用的可滑动的tab导航，（如果你的项目的tab没有超过一屏的话就用react-navigation的TabNavigator）

### 消息推送
    1. jpush-react-native: 极光推送官方支持的 React Native 插件（Android & iOS）
    2. react-native-code-push: 微软的热更新开源库

### 编程规范
    编程规范我们使用的是airbnb，但是这还不够，我希望大部分的代码格式类的工作都能自动化帮我做，开发人员只需要注重业务代码就好。为此我们用prettier+eslint+sublimelinter+airbnb，在保存代码的时候就对我们的代码进行格式化，提交代码之前再做一次严格的airbnb校验。基本就能保证团队代码的可维护性。

###数据统计和错误分析
  1. 项目基础数据由talkingdata收集并分析，7日内错误率达到0.5%时发相关报警短信邮件给开发人员处理。
  2. 细粒度的数据收集用react-native-google-analytics-bridge来收集，主要用于产品部门，大数据，项目运营人员对用户行为以及数据的分析
