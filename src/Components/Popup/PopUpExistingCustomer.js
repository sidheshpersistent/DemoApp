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
  AccountDetailsCardContainer,
  AccountDetailsColumn,
  AccountTypeText,
  AccountNumberText,
  AccountListView,
  ChooseReasonView,
  AccountOpeningMsg,
  ReasonText
} from './PopupStyle';
import CustomBlurView from './CustomBlurView';
import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';

const PopUpExistingCustomer = props => {
  const {
    isVisible,
    heading,
    subText,
    data,
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
            <View style={{paddingLeft: 24, paddingRight: 24}}>
              
              <PopupHeading>{heading}</PopupHeading>
               <SubTextContainer><Text>{subText}</Text></SubTextContainer>
              <AccountListView>
              {
                data?.accountList?.map((account)=>{
                  /**TODO: added a key to avoid similar key issue */
                   return <AccountDetailsCard key={account.accountType} account={account}/>
                })
              }
              </AccountListView>
              <ChooseReasonView>
                <AccountOpeningMsg>
                  <Text>{`Customer’s registered mobile number`}</Text>
                  <Text style={{fontWeight:'700'}}>{` +91 70857 62345`}</Text>
                  <Text>{` will be used for account opening`}</Text>
                </AccountOpeningMsg>
              </ChooseReasonView>
              <ReasonText>{`Select reason for opening new account`}</ReasonText>
              <View>
              <AutoCompleteTextInput
                      testID={'12345'}
                      name={`Reason`}
                      invalid={false}
                      maxLength={40}
                      isRightImage={true}
                      rightImage={require('../../assets/icons_24_chevron_down.png')}
                      // errorMessage={errors?.cityBal?.message}
                      // data={businessCities}
                      value={''}
                      onChangeText={text => {
                        //   onChange(text);
                      }}
                      placeholder={`Reason`}
                      // onSelectListItem={item => onSelectCity(item, onChange)}
                    />
              </View>
            </View>
            {/** TODO: this button may required to delete after getting ccl library */}
            <TouchableOpacity
              onPress={() => buttonPress()}
              style={styles.Button}>
              <Text style={styles.ButtonText}>{ButtonText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPress()}
              style={styles.cancelBtn}>
              <Text style={styles.cancelBtnTxt}>{`Cancel`}</Text>
            </TouchableOpacity>
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};

const AccountDetailsCard = (account)=>{
  console.log(account);
  return(
    <AccountDetailsCardContainer>

      <AccountDetailsColumn>
        <AccountTypeText>{`ACCOUNT`}</AccountTypeText>
        <AccountNumberText>{account?.account?.accountType}</AccountNumberText>
      </AccountDetailsColumn>

      <AccountDetailsColumn>
        <AccountTypeText>{`ACCOUNT`}</AccountTypeText>
        <AccountNumberText>{account?.account?.accountNumber}</AccountNumberText>
      </AccountDetailsColumn>
       
    </AccountDetailsCardContainer>
   
  )
}
// TODO: will be replaced with ccl button
const styles = StyleSheet.create({
  cancelBtn:{
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 56,
  },
  cancelBtnTxt: {
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
    color: '#9b1e26',
  },
  Button: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
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

export default PopUpExistingCustomer;
