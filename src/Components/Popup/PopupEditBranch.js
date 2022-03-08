import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import {EDITBRANCH} from '../../constants/constants';
import Popup from './Popup';
import {
  CardMargin,
  CardPadding,
} from '../../Screens/CustomerIdentificationDetails/CustomerIdentificationDetailsStyle';
import Card from '../../components/CardView';
import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';

const PopupEditBranch = props => {
  const [branch, setBranch] = useState('BKC - Naman Branch');

  const {
    popupType,
    isVisible,
    Heading,
    popupInfo,
    ButtonText,
    buttonPress,
    CancelButtonText,
    cancelButtonPress,
    animationIn,
    popupIcon,
    TextInputPlaceholder,
    TextInputvalue,
    onchangeText,
    isError,
    error_text,
    isActive,
    isValue,
    textColor,
    maxLength,
  } = props;

  const onPressButton = () => {
    let data = {
      branch: branch,
    };
    buttonPress(data);
  };

  return (
    <Popup
      style={{backgroundColor: '#f6f6f6'}}
      animationIn={animationIn}
      popupIcon={popupIcon}
      popupIconStyle={{}}
      isVisible={isVisible}
      Heading={Heading}
      component={
        <BodyContainer>
          <View style={{marginBottom: 34}}>
            <PopupText>{popupInfo}</PopupText>
          </View>

          <CardMargin>
            <Card>
              <CardPadding>
                <AutoCompleteTextInput
                  testID={'1234'}
                  name={EDITBRANCH.EB_BRANCH_LOCATION}
                  invalid={false}
                  maxLength={40}
                  isRightImage={true}
                  value={branch}
                  rightImage={require('../../assets/icons_24_chevron_down.png')}
                  // errorMessage={errors?.cityBal?.message}
                  // data={businessCities}
                  onChangeText={text => {
                    //   onChange(text);
                  }}
                  placeholder={EDITBRANCH.EB_BRANCH_LOCATION}
                  // onSelectListItem={item => onSelectCity(item, onChange)}
                />
              </CardPadding>
            </Card>
          </CardMargin>
        </BodyContainer>
      }
      ButtonText={ButtonText}
      buttonPress={() => onPressButton()}
      CancelButtonText={CancelButtonText}
      cancelButtonPress={() => cancelButtonPress()}
    />
  );
};

export default PopupEditBranch;

const RedText = styled.Text`
  height: 13px;
  font-family: Inter;
  font-size: 10px;
  font-weight: 500,
  font-style: normal;
  line-height: 13px;
  letter-spacing: -0.3px;
  color: #d60b26;
  margin-bottom: 12px;
`;

const CityText = styled.Text`
  font-family: Inter;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #25243b;
  margin-bottom: 12px;
`;

const PopupText = styled.Text`
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;
  color: #25243b;
`;

const WhiteRectangleBox = styled.View`
  width: 100%;
  height: 75px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
  background-color: white;
  elevation: 3;
  shadow-color: #d60b26;
  margin-vertical: 8;
`;

const SideIcon = styled.Image`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 16px;
  top: -15px;
`;
const InputContainer = styled.View`
  ${'' /* border-bottom-color: #d60b26; */}
  border-bottom-width: 0.6px;
`;
const BodyContainer = styled.View`
  padding-bottom: 20px;
`;

const TextInputStyle = styled.View`
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`;

const CountryCodeStyle = styled.Text`
  width: 46px;
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #9b1e26;
`;
