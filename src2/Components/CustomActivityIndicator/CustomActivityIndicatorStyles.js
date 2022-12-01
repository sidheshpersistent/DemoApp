import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/index';

const CustomActivityIndicatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  indicatorFont: {
    paddingTop: 10,
    fontSize: 16,
  },
  indicatorStyle: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
  },
});

export default CustomActivityIndicatorStyles;
