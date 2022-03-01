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

import {
  CenteredView,
  ModalView,
  PopupHeading,
  SubTextContainer,
  TopIconView,
} from './PopupStyle';
import CustomBlurView from './CustomBlurView';
import Card from '../../components/CardView';
import CustomTextInput from '../../components/ntb_sa/Inputs/CustomTextInput';
import {
  CardMargin,
  CardPadding,
} from '../../Screens/CustomerIdentificationDetails/CustomerIdentificationDetailsStyle';
import {NEWCOMMUNICATIONADDRESS} from '../../constants/constants';

const PopupNewCommunicationAddress = props => {
  const {
    isVisible,
    Heading,
    component,
    ButtonText,
    buttonPress,
    animationIn,
    popupIcon,
  } = props;

  return (
    <CenteredView>
      <Modal
        animationIn={animationIn}
        isVisible={isVisible}
        customBackdrop={<CustomBlurView />}>
        <CenteredView>
          <ModalView>
            <TopIconView>
              <Image source={popupIcon} style={{width: 64, height: 64}} />
            </TopIconView>
            <View style={{paddingLeft: 24, paddingRight: 24, width: 416}}>
              <PopupHeading>{Heading}</PopupHeading>

              <CardMargin>
                <Card>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder={NEWCOMMUNICATIONADDRESS.NCA_PINCODE}
                      keyboardType="numeric"
                      errorMessage=""
                      isError={false}
                      errorColor="red"
                      textColor="black"
                      maxLength={10}
                      onKeyPress={() => {}}
                    />
                  </CardPadding>
                </Card>
              </CardMargin>
              <CardMargin>
                <Card>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder={NEWCOMMUNICATIONADDRESS.NCA_ADDRESS1}
                      errorMessage=""
                      isError={false}
                      errorColor="red"
                      textColor="black"
                      maxLength={10}
                      onKeyPress={() => {}}
                    />
                  </CardPadding>
                </Card>
              </CardMargin>
              <CardMargin>
                <Card>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder={NEWCOMMUNICATIONADDRESS.NCA_ADDRESS2}
                      errorMessage=""
                      isError={false}
                      errorColor="red"
                      textColor="black"
                      maxLength={10}
                      onKeyPress={() => {}}
                    />
                  </CardPadding>
                </Card>
              </CardMargin>
            </View>

            {/** TODO: this button may required to delete after getting ccl library */}
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

// TODO: will be replaced with ccl button
const styles = StyleSheet.create({
  Button: {
    alignSelf: 'center',
    marginTop: 20,
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
    alignSelf: 'center',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -0.6,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default PopupNewCommunicationAddress;
