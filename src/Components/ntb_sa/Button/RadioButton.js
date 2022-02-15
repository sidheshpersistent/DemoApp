import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Typography } from 'styles';

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  radioButtonHolder: {
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioIcon: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: Typography.H5_BOLD,
    textAlign: 'left',
    color: Colors.MAROON,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});

const RadioButton = props => {
  const { onClick, button } = props;

  const sizeStyle = {
    height: button.size / 2,
    width: button.isRingVisible ? button.size / 2 : 0,
    backgroundColor: button.isRingVisible ? button.color : 'white',
  };
  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.8} style={styles.radioButton}>
      <View
        style={[
          styles.radioButtonHolder,
          {
            height: button.size,
            width: button.size,
            borderColor: button.isRingVisible ? button.color : Colors.MAROON,
          },
        ]}
      >
        <If condition={button.selected}>
          <View
            style={[
              styles.radioIcon,
              {
                ...sizeStyle,
              },
            ]}
          />
        </If>
      </View>
      <Text style={[styles.label, { color: button.selected ? button.color : Colors.MAROON }]}>{button.label}</Text>
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  button: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default RadioButton;
