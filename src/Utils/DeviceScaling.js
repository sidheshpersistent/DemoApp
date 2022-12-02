import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
// const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;

const guidelineBaseWidth = 1536;
const guidelineBaseHeight = 2048;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.25) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
