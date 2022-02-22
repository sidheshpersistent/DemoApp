import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import {
  CenteredView,
  ModalView,
  PopupHeading,
  SubTextContainer,
} from './PopupStyle';
import CustomBlurView from './CustomBlurView';
import { POPUP_GRADIENT } from '../../constants/colorCode';

const Popup = props => {
  const {isVisible, Heading, component, ButtonText, buttonPress, animationIn,popupIcon} =props;
    

  return (
    <CenteredView>
      <Modal
        animationIn={animationIn}
        isVisible={isVisible}
        customBackdrop={<CustomBlurView />}>
        <CenteredView>
          <ModalView>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[POPUP_GRADIENT.LEFT,POPUP_GRADIENT.RIGHT]}
              style={styles.linearGradient}>
                

                <Image source={popupIcon} style={{width:48,height:48}}/>
          
              </LinearGradient>
            <View style={{paddingLeft: 24, paddingRight: 24, width: 416}}>
              <PopupHeading>{Heading}</PopupHeading>
              <SubTextContainer>{component}</SubTextContainer>
            </View>
            {/** this button may required to delete after getting ccl library */}
            <TouchableOpacity
              onPress={() => buttonPress()}
              style={styles.Button}>
              <Text style={styles.ButtonText}>{ButtonText}</Text>
            </TouchableOpacity>

          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: 64,
    height: 64,
    borderRadius: 32,
    top: -32,
    alignSelf: 'center',
    justifyContent:"center",
    alignItems:"center"
  },
  Button: {
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 56,
    borderRadius: 27,
    backgroundColor: '#9b1e26',
  },
  ButtonText: {
    fontWeight: '600',
    width: 174,
    height: 24,
    fontFamily: 'Inter',
    fontSize: 17,

    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -0.6,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default Popup;
