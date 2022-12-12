import React from 'react';
import PropTypes from 'prop-types';
import { RadioSelect, RadioSelectedInnerCircle, RadioDeselect, RadioContainer, RadioLabelView } from './RadioButton.style';
import { Text } from 'react-native';

export const RADIO_BUTTON_VARIANTS = {
  highlight: 'highlight',
};

const RadioButton = (props) => {
  const { disabled, onChange, name, checked, children, value, id, variant, style, ...restProps } = props;
  return (
    <RadioContainer activeOpacity={1} disabled={disabled} selected={checked} variant={RADIO_BUTTON_VARIANTS[variant]} style={style} onPress={(selectedValue) => onChange(selectedValue)} {...restProps}>
      {checked ?
        <RadioSelect
          variant={RADIO_BUTTON_VARIANTS[variant]}
          accessibilityLabel={props.accessibilityLabel ? `${props.accessibilityLabel}-Selected` : undefined}
          width={24}
          height={24}
          testID={props.testID ? `${props.testID}-Selected` : undefined}>
          <RadioSelectedInnerCircle />
        </RadioSelect>
        :
        <RadioDeselect
          variant={RADIO_BUTTON_VARIANTS[variant]}
          disabled={disabled}
          accessibilityLabel={props.accessibilityLabel ? `${props.accessibilityLabel}-UnSelected` : undefined}
          width={24}
          height={24}
          testID={props.testID ? `${props.testID}-UnSelected` : undefined}
        />}
      <Text> {children}</Text>
      {/* <RadioLabelView accessibilityLabel={props.accessibilityLabel} testID={props.testID ? `${props.testID}-label` : undefined} disabled={disabled}>
        {children}
      </RadioLabelView> */}

    </RadioContainer>
  );
};

RadioButton.defaultProps = {
  disabled: false,
  onChange: () => { },
  name: null,
  children: undefined,
  value: undefined,
  variant: undefined,
  checked: false,
  style: null,
  accessibilityLabel: undefined,
  testID: undefined,
};

RadioButton.propTypes = {
  /**  Controls the disabled state */
  disabled: PropTypes.bool,

  /** Calls the callback function */
  onChange: PropTypes.func,

  /** Sets the name for radio button */
  name: PropTypes.string,

  /** Adds the children into the component */
  children: PropTypes.node,

  /** Sets the value for the input element */
  value: PropTypes.string,

  /** Sets the unique id to the input element */
  id: PropTypes.string.isRequired,

  /** highlight - Adds the background color to the component */
  variant: PropTypes.oneOf(['highlight']),

  /** States the status  */
  checked: PropTypes.bool,

  /** Adds the custom style to the radio button container */
  style: PropTypes.shape({}),

  accessibilityLabel: PropTypes.string,

  testID: PropTypes.string,
};

/** @component */
export default RadioButton;
