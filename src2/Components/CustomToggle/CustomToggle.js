/* eslint-disable react/destructuring-assignment  */
/* eslint-disable react/no-children-prop */
import React from 'react';
import {View} from 'react-native';


import { Toggle } from '@idfc/ccl-mobile/lib/module/v2'
//not used
const CustomToggle = props => {
const {checked ,onChange,children,disabled} =props
    

  return (
    <View >
       <Toggle checked={checked} onChange ={onChange} children={children} disabled={disabled}/>
      
    </View>
  );
};

export default CustomToggle;
