/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {View} from 'react-native';
//not used

import { Checkbox } from '@idfc/ccl-mobile/lib/module/v2'

const CustomCheckbox = props => {
const {checked } =props
// onChange,isLabelBold,style,testID,validationStatus,accessibilityLabel,theme,disabled

  return (
    <View >
       <Checkbox checked={checked} />
      
    </View>
  );
};

export default CustomCheckbox;
