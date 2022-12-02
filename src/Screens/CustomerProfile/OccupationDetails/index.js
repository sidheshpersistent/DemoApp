import React, { useState } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
// import CustomTextInput from '../../../components/ntb_sa/Inputs/CustomTextInput';
import BackgroundImage from "../../../Components/BackgroundImage/BackgroundImage";

// import AutoCompleteTextInput from '../../../components/AutoCompleteTextInput/AutoCompleteTextInput';

// import { Card } from '../../../Components';
import CustomTextInput from "../../../Components/CustomTextInput/CustomTextInput";
import {
  arrowBack,
  checked,
  rightArrow,
  rightArrowWhite,
  unchecked,
} from "../../../Assets/Images";
import { RightArrowButton } from "../../CustomerIdentificationDetails/styled";

const OccupationDetails = (props) => {
  const { next, prev } = props;
  const [isIndianCitizen, toggleIndianCitizen] = useState(false);
  const [isPoliticallyExposed, togglePoliticallyExposed] = useState(false);

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
        <ScrollView style={{ flex: 1 }}>
          <View>
            <AlignedContainer>
              <CardMargin>
                {/* To use dropdown input below */}
                <CustomTextInput label="Occupation Type" value={""} />
              </CardMargin>
              <CardMargin>
                <CustomTextInput label="Company name" value={""} />
              </CardMargin>

              <CardMargin>
                {/* To use dropdown input below */}
                <CustomTextInput label="Source of Income" value={""} />
              </CardMargin>

              <CardMargin>
                <CustomTextInput label="Country of birth*" value={""} />
                
              </CardMargin>
            </AlignedContainer>

            <FullLengthBox>
              <AlignedContainer
                style={{
                  paddingBottom: 26,
                  paddingTop: 26,
                  flexDirection: "row",

                  height: 70, // TODO: this height can be deleted later
                }}
              >
                <TouchableOpacity
                  onPress={() => toggleIndianCitizen(!isIndianCitizen)}
                  style={checkBoxStyle}
                >
                  {isIndianCitizen ? (
                    <Image source={checked} style={checkBoxStyle} />
                  ) : (
                    <Image source={unchecked} style={checkBoxStyle} />
                  )}
                </TouchableOpacity>
                <CheckBoxText style={{ marginLeft: 12 }}>
                  I am an Indian citizen paying taxes only in India.
                </CheckBoxText>
              </AlignedContainer>
            </FullLengthBox>

            {isIndianCitizen ? (
              <AlignedContainer>
                <CardMargin>
                  <CustomTextInput
                    label="Country of Tax Resident*"
                    value={""}
                  />
                  {/* <AutoCompleteTextInput
                      style={{backgroundColor: 'red'}}
                      testID={'12345'}
                      name={`Country of Tax Resident*`}
                      invalid={false}
                      maxLength={40}
                      isRightImage={true}
                      rightImage={require('../../../Assets/Images/icons_24_chevron_down.png')}
                      // errorMessage={errors?.cityBal?.message}
                      // data={businessCities}
                      value={''}
                      onChangeText={text => {
                        //   onChange(text);
                      }}
                      placeholder={'Country of Tax Resident*'}
                      // onSelectListItem={item => onSelectCity(item, onChange)}
                    /> */}
                </CardMargin>

                <CardMargin>
                  <CustomTextInput label="Foreign TIN*" value={""} />
                  {/* <CustomTextInput
                        isActive={false}
                        isValue={false}
                        placeholder="Foreign TIN*"
                        errorMessage=""
                        isError={false}
                        errorColor="red"
                        textColor="black"
                        maxLength={10}
                        onKeyPress={() => {}}
                      /> */}
                </CardMargin>

                <CardMargin>
                  <CustomTextInput label="TIN issuing country*" value={""} />
                  {/* <CustomTextInput
                        isActive={false}
                        isValue={false}
                        placeholder="TIN issuing country*"
                        errorMessage=""
                        isError={false}
                        errorColor="red"
                        textColor="black"
                        maxLength={10}
                        onKeyPress={() => {}}
                      /> */}
                </CardMargin>
              </AlignedContainer>
            ) : null}
            <FullLengthBox>
              <AlignedContainer
                style={{
                  paddingBottom: 26,
                  paddingTop: 26,
                  flexDirection: "row",
                  height: 70, // TODO: this height can be deleted later
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    togglePoliticallyExposed(!isPoliticallyExposed)
                  }
                  style={checkBoxStyle}
                >
                  {isPoliticallyExposed ? (
                    <Image source={checked} style={checkBoxStyle} />
                  ) : (
                    <Image source={unchecked} style={checkBoxStyle} />
                  )}
                </TouchableOpacity>
                <CheckBoxText style={{ marginLeft: 12 }}>
                  I am not a politically exposed person nor related to one.
                </CheckBoxText>
              </AlignedContainer>
            </FullLengthBox>
          </View>

          <AlignedContainer
            style={{
              alignItems: "center",
              justifyContent: "space-around",
              marginBottom: 38,
              flexDirection: "row",
            }}
          >
            <BackArrowButton onPress={() => backArrowPress()}>
              <Image source={arrowBack} style={RightArrowImage} />
            </BackArrowButton>
            {SubmitButtonEnable() ? (
              <RightArrowButtonActive onPress={() => forwardArrowPress()}>
                <Image source={rightArrowWhite} style={RightArrowImage} />
              </RightArrowButtonActive>
            ) : (
              <RightArrowButton>
                <Image source={rightArrow} style={RightArrowImage} />
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

const LowerConatainer = styled.View`
  background-color: #f6f6f6;
  flex: 1;
`;
const checkBoxStyle = {
  width: 24,
  height: 24,
  marginRight: 12,
};
