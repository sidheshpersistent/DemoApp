import React from 'react';
import { View, Image } from 'react-native';
import { Logo } from 'assets/images/ntb_sa';
import { CommonStyle } from 'styles';

const HeaderLogo = () => (
  <View style={[CommonStyle.flexWhite, CommonStyle.centerLeftContent, CommonStyle.screenPadding]}>
    <Image source={Logo} style={CommonStyle.logo} resizeMode="contain" />
  </View>
);

export default React.memo(HeaderLogo);
