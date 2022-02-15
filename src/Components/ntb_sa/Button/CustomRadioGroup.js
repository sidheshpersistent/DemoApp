import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Typography } from 'styles';
import { iconConstants } from 'constants/ntb_sa';
import CustomIcon from '../common/CustomIcon';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    // flexDirection: 'row',
    marginTop: 10,
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
  descriptionTextStyle: {
    textAlign: 'left',
    color: Colors.DARK,
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginStart: 42,
  },
  flexDirection: { flexDirection: 'row' },
  outerConatiner: { flexDirection: 'row', alignItems: 'center' },
  innerContainer: { height: 25, width: 25 },
});

const CustomRadioGroup = props => {
  const { updateStatus, selectedValue = 1, valuesArr } = props;

  const Update = selectedLabel => {
    if (updateStatus != null) {
      updateStatus(selectedLabel);
    }
  };

  return (
    <View>
      {valuesArr &&
        valuesArr.map(element => {
          return (
            <View key={element.value} style={[styles.container]}>
              <TouchableOpacity style={styles.flexDirection} onPress={() => Update(element.value)}>
                <View style={styles.outerConatiner}>
                  <View style={styles.innerContainer}>
                    <CustomIcon
                      style={styles.iconImage}
                      name={element.value === selectedValue ? iconConstants.IC_RADIO_ON : iconConstants.IC_RADIO_OFF}
                      size={24}
                    />
                  </View>
                  <Text style={[styles.leftAlignedStyle]}>{element.label}</Text>
                </View>
              </TouchableOpacity>
              <If condition={element.description && element.description !== '-' && element.value === selectedValue}>
                <Text style={styles.descriptionTextStyle}>{element.description}</Text>
              </If>
            </View>
          );
        })}
    </View>
  );
};

CustomRadioGroup.propTypes = {
  updateStatus: PropTypes.func,
  selectedValue: PropTypes.number,
  valuesArr: PropTypes.arrayOf(PropTypes.object),
};

CustomRadioGroup.defaultProps = {
  updateStatus: undefined,
  selectedValue: 1,
  valuesArr: undefined,
};

export default CustomRadioGroup;
