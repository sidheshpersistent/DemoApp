import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {HeaderContainer, BackArrowStyle} from './BackArrowHeaderStyle';

const BackArrowHeader = props => {
  const {onPressBack} = props;

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={onPressBack}>
        <Image
          style={{width: 24, height: 24}}
          source={require('../../assets/back_arrow.png')}
        />
      </TouchableOpacity>
    </HeaderContainer>
  );
};

export default BackArrowHeader;
