/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text } from 'react-native';

const CustomText = props => {
  const {
    key,
    fontFamily,
    fontWeight,
    align,
    color,
    fontSize,
    isClickable,
    letterSpacing,
    lineHeight,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,
    maxLength,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    variant,
    flex,
    testID,
    paddingVertical,
    style
  } = props;
  return (
    <Text
      testID={testID}
      style={[style, {
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginVertical: marginVertical,
        color: color,
        fontSize: fontSize,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        flex: flex ? flex : 0,
        fontFamily: fontFamily ? fontFamily : "Inter",
        fontWeight: fontWeight ? '' + fontWeight : 'normal'
      }]}
      key={key}
      align={align}

    // isClickable={isClickable}
    // maxLength={maxLength}
    // variant={variant}

    >{props.children}</Text>
  );
};

export default CustomText;
