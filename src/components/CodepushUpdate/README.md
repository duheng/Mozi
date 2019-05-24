## 项目说明
在用 ReactNative 开发 App 时,会用到 CodePush 做应用的热更新,但是在升级的时候没有好看的弹窗提示,自己就找了个时间写了一个简单集成 ReactNative 又有好看的更新弹窗;

## 准备工作
1. 首先是安装 react-native-code-push,  `yarn add react-native-code-push`;
2. link 一下项目, `react-native link react-native-code-push`;
3. 安装 react-native-code-push-dialog, `yarn add react-native-code-push-dialog`;

## 项目中配置
最简单的配置如下,尽量把 <HotUpdate /> 节点放在顶层的节点处;

```flow js

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions} from 'react-native';


import HotUpdate, { ImmediateCheckCodePush } from 'react-native-code-push-dialog';

export default class Index extends React.Component {
    render() {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> CodePushExample </Text>
            <HotUpdate />
            <Text onPress={()=>{
                ImmediateCheckCodePush();
            }}>点击立即检查</Text>
        </View>;
    }
}

```

更多用法

| props | PropTypes | use | description|
|:---:|:---:|:---:|:---:|
|deploymentKey|PropTypes.string|`jaasdasdsa2w12wed2we3e23`|code-push deploymentKey 非必须参数,没有会读取原生的;|
|isActiveCheck| PropTypes.bool|`true` or `false`|code-push CheckFrequency 检查更新策略,只提供2种, true 每次返回前台就更新(高频率), false 只有 App 启动才检测更新, 默认 true;|

```flow js

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions} from 'react-native';


import HotUpdate, { ImmediateCheckCodePush } from 'react-native-code-push-dialog';

export default class Index extends React.Component {
    render() {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> CodePushExample </Text>
            <HotUpdate deploymentKey={'askjdkas32232dw32d'} isActiveCheck={false}/>
            <Text onPress={()=>{
                ImmediateCheckCodePush();
            }}>点击立即检查</Text>
        </View>;
    }
}

```

推热更新代码的时候如果是有多条类型的,尽量在推更新的时候弄成每条后面回车,这样到时候展示的内容才能换行美观;

`code-push release-react App android --des "1.按照区域展示轮播内容;                              2.分析数据,优化体验;" -t "5.1.2"`

显示效果

![](http://ww1.sinaimg.cn/large/8bbf0afbly1fwrho7a10fg20aj0l37bb.gif)

## 地址

> [**GitHub 仓库地址**](https://github.com/strawferry/CodePushDialog)


# 个人博客
### **博客地址: [`https://cblog.ferryvip.com/`](https://cblog.ferryvip.com/)**