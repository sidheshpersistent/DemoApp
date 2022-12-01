import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import { backArrow } from '../../Assets/Images';
import {HeaderContainer} from './BackArrowHeaderStyle';

const BackArrowHeader = props => {
  const {onPressBack, testID } = props;

  return (
    <HeaderContainer>
      <TouchableOpacity testID={testID} onPress={onPressBack}>
        <Image
          style={{width: 24, height: 24}}
          source={backArrow}
        />
      </TouchableOpacity>
    </HeaderContainer>
  );
};

export default BackArrowHeader;
