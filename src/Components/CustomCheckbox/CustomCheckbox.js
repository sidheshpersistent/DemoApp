/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CustomCheckbox = props => {
  const { checked } = props;
  return (
    <View >
      <CheckBox
        value={checked} />

    </View>
  );
};

export default CustomCheckbox;
