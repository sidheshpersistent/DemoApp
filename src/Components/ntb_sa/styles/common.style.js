import { Dimensions } from 'react-native';
import * as Colors from './color';
import * as Typography from './typography';

const deviceWidth = Dimensions.get('window').width;
export const customFontSize = deviceWidth >= 360 ? 14 : 12.5;
export const customInnerFontSize = deviceWidth >= 360 ? 12 : 11;

export const modalStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  backgroundColor: 'rgba(100,100,100,0.8)',
};

export const version = {
  fontWeight: 'bold',
  fontStyle: 'normal',
  textAlign: 'center',
};

export const scrollView = {
  flexGrow: 1,
  flexDirection: 'column',
  paddingTop: 0,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'transparent',
};

export const screenPadding = {
  paddingHorizontal: 18,
};

export const screenMargin = {
  marginHorizontal: 18,
};

export const marginVertical16 = {
  marginVertical: 16,
};

export const paddingH20 = {
  paddingHorizontal: 20,
};

export const paddingV20 = {
  paddingVertical: 20,
};

export const cardStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 12,
  paddingBottom: 0,
  borderRadius: 12,
};

export const centerContent = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const centerLeftContent = {
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export const flexWhite = {
  flex: 1,
  backgroundColor: Colors.WHITE,
};

export const imageStyle = { height: 24, width: 75 };

export const logoWrapper = { flex: 1, flexDirection: 'row', padding: 25 };

export const digitalSavingText = { marginTop: 24 };

export const balanceUpContainer = {
  height: 48,
  backgroundColor: Colors.GREY,
  marginTop: 28,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const balaceUpText = {
  justifyContent: 'center',
  fontSize: 12,
  fontFamily: Typography.FONT_FAMILY_REGULAR,
  opacity: 0.4,
  color: Colors.DARK,
};

export const allScreenBackImage = {
  opacity: 1,
  paddingTop: 0,
  width: '100%',
};

export const headerLogoWrapper = {
  flex: 1,
  flexDirection: 'row',
  paddingTop: 24,
  paddingBottom: 2,
  width: '100%',
};

export const logo = { height: 27, width: 75 };

export const enabledButton = {
  fontSize: 14,
  fontWeight: 'bold',
  fontFamily: Typography.FONT_FAMILY_BOLD,
};
export const disabledButton = {
  ...enabledButton,
  color: Colors.MAROON,
};

export const commonCardStyle = {
  height: 80,
  width: 80,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 40,
  alignSelf: 'center',
  flexDirection: 'row',
  marginStart: 15,
};

export const customIconStyle = {
  alignItems: 'center',
  marginBottom: 3,
};

export const countDownText = {
  paddingTop: 5,
  fontSize: 9,
  color: Colors.DARK,
  fontFamily: Typography.FONT_FAMILY_REGULAR,
  lineHeight: 20,
};

export const countDownContainer = {
  paddingTop: 5,
  fontSize: 9,
  color: Colors.DARK,
  fontFamily: Typography.FONT_FAMILY_REGULAR,
};
export const customLinkContainer = { flexDirection: 'row' };

export const gradientCustStyle = {
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
};

export const gradientContentStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'transparent',
};

export const arrow = {
  flex: 0.07,
  alignItems: 'flex-end',
};

export const chkBoxNoteContainer = {
  backgroundColor: Colors.WHITE,
  padding: 20,
  alignSelf: 'stretch',
};

export const marginTop20 = {
  marginTop: 20,
};

export const marginBottom20 = {
  marginBottom: 20,
};

export const customCardInputStyle = {
  paddingHorizontal: 20,
  paddingVertical: 0,
  paddingTop: 16,
  alignSelf: 'center',
  width: deviceWidth * 0.89,
};

export const customCardStyle = {
  paddingHorizontal: 19,
  paddingVertical: 0,
  alignSelf: 'center',
  width: deviceWidth * 0.89,
};

export const headerCardStyle = {
  flexDirection: 'row',
  padding: 20,
  elevation: 5,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  backgroundColor: Colors.WHITE,
};
