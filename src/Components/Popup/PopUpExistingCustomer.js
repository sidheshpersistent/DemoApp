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
              <SubTextContainer>{subText}</SubTextContainer>
              <View style={{backgroundColor:'#ffffff',width:'100%',paddingVertical:20, marginTop:10, borderRadius:10}}>
              {
                data?.accountList?.map((account)=>{
                   return <AccountDetailsCard account={account}/>
                })
              }
              </View>
              
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

const AccountDetailsCard = (account)=>{
  console.log(account);
  return(
    <View style={{ flexDirection:'row'}}>

      <View style={{flex:1, paddingBottom:5,paddingTop:10,paddingLeft:10,paddingRight:10}}>
        <Text style={{color:'#686873', fontSize:10, lineHeight:14, letterSpacing:0.5}}>{`ACCOUNT`}</Text>
        <Text style={{color:'black', fontSize:14, lineHeight:20, letterSpacing:-0.5}}>{account?.account?.accountType}</Text>
      </View>

      <View style={{flex:1,  paddingBottom:5,paddingTop:10,paddingLeft:10,paddingRight:10}}>
        <Text style={{color:'#686873', fontSize:10, lineHeight:14, letterSpacing:0.5}}>{`ACCOUNT`}</Text>
        <Text style={{color:'black', fontSize:14, lineHeight:20, letterSpacing:-0.5}}>{account?.account?.accountNumber}</Text>
      </View>
       
    </View>
   
  )
}
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

export default PopUpExistingCustomer;
