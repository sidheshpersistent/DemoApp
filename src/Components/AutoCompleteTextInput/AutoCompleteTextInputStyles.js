import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../Utils/index';

const CustomTextInputStyles = StyleSheet.create({
  container: {
    zIndex: 12,
    elevation: 6,
    borderRadius: 8,
    backgroundColor: 'red',
    marginVertical: 16,
  },
  textFontRed: {
    fontSize: moderateScale(15),
    color: Colors.Red_Warning,
    borderBottomColor: Colors.Red_Warning,
    borderBottomWidth: 1,
  },
  textInputStyle: {
    marginTop: 9,
    borderColor: Colors.Grey,
    fontSize: moderateScale(20),
    marginHorizontal: 12,
    fontWeight: 'bold',
    color: Colors.Black,
  },
  textFont: {
    fontSize: moderateScale(15),
  },
  placeholderStyle: {
    marginBottom: 12,
    marginHorizontal: 16,
  },
  imgWarning: {
    position: 'absolute',
    top: '-10%',
    right: '14%',
    tintColor: Colors.Red_Warning,
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
  imagePasswordview: {
    position: 'absolute',
    top: '15%',
    right: '5%',
    tintColor: Colors.Red_Warning,
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
  listStyle: {
    backgroundColor: Colors.White,
    elevation: 10,
    maxHeight: 240,
    height: 'auto',
    position: 'absolute',
    top: 55,
    width: '100%',
    zIndex: 99,
    borderRadius: 8,
  },
  listItemText: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Black,
  },
  listItemSeperator: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
  },

  //Portrait Mode
  textInputStyle_p: {
    // marginTop: moderateScale(9),
    borderColor: Colors.Grey,
    fontSize: moderateScale(18),
    marginHorizontal: 12,
    fontWeight: 'bold',
    color: Colors.Black,
  },
  placeholderStyle_p: {
    marginBottom: 10,
    marginHorizontal: 16,
  },
});

export default CustomTextInputStyles;
