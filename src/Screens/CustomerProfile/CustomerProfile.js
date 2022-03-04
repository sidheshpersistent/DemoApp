import React, {useEffect, useState} from 'react';
import Card from '../../components/CardView';
import {
  View,
  Switch,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import CustomTextInput from '../../components/ntb_sa/Inputs/CustomTextInput';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';
import ProfileHeaderContainer from 'components/ProfileHeaderContainer';
import {ScrollView} from 'react-native-gesture-handler';
import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import TimeLineView from '../../components/TimeLineView/TimeLineView';
const iconClose = require('../../assets/iconClose.png');

const CustomerProfile = props => {
  const [nomineeVisible, setNomineeVisible] = useState(true);

  const SubmitButtonEnable = () => {
    return true;
  };

  return (
    <BackgroundImage>
      <HeaderContainer>
        <CloseAndSave>
          <IconClose source={iconClose} />
          <SaveAndExit>Save & Exit</SaveAndExit>
        </CloseAndSave>
        <ProfileHeaderContainer
          style={header}
          maxContainerHeight={200}
          leftView={
            <View>
              <Image
                style={image}
                source={require('../Dashboard/testImg.jpg')}
              />
            </View>
          }
          rightView={
            <View
              style={{
                justifyContent: 'center',
                marginTop: 3,
                marginLeft: 13,
              }}>
              <CustomerName>Astha Patil</CustomerName>
              <View style={{flexDirection: 'row'}}>
                <NameAndAge>28</NameAndAge>
                <NameAndAge>|</NameAndAge>
                <NameAndAge>Female</NameAndAge>
              </View>
            </View>
          }
        />
      </HeaderContainer>
      <PleaseEnter>
        <Text style={{fontWeight: 'normal'}}>Please enter the </Text>
        customer’s personal details
      </PleaseEnter>
     
      <LowerConatainer>
      <AlignedContainer>
      <View style={{position:'absolute',top:-30, height:100,width:'100%',alignSelf:'center'}}>
          <TimeLineView></TimeLineView>
        </View>
        </AlignedContainer>
        {/**TODO: marginTop:71 has to be deleted after applying steppers on screen*/}
        {/** changed below scrollview from marginTop:120 */}
        <ScrollView style={{flex: 1, marginTop:80,paddingTop:20}}> 
          <AlignedContainer>
          
            <CardMargin>
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder="Gross Annual Income*"
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
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder="Mother's Name*"
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

            <Label>Communication Address</Label>
          </AlignedContainer>
          <FullLengthBox>
            <AlignedContainer
              style={{
                paddingBottom: 26,
                paddingTop: 26,
                justifyContent: 'space-between',
                // TODO: this height can be deleted later
              }}>
              <View style={{flexDirection: 'row'}}>
                <View //TODO: this we will remove and apply ccl
                  style={{
                    marginRight: 20,
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderColor: '#9b1e26',
                    borderWidth: 1,
                  }}></View>

                <View style={{width: 309, marginBottom: 22}}>
                  <ToogleRadioText>Same as Adhar</ToogleRadioText>
                  <Text style={{color: '#25243b', fontSize: 12}}>
                    401, El Tara, Hiranandani Gardens, Powai, Mumbai,
                    Maharashtra 400076
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View //TODO: this we will remove and apply ccl
                  style={{
                    marginRight: 20,
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderColor: '#9b1e26',
                    borderWidth: 1,
                  }}></View>
                <View>
                  <TouchableOpacity>
                    <ToogleRadioText>other address</ToogleRadioText>
                  </TouchableOpacity>

                  <Text></Text>
                </View>
              </View>
            </AlignedContainer>
          </FullLengthBox>
          <FullLengthBox>
            <AlignedContainer>
              <View
                style={{
                  height: 60,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <ToogleRadioText>Do You Want a nominee</ToogleRadioText>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 100,
                    justifyContent: 'space-between',
                    alignItems:"center"
                  }}>
                   
                    <ToogleRadioText>No</ToogleRadioText>
                  
                  <Switch

                    onValueChange={() => setNomineeVisible(!nomineeVisible)}
                    value={nomineeVisible}
                  />
                  
                    <ToogleRadioText>Yes</ToogleRadioText>
                
                  
                  
                </View>
              </View>
            </AlignedContainer>
          </FullLengthBox>
          {nomineeVisible ? (
            <View>
              <AlignedContainer>
                <Label>Nominee Details</Label>

                <CardMargin>
                  <Card style={{elevation: 4}}>
                    <CardPadding>
                      <CustomTextInput
                        isActive={false}
                        isValue={false}
                        placeholder="Nominee Name*"
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
                  <Card style={{elevation: 4}}>
                    <AutoCompleteTextInput
                      style={{backgroundColor: 'red'}}
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
                  </Card>
                </CardMargin>
                <CardMargin>
                  <Card style={{elevation: 4, borderRadius: 5}}>
                    <AutoCompleteTextInput
                      style={{backgroundColor: 'red'}}
                      testID={'12346'}
                      name={`Nominee’s date of birth*ason`}
                      invalid={false}
                      maxLength={40}
                      isRightImage={true}
                      rightImage={require('../../assets/icons_24_calendar.png')}
                      // errorMessage={errors?.cityBal?.message}
                      // data={businessCities}
                      value={''}
                      onChangeText={text => {
                        //   onChange(text);
                      }}
                      placeholder={`Nominee’s date of birth*`}
                      // onSelectListItem={item => onSelectCity(item, onChange)}
                    />
                  </Card>
                </CardMargin>
              </AlignedContainer>
              <AlignedContainer>
                <Label>Nominee Address</Label>
              </AlignedContainer>
              <FullLengthBox>
                <AlignedContainer
                  style={{
                    paddingBottom: 26,
                    paddingTop: 26,
                    justifyContent: 'space-between',
                    height: 140, // TODO: this height can be deleted later
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View //TODO: this we will remove and apply ccl
                      style={{
                        marginRight: 20,
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        borderColor: '#9b1e26',
                        borderWidth: 1,
                      }}
                    />

                    <View style={{width: 309, marginBottom: 22}}>
                      <ToogleRadioText>Same as Adhar</ToogleRadioText>
                      <Text style={{color: '#25243b', fontSize: 12}}>
                        401, El Tara, Hiranandani Gardens, Powai, Mumbai,
                        Maharashtra 400076
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View //TODO: this we will remove and apply ccl
                      style={{
                        marginRight: 20,
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        borderColor: '#9b1e26',
                        borderWidth: 1,
                      }}
                    />
                    <View>
                      <TouchableOpacity>
                        <ToogleRadioText>other address</ToogleRadioText>
                      </TouchableOpacity>

                      <Text></Text>
                    </View>
                  </View>
                </AlignedContainer>
              </FullLengthBox>
            </View>
          ) : null}

          <AlignedContainer
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 38,
            }}>
            {SubmitButtonEnable() ? (
              <RightArrowButtonActive>
                <Image
                  source={require('../../assets/RightArrowWhite.png')}
                  style={RightArrowImage}
                />
              </RightArrowButtonActive>
            ) : (
              <RightArrowButton>
                <Image
                  source={require('../../assets/RightArrow.png')}
                  style={RightArrowImage}
                />
              </RightArrowButton>
            )}
          </AlignedContainer>
        </ScrollView>
      </LowerConatainer>
    </BackgroundImage>
  );
};

export default CustomerProfile;
const RightArrowImage = {
  width: 40,
  height: 40,
};
const RightArrowButtonActive = styled.View`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #9b1e26;
  align-items: center;
  justify-content: center;
`;

const ToogleRadioText = styled.Text`
  font-family: Inter;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;

  color: #25243b;
`;

const Label = styled.Text`
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: #686873;
  margin-bottom: 16px;
`;

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;

const CardMargin = styled.View`
  margin-bottom: 20px;
`;
const CardPadding = styled.View`
  padding: 10px;
`;
const IconClose = styled.Image`
  width: 24px;
  height: 24px;
`;

const HeaderContainer = styled(UpperBoxContainer)`
  height: 152px;
  padding: 12px 15px 26px 12px;
  margin-bottom: 38px;
`;
const CloseAndSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const SaveAndExit = styled.Text`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: right;
  color: #9b1e26;
`;
const LowerConatainer = styled.View`
  background-color: #f6f6f6;
  flex: 1;
`;
const PleaseEnter = styled.Text`
align-self:center
  margin-bottom: 40px;
  width: 406px;
  height: 26px;
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
 
  text-align: center;
  color: #ffffff;
`;

const NameAndAge = styled.Text`
  margin-right: 5px;
`;
const CustomerName = styled.Text`
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: 26px;

  color: #25243b;
  margin-bottom: 5px;
`;
const header = {elevation: 0, paddingLeft: 20, alignItems: 'center'};
const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
};
