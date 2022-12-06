
import React from 'react';
import { Button, View } from 'react-native';

const CustomButton = props => {
  const { variant, fontSize, disabled, buttonPress, maxWidth, title, buttonType, width, testID, noBorder, style } = props;

  return (
    <View>
      <Button
        variant={variant}
        fontSize={fontSize}
        testID={testID}
        style={[style, { maxWidth: maxWidth ? maxWidth : '90%' }]}
        disabled={disabled ? disabled : false}
        width={width}
        buttonType={buttonType}
        title={title}
        noBorder={noBorder}
        onPress={() => buttonPress()}
      />
    </View>
  );
};

export default CustomButton;
