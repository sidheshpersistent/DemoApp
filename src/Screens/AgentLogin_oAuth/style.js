import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../Utils/index';

const style = StyleSheet.create({
  containerImage: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(20),
  },
  logoImage: {
    height: moderateScale(100),
    width: moderateScale(200),
  },
  menuHowtoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  howtoButton: {
    paddingVertical: moderateScale(14),
    backgroundColor: Colors.Minimum_Track_TintColor,
  },
  menuImage: {
    paddingLeft: 40,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(80),
  },
  innerContainer_p: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(40),
  },
  smileyLogo: {
    height: moderateScale(150),
    width: moderateScale(300),
  },
  letsText: {
    fontSize: moderateScale(26),
    color: Colors.White,
  },
  versionText: {
    paddingTop: moderateScale(10),
    color: Colors.White,
    fontSize: moderateScale(16),
  },
});
export default style;
