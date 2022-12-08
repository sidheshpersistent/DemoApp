import React, {Component, useEffect, useState} from 'react';
import {View, Text, TextInput, Animated, TouchableOpacity} from 'react-native';
import {Colors} from '../../Utils';

const CustomPasswordTextInput = props => {
  const {label, suffix, onChangeText, value} = props;
  const {
    onChange,
    labelStyle,
    keyboardType,
    textProps,
    placeholder,
    isActive,
    errorMessage,
    isError,
    errorColor,
    testID,
    onBlur,
    onFocus,
    disabled,
    reference,
    autofocus,
    secureTextEntry,
  } = props;

  const [paddingBox, setPaddingBox] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [animatedIsFocused] = useState(
    new Animated.Value(value === '' ? 0 : 1),
  );

  useEffect(() => {
    animation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const animation = () => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleFocus = () => {
    setIsFocused(true);
    setPaddingBox(4);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setPaddingBox(0);
  };

  const labelStyle1 = {
    position: 'absolute',
    left: 12,
    bottom: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 15],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [22, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  const labelStyle2 = {
    bottom: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [8, 0],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
    marginBottom: 10,
    borderBottomColor: Colors.gray,
    borderBottomWidth: isFocused || !value ? 1 : 0,
    marginTop: 10,
  };

  const textInputStyle = {
    flex: 8,
    fontSize: 22,
    marginBottom: 5,
    width: '85%',
  };

  const suffixStyle = {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  return (
    <View
      style={{
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 8,
        paddingVertical: paddingBox,
      }}>
      <Animated.Text
        style={[
          labelStyle1,
          {color: isError == 'error' ? errorColor : Colors.gray},
        ]}>
        {isError == 'error' ? errorMessage : label}
      </Animated.Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            testID={testID}
            ref={reference}
            secureTextEntry={secureTextEntry}
            autofocus={autofocus}
            value={value}
            onChangeText={onChangeText}
            onChange={onChange}
            keyboardType={keyboardType}
            style={
              isError == 'error'
                ? [
                    textInputStyle,
                    {
                      color: errorColor,
                    },
                  ]
                : [
                    textInputStyle,
                    {
                      color: Colors.gray,
                    },
                  ]
            }
            textProps={textProps}
            placeholder={placeholder}
            isActive={isActive}
            disabled={disabled}
            onFocus={() => {
              handleFocus();
              onFocus;
            }}
            onBlur={() => {
              handleBlur();
              onBlur;
            }}
            blurOnSubmit
          />
          {suffix && <View style={suffixStyle}>{suffix}</View>}
        </View>

        {value ? (
          <View
            style={[
              {position: 'absolute', right: 15},
              isError == 'error'
                ? {backgroundColor: errorColor}
                : {backgroundColor: Colors.gray},
            ]}></View>
        ) : (
          <View
            style={[
              {position: 'absolute', right: 15},
              isError == 'error'
                ? {backgroundColor: errorColor}
                : {backgroundColor: Colors.gray},
            ]}></View>
        )}
      </View>

      <Animated.View
        style={[
          labelStyle2,
          {
            borderBottomColor: isError == 'error' ? errorColor : Colors.gray,
          },
        ]}
      />
    </View>
  );
};

export default CustomPasswordTextInput;
