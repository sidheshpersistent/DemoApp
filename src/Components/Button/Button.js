import React from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'styled-components/native';
import {TitleWrapper, Container, Label, IconWrapper} from './Button.style';
import {ButtonType, ButtonSize} from './Button.constants';
import Icon from '../Icon';

const Button = ({buttonType, size, width, isRounded, onPress, title, fontSize, disabled, iconName, accessibilityLabel, testID, noBorder, theme, ...restProps}) => {
  const color = disabled ? theme?.Button[buttonType]?.disabled?.color : theme?.Button[buttonType]?.color;
  const iconColor = disabled ? theme?.Button[buttonType]?.disabled?.iconColor : theme?.Button[buttonType]?.icon?.iconColor;
  return (
    <Container
      size={size}
      customWidth={width}
      accessible
      accessibilityLabel={accessibilityLabel}
      activeOpacity={0.6}
      buttonType={buttonType}
      testID={testID}
      disabled={disabled}
      onPress={disabled ? null : onPress}
      noBorder={noBorder}
      {...restProps}>
      <TitleWrapper>
        {
          iconName?<IconWrapper>
          <Icon name={iconName} primaryColor={iconColor} size={20} />
        </IconWrapper>:null
        }
          
        
        <Label bold color={color} fontSize={fontSize || 14} numberOfLines={1}>
          {title}
        </Label>
      </TitleWrapper>
    </Container>
  );
};

Button.propTypes = {
  /** Visible theme of button: primary, secondary */
  buttonType: PropTypes.oneOf(Object.values(ButtonType)),

  /** Title inside button */
  title: PropTypes.string,

  /** Font size of title inside button */
  fontSize: PropTypes.number,

  /** A boolean value to make button ends rounded */
  isRounded: PropTypes.bool,

  /** ID to test the button */
  testID: PropTypes.string,

  /** accessibility label for button */
  accessibilityLabel: PropTypes.string,

  /** callback function for button */
  onPress: PropTypes.func.isRequired,

  /**  Controls the disabled state */
  disabled: PropTypes.bool,

  /** Icon shown next to the label */
  iconName: PropTypes.string,

  /** Size of button: normal, large, small */
  size: PropTypes.oneOf(Object.values(ButtonSize)),

  /** Set the custom width of the button component */
  width: PropTypes.string,

  /** Removes the border from the button component */
  noBorder: PropTypes.bool,

  theme: PropTypes.shape({
    Button: PropTypes.shape({
      primary: PropTypes.shape({
        color: PropTypes.string,
        icon: PropTypes.shape({
          iconColor: PropTypes.string,
        }),
        disabled: PropTypes.shape({
          color: PropTypes.string,
          iconColor: PropTypes.string,
        }),
      }),
      secondary: PropTypes.shape({
        color: PropTypes.string,
        icon: PropTypes.shape({
          iconColor: PropTypes.string,
        }),
        disabled: PropTypes.shape({
          color: PropTypes.string,
          iconColor: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

Button.defaultProps = {
  buttonType: ButtonType.PRIMARY,
  title: 'Custom Button',
  fontSize: undefined,
  isRounded: true,
  testID: undefined,
  accessibilityLabel: undefined,
  disabled: false,
  iconName: null,
  size: ButtonSize.NORMAL,
  width: undefined,
  noBorder: false,
};

/** @component */
export default withTheme(Button);
