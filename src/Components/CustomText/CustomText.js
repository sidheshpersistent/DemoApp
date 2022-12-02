/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { StyledText } from '@idfc/ccl-mobile/lib/module/v2';

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
    <StyledText
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
      style={[style,{ flex: flex ? flex : 0, fontFamily: fontFamily ? fontFamily : "Inter" }]}>
      {props.children}


    </StyledText>
  );
};

export default CustomText;
