import styled from "styled-components/native";
import { Colors, FontFamily } from "../../../Utils";
export const RightArrowImage = {
  width: 40,
  height: 40,
};
export const RightArrowButtonActive = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #9b1e26;
  align-items: center;
  justify-content: center;
`;

export const RightArrowButton = styled.View`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #e9e9e9;
  align-items: center;
  justify-content: center;
`;

export const ToogleRadioText = styled.Text`
  font-family: Inter;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;

  color: #25243b;
`;

export const Label = styled.Text`
  font-size: 11px;
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: #686873;
  margin-bottom: 16px;
`;

export const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
export const AdharAddressContainer = styled.View`
  margin-left: 30px;
  width: 309px;
  margin-bottom: 10px;
  top: -5px;
`;
export const CommunicationAddressContainer = styled.View`
  padding-top: 26px;
  padding-bottom: 26px;
  justify-content: space-between;
`;
export const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;
export const NewAddressView = styled.View`
  margin-left: 30px;
  top: -5px;
`;
export const NewAddressSubView = styled.View`
  flex-direction: row;
  justify-content: space-between;

`;
export const NomineeSwitchContainer = styled.View`
  height: 60px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const SwitchContainer = styled.View`
flex-direction: row ;
width: 100px;
justify-content: space-between ;
align-items: center ;
`;

export const CardMargin = styled.View`
  margin-bottom: 20px;
`;
export const ComponentContainer = styled.View`
  flex-direction: row;
`;

export const PanAppliedContainer = styled.View`
height: 60px;
justify-content: space-between ;
flex-direction: row ;
align-items:  center ;
`;
export const PanAppliedSubContainer = styled.View`
flex-direction: row ;
width: 100 ;
justify-content: space-between ;
align-items: center
`;

export const dropdownTextStyle = {
  fontSize: 14,
  fontFamily: FontFamily.Inter_SemiBold,
  lineHeight: 14,
  color: Colors.GRAY,
  letterSpacing: -0.5,
  marginTop: 6,
};
