import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, Animated, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { Colors, Typography } from 'styles';
import { iconConstants, deviceConstants, spannableIterate } from 'constants/ntb_sa';
import { getDynamicData } from 'ntb_redux/selectors';
import Labels from 'translations/ntb_sa/cardType';
import { isIOS } from 'utils/ntb_sa';
import GradientRectangle from '../Gradient/GradientRectangle';
import CustomIcon from '../common/CustomIcon';

const reducedheight = deviceConstants.deviceHeight * 0.01;
const cardWidth = (deviceConstants.deviceWidth * 0.878) / 2;

let HEADER_MAX_HEIGHT = 128;
let HEADER_MIN_HEIGHT = 115;
let dynamicHeaders;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    flex: 1,
  },
  fill: {
    flexDirection: 'column',
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainheader: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: isIOS ? 15 : 5,
    // backgroundColor:'red'
  },
  leftContent: {
    width: '85%',
    paddingEnd: 0,
  },
  rightContent: {
    alignItems: 'flex-start',
  },
  popText: {
    fontSize: 24,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  popSubText: {
    fontSize: 10,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    lineHeight: 11,
    paddingStart: 20,
  },
  iconLeft: {
    color: Colors.MAROON,
  },
  horizontalLine: {
    paddingTop: 5,
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 2,
    marginEnd: 20,
    marginStart: 20,
  },
  mainSmallCard: {
    backgroundColor: Colors.WHITE,
  },
  cardStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  cardText: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
  cardCss: {
    justifyContent: 'center',
    marginStart: 10,
    alignItems: 'center',
  },
  scrollViewCss: {
    paddingTop: 10,
  },
});

const CustomAutoScrollModal = props => {
  const {
    HeaderMaxHeight,
    HeaderMinHeight,
    CardMinHeight,
    isVisible,
    ComponentName,
    toggleCallback,
    popText,
    popSubText,
    maxHeight,
  } = props;

  HEADER_MAX_HEIGHT = HeaderMaxHeight;
  HEADER_MIN_HEIGHT = HeaderMinHeight;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const [scrollY] = useState(new Animated.Value(Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0));

  const scrollYAxis = Animated.add(scrollY, Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0);

  const headerTranslate = scrollYAxis.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE - reducedheight],
    extrapolate: 'clamp',
  });

  dynamicHeaders = useSelector(getDynamicData());
  const signatureText = dynamicHeaders?.knowMoreSignature;
  const classicText = dynamicHeaders?.knowMoreClassic;
  const animateViewStyle = {
    position: 'absolute',
    marginTop: 10,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal isVisible={isVisible} useNativeDriver scrollOffsetMax={50} style={styles.modal}>
        <View
          style={[
            styles.fill,
            {
              height: maxHeight || maxHeight === 0 ? maxHeight : deviceConstants.deviceHeight * 0.92,
            },
          ]}
        >
          {/* header  */}
          <View style={styles.mainheader}>
            <View style={styles.headerContainer}>
              <View style={styles.leftContent}>
                <Text style={styles.popText}>{popText}</Text>
              </View>
              <View style={styles.rightContent}>
                <CustomIcon
                  style={styles.iconLeft}
                  name={iconConstants.IC_CLOSE}
                  size={25}
                  onPress={() => toggleCallback(!isVisible)}
                />
              </View>
            </View>
          </View>

          {/* animated for cards with sub title */}
          <Animated.View
            style={{
              transform: [{ translateY: headerTranslate }],
            }}
          >
            <Animated.View
              style={{
                opacity: scrollYAxis.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
              }}
            >
              <View>
                <If condition={popSubText}>
                  <Text style={styles.popSubText}>{popSubText}</Text>
                </If>
              </View>
            </Animated.View>

            <Animated.View
              style={{
                opacity: scrollYAxis.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
              }}
            >
              <View style={styles.horizontalLine} />
            </Animated.View>
            {/* small card */}
            <View style={styles.mainSmallCard}>
              <View style={styles.headerContainer}>
                <GradientRectangle
                  rectWidth={cardWidth}
                  rectHeight={70}
                  containerStyle={styles.cardStyles}
                  startColor={Colors.CARD_START}
                  endColor={Colors.CARD_END}
                >
                  <Text style={styles.cardText}>{Labels.SIGNATURE_CARD}</Text>
                </GradientRectangle>
                <View style={styles.cardCss}>
                  <GradientRectangle
                    rectWidth={cardWidth}
                    rectHeight={70}
                    containerStyle={styles.cardStyles}
                    startColor={Colors.SECOND_CARD_START}
                    endColor={Colors.SECOND_CARD_END}
                  >
                    <Text style={styles.cardText}>{Labels.PLATINUM_CARD}</Text>
                  </GradientRectangle>
                </View>
              </View>
            </View>
            {/* Large card */}
            <Animated.View
              style={{
                height: CardMinHeight,
                opacity: scrollYAxis.interpolate({
                  inputRange: [0, 70, 80],
                  outputRange: [1, 1, 0],
                  extrapolate: 'clamp',
                }),
                ...animateViewStyle,
              }}
            >
              <View style={styles.headerContainer}>
                <GradientRectangle
                  rectWidth={cardWidth}
                  rectHeight={isIOS ? 115 : 100}
                  containerStyle={styles.cardStyles}
                  startColor={Colors.CARD_START}
                  endColor={Colors.CARD_END}
                >
                  <Text style={styles.cardText}>{spannableIterate(signatureText)}</Text>
                </GradientRectangle>

                <View style={styles.cardCss}>
                  <GradientRectangle
                    rectWidth={cardWidth}
                    rectHeight={isIOS ? 115 : 100}
                    containerStyle={styles.cardStyles}
                    startColor={Colors.SECOND_CARD_START}
                    endColor={Colors.SECOND_CARD_END}
                  >
                    <Text style={styles.cardText}>{spannableIterate(classicText)}</Text>
                  </GradientRectangle>
                </View>
              </View>
            </Animated.View>
          </Animated.View>
          {/* scroll View */}
          <Animated.ScrollView
            style={styles.scrollViewCss}
            scrollEventThrottle={16}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
            // iOS offset for RefreshControl
            contentInset={{
              top: HEADER_MAX_HEIGHT,
            }}
            contentOffset={{
              y: -HEADER_MAX_HEIGHT,
            }}
          >
            {ComponentName}
          </Animated.ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

CustomAutoScrollModal.propTypes = {
  HeaderMaxHeight: PropTypes.number.isRequired,
  HeaderMinHeight: PropTypes.number.isRequired,
  CardMinHeight: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleCallback: PropTypes.func.isRequired,
  popText: PropTypes.string.isRequired,
  popSubText: PropTypes.string.isRequired,
  maxHeight: PropTypes.number,
  ComponentName: PropTypes.node.isRequired,
};

CustomAutoScrollModal.defaultProps = {
  maxHeight: undefined,
};

export default CustomAutoScrollModal;
