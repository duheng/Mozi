import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Header } from 'react-navigation'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'

const MIN_HEIGHT = Header.HEIGHT
const MAX_HEIGHT = 200
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
    paddingTop: 16,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
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
})

export default class HeaderImageScrollViews extends Component {
  static navigationOptions = {
    headerBackTitle: <View />,
    headerTintColor: 'white',
    headerStyle: {
      position: 'absolute',
      top: 0,
      elevation: 0,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
  }

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
                this.navTitleView = navTitleView
              }}
            >
              <Text style={styles.navTitle}> 墨子 - 攻城 </Text>{' '}
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}> 墨子 </Text>{' '}
            </View>
          )}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          >
            <Text style={styles.sectionTitle}> 墨子 - 攻城 </Text>{' '}
          </TriggeringView>{' '}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}> 早年经历 </Text>{' '}
            <Text style={styles.sectionContent}>
              作为一个平民， 墨子在少年时代做过牧童， 学过木工。 据说他制作守城器械的本领比公输班还要高明。 他自称是“ 鄙人”， 被人称为“ 布衣之士”。 作为没落的贵族后裔，
              他自然也受到必不可少的文化教育，《 史记》 记载墨子曾做过宋国大夫。 墨子是一个有相当文化知识， 又比较接近工农小生产者的士人。 自诩说“ 上无君上之事， 下无耕农之难”，
              是一个同情“ 农与工肆之人” 的士人。 在他的家乡， 滔滔的黄河奔流东去， 墨子决心出去拜访天下名师， 学习治国之道， 恢复自己先祖曾经有过的荣光{' '}
            </Text>
            <Text style={styles.sectionTitle}> 墨家团体 </Text>{' '}
            <Text style={styles.sectionContent}>
              墨家是一个有严密组织纪律的团体， 穿短衣草鞋， 参加劳动， 以吃苦 墨家团体 墨家团体 为高尚。 如果谁违背了这些原则， 轻则开除， 重则处死。 墨家的最高领袖称为“
              矩子”（ 巨子）， 墨家的成员都称为“ 墨者”， 代代下传， 所有墨者都服从巨子的指挥必须服从“ 巨子” 的指导， 甚至可以“ 赴汤蹈火， 死不旋踵”。[9]
              第一任矩子是墨子， 后来的“ 矩子” 有孟胜、 田襄子、 腹等。 由“ 矩子” 执行“ 墨子之法”。 墨者“ 矩子” 腹住在秦国， 他的儿子杀人， 本应依法处死。
              但秦惠王认为腹年老， 只有一个儿子， 就命令不杀。 腹却说， 墨者之法规定：“ 杀人者死， 伤人者刑。” 这是禁止杀人伤人的必要措施， 它符合“ 天下之大义”，
              还是坚持把自己的儿子杀了。 这个故事生动的反映了墨家纪律的严明。 正因为如此， 墨者很能战斗。 但是， 墨家是一个具有宗教性的集团， 往往容易被人利用。 据《 史记》
              记载， 在楚国旧贵族阳城君等杀害从事变法改革的吴起时， 墨者“ 矩子” 孟胜就站在阳城君一边。 后来阳城君畏罪逃走， 楚国要收回其封国。 孟胜为阳城君守封国， 忠于阳城君。
              他传“ 矩子” 于田襄子， 自己为阳城君死难， 许多弟子也从其死。 从这个故事可以看出， 墨 正如《 史记· 游侠列传》 所说的游侠那样， 可能行为并不符合正义，
              但是说话算话， 讲信用， 答应人家要办的事就必须办到。 而且行动果断， 不爱惜自己的生命， 去解救别人的危难。{' '}
            </Text>
          </View>
        </HeaderImageScrollView>
      </View>
    )
  }
}
