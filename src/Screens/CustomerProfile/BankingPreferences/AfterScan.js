import React, {useEffect, useState} from 'react';
import Card from '../../../components/CardView';
import {
  View,
  Image,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import CustomTextInput from '../../../components/ntb_sa/Inputs/CustomTextInput';

import AutoCompleteTextInput from '../../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import ProductCard from '../Components/ProductCard';
import PersonalizedButton from '../Components/PersonalizedButton';
import {AS_CONSTANTS} from '../../../constants/constants';
import PopupEditBranch from '../../../components/Popup/PopupEditBranch';
import {EDITBRANCH} from '../../../constants/constants';

const AfterScan = props => {
  const [accountType, setAccountType] = useState(AS_CONSTANTS.AS_ACCOUNT_TYPE);
  const [ucic, setUcic] = useState(AS_CONSTANTS.AS_UCIC);
  const [accountNumber, setAccountNumber] = useState('');
  const [fetchedBranch, setFetchedBranch] = useState(
    AS_CONSTANTS.AS_FETCHED_BRANCH,
  );
  const [editbranch, setEditbranch] = useState(false);

  const closeEBModal = () => {
    setEditbranch(false);
  };

  return (
    <View>
      <Label>{AS_CONSTANTS.AS_HEADER}</Label>
      <CardMargin>
        <Card
          style={{
            elevation: 4,
            backgroundColor: '#9b1e26',
            alignItems: 'center',
            padding: 20,
            flexDirection: 'row',
            width: 384,
            height: 170,
          }}>
          <View style={{flex: 0.5}}>
            <View style={{flex: 1, padding: 8}}>
              <Text style={AccDetailsTextStyle}>
                {AS_CONSTANTS.AS_ACCOUNT_TYPE_HEADER}
              </Text>
              <Text style={AccDetailsValueStyle}>{accountType}</Text>
            </View>

            <View style={{flex: 1, padding: 8, marginTop: 16}}>
              <Text style={AccDetailsTextStyle}>
                {AS_CONSTANTS.AS_UCIC_HEADER}
              </Text>
              <Text style={AccDetailsValueStyle}>{ucic}</Text>
            </View>
          </View>

          <View style={{flex: 0.5}}>
            <View style={{flex: 1, padding: 8}}>
              <Text style={AccDetailsTextStyle}>
                {AS_CONSTANTS.AS_ACCOUNT_NUMBER_HEADER}
              </Text>
              <Text style={AccDetailsValueStyle}>{accountNumber}</Text>
            </View>

            <View style={{flex: 1, marginTop: 16}}>
              <Text style={AccDetailsTextStyle}>
                {AS_CONSTANTS.AS_FETCHED_BRANCH_HEADER}
                <TouchableOpacity
                  onPress={() => {
                    setEditbranch(true);
                  }}>
                  <Image
                    source={require('../../../assets/icons_24_edit.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </Text>
              <Text style={AccDetailsValueStyle}>{fetchedBranch}</Text>
            </View>
          </View>
        </Card>
      </CardMargin>

      {editbranch ? (
        <PopupEditBranch
          popupType="edit_branch"
          animationIn="bounceIn"
          popupIcon={require('../../../assets/icon_24_location.png')}
          isVisible={editbranch}
          Heading={EDITBRANCH.EB_FORM_HEADING} // Heading is assumed to be taken from constants
          popupInfo={EDITBRANCH.EB_SUB_HEADING}
          isActive={false}
          isValue={false}
          TextInputPlaceholder=""
          textColor="black"
          // maxLength={10}
          ButtonText="Confirm"
          buttonPress={data => {
            closeEBModal();
            console.log(data);
          }}
          CancelButtonText="Cancel"
          cancelButtonPress={() => closeEBModal()}
          isError={false}
          error_text={'validation failed'}
        />
      ) : null}
    </View>
  );
};
const Label = styled.Text`
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: #686873;
  margin-bottom: 16px;
`;

const AccDetailsTextStyle = {
  fontFamily: 'Inter-Bold',
  size: 10,
  lineHeight: 14,
  letterSpacing: 0.5,
  color: '#dbdbde',
  paddingHorizontal: 4,
};

const AccDetailsValueStyle = {
  fontFamily: 'Inter-Bold',
  size: 16,
  lineHeight: 22,
  letterSpacing: -0.5,
  color: '#ffffff',
  fontWeight: 'bold',
  paddingHorizontal: 4,
};

const benefitStyle = {
  width: 40,
  height: 40,
  marginBottom: 8,
};

const checkBoxImage = {
  width: 24,
  height: 24,
};

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
const CardMargin = styled.View`
  margin-bottom: 20px;
`;
export default AfterScan;
