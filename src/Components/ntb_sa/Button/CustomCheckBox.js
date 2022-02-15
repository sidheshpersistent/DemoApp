import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Colors, Typography } from 'styles';
import { iconConstants } from 'constants/ntb_sa';
import CustomIcon from '../common/CustomIcon';

const CheckBoxWrapper = styled(View)`
  flex-direction: row;
`;
const InnerWrapper = styled(View)`
  height: 30px;
  width: 30px;
`;
const styles = StyleSheet.create({
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
    fontSize: Typography.BODY_3_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.DARK,
    textAlign: 'left',
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
  btnContainer: { flex: 1 },
});

const CustomCheckBox = props => {
  const {
    // isChecked,
    label,
    labelStyle = styles.leftAlignedStyle,
    updateStatus,
    disabled,
    checked,
    onPressText,
  } = props;

  // const [setChecked] = useState(checked);
  // useEffect(() => {
  //   setChecked(isChecked);
  // }, [isChecked]);

  const update = newStatus => {
    // setChecked(newStatus);
    if (updateStatus != null) {
      updateStatus(newStatus);
    }
  };

  return (
    <CheckBoxWrapper>
      <InnerWrapper>
        <TouchableHighlight
          style={styles.btnContainer}
          disabled={disabled}
          underlayColor="transparent"
          onPress={() => {
            update(!checked);
          }}
        >
          <CustomIcon
            style={styles.iconImage}
            name={checked ? iconConstants.IC_CHECKBOX_ON : iconConstants.IC_CHECKBOX_OFF}
            size={28}
          />
        </TouchableHighlight>
      </InnerWrapper>
      <Text
        onPress={() => {
          if (!disabled) {
            if (onPressText) {
              onPressText();
            } else {
              update(!checked);
            }
          }
        }}
        style={[styles.leftAlignedStyle, labelStyle]}
      >
        {label}
      </Text>
    </CheckBoxWrapper>
  );
};

CustomCheckBox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  labelStyle: PropTypes.oneOfType([PropTypes.object]),
  updateStatus: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onPressText: PropTypes.func,
};

CustomCheckBox.defaultProps = {
  label: undefined,
  labelStyle: styles.leftAlignedStyle,
  disabled: undefined,
  checked: undefined,
  onPressText: undefined,
};

export default CustomCheckBox;
