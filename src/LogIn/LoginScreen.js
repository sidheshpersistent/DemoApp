import React, {Component, useEffect, useState} from 'react';
import {View, StatusBar, TextInput, Animated, Text} from 'react-native';
import SearchControlInput from '../SearchControl/SearchControlInput';
import FloatingLabelInput from '../TextInput/FloatingLabelInput';

const LoginScreen = () => {
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const listData = [
    {
      id: 0,
      displayText: 'yogesh',
      value: 'bjb',
    },
    {
      id: 1,
      displayText: 'samruddhi',
      value: 'bjb',
    },
    {
      id: 2,
      displayText: 'alkananda',
      value: 'bjb',
    },
    {
      id: 3,
      displayText: 'subrat',
      value: 'bjb',
    },
    {
      id: 4,
      displayText: 'kapil',
      value: 'bjb',
    },
    {
      id: 5,
      displayText: 'rohit',
      value: 'bjb',
    },
    {
      id: 6,
      displayText: 'piyush',
      value: 'bjb',
    },
    {
      id: 7,
      displayText: 'meghna',
      value: 'bjb',
    },
    {
      id: 8,
      displayText: 'siddhi',
      value: 'bjb',
    },
    {
      id: 9,
      displayText: 'sidhesh',
      value: 'bjb',
    },
    {
      id: 10,
      displayText: 'nagnath',
      value: 'bjb',
    },
    {
      id: 11,
      displayText: 'jitendra',
      value: 'bjb',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        padding: 30,
        backgroundColor: 'lightgrey',
      }}>
      <FloatingLabelInput
        label="Email"
        value={value}
        keyboardType="number-pad"
        onChangeText={setValue}
      />

      <SearchControlInput
        placeholder="Search"
        value={searchValue}
        onChangeText={setSearchValue}
        searchList={listData}
      />
    </View>
  );
};

export default LoginScreen;
