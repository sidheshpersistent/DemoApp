import Popup from '../Popup/Popup';
import React from 'react';
import {View} from 'react-native';
import {alertIcon} from '../../Assets/Images';
import {StringsOfLanguages} from '../../Localization';
import CustomText from '../CustomText/CustomText';
import {Colors, Font_Size, Line_Height} from '../../Utils';

const ErrorPopup = ({popUpshow, message, callBack, btnText, testID}) => {
  if (!btnText) btnText = StringsOfLanguages.COMMON.SESSION_ALERT_OK;
  return (
    <Popup
      testID_submit={testID ? testID : null}
      animationIn="bounceIn"
      popupIcon={alertIcon}
      isVisible={popUpshow}
      Heading={StringsOfLanguages.CID.CID_LABLE_SORRY}
      ButtonText={btnText}
      buttonPress={() => {
        callBack();
      }}
      component={
        <View style={{flexDirection: 'row'}}>
          <CustomText
            marginBottom={20}
            fontSize={Font_Size.SIZE_16}
            lineHeight={Line_Height.HEIGHT_24}
            color={Colors.NEW_GREY_800.text}>
            {message}
          </CustomText>
        </View>
      }
    />
  );
};

export default ErrorPopup;
