import {StyleSheet} from 'react-native';
import {Colors, FontFamily, moderateScale} from '../../../Utils/index';


const OutlineButtonStyles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(18),
    borderRadius: moderateScale(40),
    borderWidth: 1,
    borderColor: Colors.Theme_Maroon,
  },
  buttonText: {
    fontSize: moderateScale(20),
    fontFamily: FontFamily.INTER_BOLD,
  },
});

export default OutlineButtonStyles;
