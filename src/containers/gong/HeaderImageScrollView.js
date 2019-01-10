import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Header, } from 'react-navigation';
import HeaderImageScrollView, { TriggeringView, } from 'react-native-image-header-scroll-view';
import NavigationButton from '../../components/NavigationButton';

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 200;
const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 50,
    height: 50,
    zIndex: 1000,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    flexDirection: 'row',
  },
  navBack: {
    flex: 1,
    alignSelf: 'stretch',
  },
  navTitle: {
    flex: 3,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default class HeaderImageScrollViews extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerTitle: null,
    headerStyle: {
      position: 'absolute',
      top: 0,
      height: 0,
      elevation: 0,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >

        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => (

            <Image
              source={{
                uri:
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505209877964&di=9632d6f7c4f4aa873214ebc46d9780c3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F57c00d27edf5d.jpg',
              }}
              style={styles.image}
            />

          )}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}
            >
              <NavigationButton
                style={styles.navBack}
                name="back"
                callback={() => {
                  this.props.navigation.goBack();
                }}
              />
              <Text style={styles.navTitle}> 墨子 - 攻城 </Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}> 墨子 </Text>
            </View>
          )}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          >
            <Text style={styles.sectionTitle}> 墨子 - 攻城 </Text>
          </TriggeringView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}> 研发背景 </Text>
            <Text style={styles.sectionContent}>
              量子保密通信技术已经从实验室演示走向产业化。在城市里，通过光纤建构的城域量子网络通信已经开始尝试实际应用，我国在城域光纤量子通信方面已取得了国际领先的地位。
              在量子通信的国际赛跑中，中国属于后来者。经过多年的努力，中国已经跻身于国际一流的量子信息研究行列，在城域量子通信技术方
              面也走在了世界前列，建设完成合肥、济南等规模化量子通信城域网，“京沪干线”大尺度光纤量子通信骨干网也即将竣工。
              然而，这只是开始。“在城市范围内，通过光纤构建城域量子通信网络是最 佳方案。但要实现远距离甚至全球量子通信，仅依靠光纤量子通信技术是远远不够的。”潘建伟说。[2]
              量子保密通信，能够从三个方面保障信息安全。第一， 发送者和接收者之间的信息交互是安全的，不会被窃听或盗取。 第二，“主仆”身份能够自动确认，只有主人才能够使唤“仆人”，
              而其他人无法指挥“仆人”。第三，一旦发送者和接收者之间的传递口令被恶意篡改，使用者会立刻知晓，从而重新发送和接收指令。 原来，用量子通信方式传递信息，传送的是光的最小能
              量单元。但这种最小的颗粒，不能再被分割，也不能复 制。即使采用目前最先进的理想单光子探测器， 在1000公里光纤中进行点对点量子通信，每300年也只能传输一个比特。
              “就好比一支拥有100万人的队伍，到最后可能只剩下几个人， 花了很长时间才能抵达目的地。”这种受制于光纤，不能放大量子通信信号的问题，
              导致了在远距离上信息传递效率很低，令科学家们一筹莫展。虽然通过量子中继手段，即分成若干段传输来降低每一段的损耗，用“量子接力”的方式解决这一难题，但走向实际应用还需时日。
              后来，科学家意识到，真空里不会有光的损耗， 想要实现覆盖全球的广域量子保密通信，还需要借助卫星的中转。 2005年，潘建伟团队实现了13公里自由空
              间量子纠缠和密钥分发实验，证明光子穿透大气层后，其量子态能够有效保持，从而验证了星地量子通信的可行性。近几年开展的一系列后续实验都为发射量子卫星奠定了技术基础。
              “这样一来，通过发射卫星，去除干扰因素， 就可以实现几千公里的量子通信。”潘建伟说，有了量子卫星，
              还可以在宏观距离上检验所谓的量子力学的非局域性，也就是“幽灵般的超距作用”。“看看在实验室里不断被重复检验的理论，放在太空是否还能实现。”
            </Text>
            <Text style={styles.sectionTitle}> 研发单位 </Text>
            <Text style={styles.sectionContent}>
              量子卫星工程由中科院国家空间科学中心总负责； 中国科学技术大学负责科学目标的提出和科学应用系统的研制； 中科院上海微小卫星创新研究院抓总研制卫星系统，中科院上海技术
              物理研究所联合中科大研制有效载荷分系统；中科院国家空间科学中心牵头 负责地面支撑系统研制、建设和运行；对地观测与数字地球科学中心等单位参加。
            </Text>
          </View>
        </HeaderImageScrollView>
      </View>
    );
  }
}
