import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation, StackActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, Typography } from 'styles';
import { iconConstants } from 'constants/ntb_sa';
import { isIosDeviceWithNotch } from 'utils/platform';
import Labels from 'translations/ntb_sa/common';
import CustomIcon from '../common/CustomIcon';
import HeaderTextInput from './HeaderTextInput';

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: Colors.WHITE,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: isIosDeviceWithNotch ? 40 : 0,
  },
  customIconStyle: {
    alignSelf: 'center',
    color: Colors.MAROON,
    padding: 8,
  },
  titleContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    opacity: 0.4,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.H3_BOLD,
  },
});

const SearchHeader = props => {
  const navigation = useNavigation();
  const { searchFilterFunction, hasData } = props;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{Labels.FAQ}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(StackActions.pop());
          }}
        >
          <CustomIcon style={styles.customIconStyle} name={iconConstants.IC_ARROW_BACK} size={24} />
        </TouchableOpacity>
      </View>
      <HeaderTextInput hasData={hasData} searchFilterFunction={searchFilterFunction} />
    </View>
  );
};

SearchHeader.propTypes = {
  searchFilterFunction: PropTypes.func.isRequired,
  hasData: PropTypes.bool.isRequired,
};

export default SearchHeader;
