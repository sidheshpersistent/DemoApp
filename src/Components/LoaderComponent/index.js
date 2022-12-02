import React from 'react';
import {
  View,
  Image
} from 'react-native';
import Modal from 'react-native-modal';
import {
  LogoView,
  ModalView,
} from './styled';
import LOADER_IMAGE_DARK from '@idfc/ccl-commons/assets/images/idfc-loader-dark.gif';
import { LOADER_SIZE, DEFAULT_LOADER_SIZE } from '@idfc/ccl-commons/constants';

const LoaderComponent = props => {
  const {
    isVisible,
    animationIn,
    style,
  } = props;
  const loaderSize = LOADER_SIZE[DEFAULT_LOADER_SIZE]; // LOADER_SIZE[size] || LOADER_SIZE[DEFAULT_LOADER_SIZE]
  const LOADER_IMAGE = LOADER_IMAGE_DARK; //theme?.name === 'base' ? LOADER_IMAGE_LIGHT : LOADER_IMAGE_DARK

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
            <Image
              source={LOADER_IMAGE}
              style={{
                width: loaderSize,
                height: loaderSize
              }}
            />
          </View>
        </ModalView>
      </LogoView>
    </Modal>
  );
};



export default LoaderComponent;
