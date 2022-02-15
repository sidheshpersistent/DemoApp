import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { iconConstants } from 'constants/ntb_sa';
import { Colors, Typography } from 'styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isIos } from 'utils/platform';
import Labels from 'translations/ntb_sa/common';
import CustomIcon from '../common/CustomIcon';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: Colors.BACKGROUND_COLOR,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  placeholderStyle: {
    fontSize: Typography.BODY_2_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    opacity: 0.4,
    color: Colors.DARK,
    paddingVertical: isIos ? 12 : 0,
  },
  inputype: {
    fontSize: Typography.H4_BOLD,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.DARK,
    paddingVertical: isIos ? 12 : 0,
  },
  inputypeNoData: {
    fontSize: Typography.H4_BOLD,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.MAROON,
    paddingVertical: isIos ? 12 : 0,
  },
  btnContainer: { flex: 1, alignSelf: 'center' },
  btnStyle: { alignSelf: 'flex-end' },
});

const HeaderTextInput = props => {
  const [searchTxt, setSearchTxt] = useState('');
  const { searchFilterFunction, hasData } = props;

  const removeText = () => {
    setSearchTxt('');
  };

  const inputFlex = { flex: 5 };
  const inputStyle = () => {
    if (searchTxt.length === 0) {
      return styles.placeholderStyle;
    }
    if (hasData) {
      return styles.inputype;
    }
    return styles.inputypeNoData;
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={Labels.SEARCH_HINT}
        placeholderTextColor={Colors.DARK}
        value={searchTxt || ''}
        onChangeText={text => {
          setSearchTxt(text);
          searchFilterFunction(text);
        }}
        autoFocus={false}
        style={[inputStyle(), { ...inputFlex }]}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={removeText} style={styles.btnStyle}>
          <CustomIcon style={{ color: Colors.MAROON }} name={iconConstants.IC_CLOSE} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

HeaderTextInput.propTypes = {
  searchFilterFunction: PropTypes.func.isRequired,
  hasData: PropTypes.bool,
};

HeaderTextInput.defaultProps = {
  hasData: undefined,
};

export default HeaderTextInput;
