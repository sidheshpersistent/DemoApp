import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'styles';
import { ButtonText } from './CustomButton.style';

const CustomButton = props => {
  const {
    bgColor,
    textColor = Colors.MAROON,
    disabledColor = Colors.GREY,
    disabledTextColor = Colors.MAROON,
    disabled,
    onPress,
    borderSize,
    buttonWidth = 149,
    buttonHeight = 48,
    text,
    buttonPadding = 10,
    // buttonFontSize,
  } = props;

  const containerStyle = {
    backgroundColor: disabled ? disabledColor : bgColor,
    borderWidth: borderSize,
    borderColor: disabled ? Colors.GREY : Colors.MAROON,
    height: buttonHeight,
    borderRadius: 24,
    width: buttonWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: buttonPadding,
  };
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={{ ...containerStyle }}>
        <ButtonText textColorProp={disabled ? disabledTextColor : textColor} opacity={disabled ? 0.4 : 1}>
          {text}
        </ButtonText>
      </View>
    </TouchableOpacity>
  );
};
CustomButton.defaultProps = {
  bgColor: undefined,
  textColor: Colors.MAROON,
  disabledColor: Colors.GREY,
  disabledTextColor: Colors.MAROON,
  disabled: undefined,
  borderSize: undefined,
  buttonWidth: 149,
  buttonHeight: 48,
  text: undefined,
  buttonPadding: 10,
};

CustomButton.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  disabledColor: PropTypes.string,
  disabledTextColor: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  borderSize: PropTypes.number,
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
  text: PropTypes.string,
  buttonPadding: PropTypes.number,
};

export default CustomButton;
