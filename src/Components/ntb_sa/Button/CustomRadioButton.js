import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Typography } from 'styles';
import { iconConstants } from 'constants/ntb_sa';
import CustomIcon from '../common/CustomIcon';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    flex: 1,
  },
  iconImage: {
    color: Colors.MAROON,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
  },
  leftAlignedStyle: {
    textAlign: 'left',
    color: Colors.DARK,
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginStart: 16,
  },
  flexDirectionStyle: { flexDirection: 'row' },
  iconContainer: { height: 25, width: 25 },
});

const CustomRadioButton = props => {
  // const {PROP} = props;
  const { containerStyle, labelStyle = styles.leftAlignedStyle, updateValue, selectedValue, valuesArr } = props;
  const [selected, setValue] = useState(selectedValue);

  const Update = selectedLabel => {
    setValue(selectedLabel);
    if (updateValue != null) {
      updateValue(selectedLabel);
    }
  };

  return (
    <View>
      {valuesArr &&
        valuesArr.map(element => {
          return (
            <View key={element.label} style={[styles.container, containerStyle]}>
              <TouchableOpacity style={styles.flexDirectionStyle} onPress={() => Update(element.label)}>
                <View style={styles.flexDirectionStyle}>
                  <View style={styles.iconContainer}>
                    <CustomIcon
                      style={styles.iconImage}
                      name={element.label === selected ? iconConstants.IC_RADIO_ON : iconConstants.IC_RADIO_OFF}
                      size={24}
                    />
                  </View>
                  <Text style={[styles.leftAlignedStyle, labelStyle]}>{element.value}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
    </View>
  );
};

CustomRadioButton.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object]),
  labelStyle: PropTypes.oneOfType([PropTypes.object]),
  updateValue: PropTypes.func,
  selectedValue: PropTypes.string,
  valuesArr: PropTypes.arrayOf(PropTypes.object),
};

CustomRadioButton.defaultProps = {
  containerStyle: undefined,
  labelStyle: styles.leftAlignedStyle,
  updateValue: undefined,
  selectedValue: undefined,
  valuesArr: undefined,
};

export default CustomRadioButton;
