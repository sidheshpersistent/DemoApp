import React from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  CancelBtn,
  CenteredView,
  CloseIconView,
  ModalView,
  popupContainer,
  submitButtonStyle,
  SubTextContainer,
  TopIconView,
} from './styled';
import {
  Colors,
  FontFamily,
  LetterSpacing,
  Line_Height,
} from '../../../Utils';
import { CustomText, CustomButton } from '../../../Components';
import Modal from 'react-native-modal';
// import CustomBlurView from '../CustomBlurView';
// import { Icon } from '@idfc/ccl-mobile';

const Popup = props => {
  const {
    isVisible,
    Heading,
    component,
    ButtonText,
    buttonPress,
    cancelButtonPress,
    animationIn,
    popupIcon,
    popupIconStyle,
    style,
    testID_submit,
    testID_cancel,
    disabled,
    icon,
    buttonWidth,
    cancelButtonText,
    isClose,
    closeButton
  } = props;

  return (
    <CenteredView>
      <Modal
        animationIn={animationIn}
        isVisible={isVisible}
       >
         {/* customBackdrop={<CustomBlurView />} */}
        <CenteredView>
          <ModalView style={style}>
            <TopIconView>
              {
                icon ? icon : <Image
                  source={popupIcon}
                  style={[popupIconStyle, { width: 64, height: 64 }]}
                />
              }
            </TopIconView>

            <View style={popupContainer}>
              {isClose &&
                <CloseIconView onPress={closeButton}>
                  {/* <Icon name="CrossSmall" primaryColor={Colors.MAROON} /> */}
                </CloseIconView>
              }
              <CustomText
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={20}
                lineHeight={Line_Height.HEIGHT_20}
                letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                color={Colors.NEW_GREY_800.text}>
                {Heading}
              </CustomText>
              <SubTextContainer>{component}</SubTextContainer>
            </View>

            {/** TODO: this button may required to delete after getting ccl library */}
            <CustomButton
              testID={testID_submit}
              style={submitButtonStyle}
              disabled={disabled ? disabled : false}
              buttonType="primary"
              width={buttonWidth ? buttonWidth : "200"}
              title={ButtonText}
              buttonPress={() => buttonPress()}
            />

            {cancelButtonPress ? (
              <CancelBtn
                testID={testID_cancel}
                onPress={() => cancelButtonPress()}
              >
                <CustomText
                  color={Colors.NEW_MAROON_100}
                  variant="B2">{cancelButtonText ? cancelButtonText : `Cancel`}</CustomText>
              </CancelBtn>
            ) : null}

          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};

export default Popup;
