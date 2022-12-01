import PropTypes from 'prop-types';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Colors} from '../../../Utils/index';
import { TestIds } from '../../../Utils/Constants';
import styles from './OutlineButtonStyles';

const OutlineButton = props => {
  return (
    <View>
      <Pressable
        testID={TestIds.OutlineButton}
        accessibilityLabel={props.testID ?? 'OutlineButton'}
        android_ripple={{color: Colors.Silver}}
        style={[
          styles.buttonStyle,
          props.style,
          {
            width: props.width !== undefined ? props.width : null,
            borderColor: props.disable ? Colors.Silver : Colors.Theme_Maroon,
          },
        ]}
        onPress={() => {
          props.onPress();
        }}
        disabled={props.disable}
      >
        <Text
          style={[
            styles.buttonText,
            {
              color: props.disable
                ? Colors.Button_Disabled
                : props.textColor
                ? props.textColor
                : Colors.Theme_Maroon,
            },
          ]}
        >
          {' ' + props.name + ' '}
        </Text>
      </Pressable>
    </View>
  );
};

OutlineButton.propTypes = {
  testID: PropTypes.string,
  style: PropTypes.object,
  // width: PropTypes.string,
  onPress: PropTypes.func,
  disable: PropTypes.bool,
  name: PropTypes.string,
};

OutlineButton.defaultProps = {
  testID: '',
  style: {},
  // width: '70%',
  onPress: undefined,
  disable: false,
  name: 'Back',
};

export default OutlineButton;
