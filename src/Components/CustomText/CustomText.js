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
      fontWeight={fontWeight}
      paddingVertical={paddingVertical}
      key={key}
      align={align}
      color={color}
      fontSize={fontSize}
      isClickable={isClickable}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      marginBottom={marginBottom}
      marginHorizontal={marginHorizontal}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginVertical={marginVertical}
      maxLength={maxLength}
      paddingBottom={paddingBottom}
      paddingHorizontal={paddingHorizontal}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      variant={variant}
      style={[style, { flex: flex ? flex : 0, fontFamily: fontFamily ? fontFamily : "Inter" }]}>
      {props.children}


    </Text>
  );
};

export default CustomText;
