
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, Font_Size } from '../../Utils';
import CustomText from '../CustomText/CustomText';

const CustomButton = props => {
  const { variant, fontSize, disabled, buttonPress, maxWidth, title, buttonType, width, testID, noBorder, style } = props;

  return (
    <View>
      <TouchableOpacity
        variant={variant}
        fontSize={fontSize}
        testID={testID}
        style={[style, {
          // maxWidth: maxWidth ? maxWidth : '90%',
          width: '90%',
          backgroundColor: Colors.MAROON,
          borderRadius: 30,
          justifyContent: 'center',
          alignSelf: 'center'
        }]}
        disabled={disabled ? disabled : false}
        width={width}
        buttonType={buttonType}
        title={title}
        noBorder={noBorder}
        onPress={() => buttonPress()}
      >
        <CustomText
          fontFamily={FontFamily.INTER_BOLD}
          fontSize={Font_Size.SIZE_20}
          lineHeight={28}
          letterSpacing={-0.2}
          align={"center"}
          color={Colors.WHITE}>{title}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
