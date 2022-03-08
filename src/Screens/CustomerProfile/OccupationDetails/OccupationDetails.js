import React, {useEffect, useState} from 'react';
import Card from '../../../components/CardView';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import styled from 'styled-components/native';
import CustomTextInput from '../../../components/ntb_sa/Inputs/CustomTextInput';
import BackgroundImage from '../../../components/BackgroundImage/BackgroundImage';
import UpperBoxContainer from '../../../components/UpperBoxContainer/UpperBoxContainer';
import ProfileHeaderContainer from 'components/ProfileHeaderContainer';
import {ScrollView} from 'react-native-gesture-handler';
import AutoCompleteTextInput from '../../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import {NetworkCallExecutionStatus} from '../../../Utils';

const OccupationDetails = props => {
  const {next, prev} = props;
  const [isIndianCitizen, toggleIndianCitizen] = useState(false);

  const SubmitButtonEnable = () => {
    return true;
  };

  const forwardArrowPress = () => {
    next();
  };
  const backArrowPress = () => {
    prev();
  };

  return (
    <BackgroundImage>
      <LowerConatainer>
        {/**TODO: marginTop:71 has to be deleted after applying steppers on screen*/}
        <ScrollView style={{flex: 1, marginTop: 50}}>
          <View>
            <AlignedContainer>
              <CardMargin>
                <Card style={{elevation: 4}}>
                  <AutoCompleteTextInput
                    style={{backgroundColor: 'red'}}
                    testID={'12345'}
                    name={`Occupation Type`}
                    invalid={false}
                    maxLength={40}
                    isRightImage={true}
                    rightImage={require('../../../assets/icons_24_chevron_down.png')}
                    // errorMessage={errors?.cityBal?.message}
                    // data={businessCities}
                    value={''}
                    onChangeText={text => {
                      //   onChange(text);
                    }}
                    placeholder={`Occupation Type*`}
                    // onSelectListItem={item => onSelectCity(item, onChange)}
                  />
                </Card>
              </CardMargin>

              <CardMargin>
                <Card style={{elevation: 4}}>
                  <AutoCompleteTextInput
                    style={{backgroundColor: 'red'}}
                    testID={'12345'}
                    name={`Company name`}
                    invalid={false}
                    maxLength={40}
                    isRightImage={false}
                    isSearchIcon={true}
                    rightImage={require('../../../assets/icons_24_search.png')}
                    // errorMessage={errors?.cityBal?.message}
                    // data={businessCities}
                    value={''}
                    onChangeText={text => {
                      //   onChange(text);
                    }}
                    placeholder={'Company name*'}
                    // onSelectListItem={item => onSelectCity(item, onChange)}
                  />
                </Card>
              </CardMargin>

              <CardMargin>
                <Card style={{elevation: 4}}>
                  <AutoCompleteTextInput
                    style={{backgroundColor: 'red'}}
                    testID={'12345'}
                    name={`Source of Income`}
                    invalid={false}
                    maxLength={40}
                    isRightImage={true}
                    rightImage={require('../../../assets/icons_24_chevron_down.png')}
                    // errorMessage={errors?.cityBal?.message}
                    // data={businessCities}
                    value={''}
                    onChangeText={text => {
                      //   onChange(text);
                    }}
                    placeholder={'Source of Income*'}
                    // onSelectListItem={item => onSelectCity(item, onChange)}
                  />
                </Card>
              </CardMargin>

              <CardMargin>
                <Card style={{elevation: 4}}>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder="Country of birth*"
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
            </AlignedContainer>

            <FullLengthBox>
              <AlignedContainer
                style={{
                  paddingBottom: 26,
                  paddingTop: 26,
                  flexDirection: 'row',

                  height: 70, // TODO: this height can be deleted later
                }}>
                <Button
                  title="o"
                  onPress={() =>
                    toggleIndianCitizen(!isIndianCitizen)
                  }></Button>
                <CheckBoxText style={{marginLeft: 12}}>
                  I am an Indian citizen paying taxes only in India.
                </CheckBoxText>
              </AlignedContainer>
            </FullLengthBox>

            {isIndianCitizen ? (
              <AlignedContainer>
                <CardMargin>
                  <Card style={{elevation: 4}}>
                    <AutoCompleteTextInput
                      style={{backgroundColor: 'red'}}
                      testID={'12345'}
                      name={`Country of Tax Resident*`}
                      invalid={false}
                      maxLength={40}
                      isRightImage={true}
                      rightImage={require('../../../assets/icons_24_chevron_down.png')}
                      // errorMessage={errors?.cityBal?.message}
                      // data={businessCities}
                      value={''}
                      onChangeText={text => {
                        //   onChange(text);
                      }}
                      placeholder={'Country of Tax Resident*'}
                      // onSelectListItem={item => onSelectCity(item, onChange)}
                    />
                  </Card>
                </CardMargin>

                <CardMargin>
                  <Card style={{elevation: 4}}>
                    <CardPadding>
                      <CustomTextInput
                        isActive={false}
                        isValue={false}
                        placeholder="Foreign TIN*"
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
                        placeholder="TIN issuing country*"
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
              </AlignedContainer>
            ) : null}
            <FullLengthBox>
              <AlignedContainer
                style={{
                  paddingBottom: 26,
                  paddingTop: 26,
                  flexDirection: 'row',
                  height: 70, // TODO: this height can be deleted later
                }}>
                <Button title="o"></Button>
                <CheckBoxText style={{marginLeft: 12}}>
                  I am not a politically exposed person nor related to one.
                </CheckBoxText>
              </AlignedContainer>
            </FullLengthBox>
          </View>

          <AlignedContainer
            style={{
              alignItems: 'center',
              justifyContent: 'space-around',
              marginBottom: 38,
              flexDirection: 'row',
            }}>
            <BackArrowButton onPress={() => backArrowPress()}>
              <Image
                source={require('../../../assets/arrow_back.png')}
                style={RightArrowImage}
              />
            </BackArrowButton>
            {SubmitButtonEnable() ? (
              <RightArrowButtonActive onPress={() => forwardArrowPress()}>
                <Image
                  source={require('../../../assets/RightArrowWhite.png')}
                  style={RightArrowImage}
                />
              </RightArrowButtonActive>
            ) : (
              <RightArrowButton>
                <Image
                  source={require('../../../assets/RightArrow.png')}
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

export default OccupationDetails;
const RightArrowImage = {
  width: 40,
  height: 40,
};
const RightArrowButtonActive = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #9b1e26;
  align-items: center;
  justify-content: center;
`;

const BackArrowButton = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

const CheckBoxText = styled.Text`
  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;

  color: #25243b;
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

const LowerConatainer = styled.View`
  background-color: #f6f6f6;
  flex: 1;
`;
