import React from 'react';
import {
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import Modal from 'react-native-modal';
import { Colors, FontWeight, Font_Size, LetterSpacing, Line_Height } from '../../Utils';
import CustomText from '../CustomText/CustomText';
import {
  LogoView,
  ModalView,
} from './styled';

const LoaderComponent = props => {
  const {
    isVisible,
    animationIn,
    style,
  } = props;


  return (
    <Modal
      animationIn={animationIn}
      isVisible={isVisible}
      backdropColor={"#ffffff"}
      backdropOpacity={0.70}
    >
      <LogoView>
        <ModalView style={style}>
          <View style={{ alignItems: 'center' }}>
            <ActivityIndicator size={'large'} />
            <CustomText
              style={{
                fontSize: Font_Size.SIZE_20,
                color: Colors.BLACK,
                fontWeight: FontWeight.BOLD,
                paddingVertical: 16
              }}>Loading...</CustomText>
          </View>
        </ModalView>
      </LogoView>
    </Modal>
  );
};



export default LoaderComponent;
