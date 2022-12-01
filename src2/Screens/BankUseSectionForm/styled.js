

import styled from "styled-components/native";
import { UpperBoxContainer } from "../../Components";

export const Container = styled.View`
flex: 1 ;
 background-color: "#f6f6f6"
`;
export const ScrollViewContainer = styled.ScrollView`
`;

export const CloseAndSave = styled.TouchableOpacity`
width: 50px;
`;

export const IconBack = styled.Image`
margin-bottom: 16px;
margin-top: 16px;
margin-horizontal: 16px;
width: 28px;
height: 28px;
`;

export const HeaderTextStyle = {
fontSize: 20,
fontFamily: "Inter-SemiBold",
lineHeight: 26,
color: "#25243b",
letterSpacing: -0.5,
textTransform: 'capitalize'
//marginTop: 12,
};
export const HeaderSubTextStyle = {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    color: "#25243b",
    letterSpacing: -0.5,
    //marginTop: 12,
    };
export const HeaderContainer = styled(UpperBoxContainer)`

padding: 12px 15px 26px 12px;
margin-bottom: 38px;
`;

export const CongratsTextContainer = styled.View`

justify-content: center;
            align-items: flex-start ;
            margin-left: 57 ;
            margin-right: 152
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

export const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;

export const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;

export const CardMargin = styled.View`
  margin-bottom: 20px;
`;

export const UpdateButtonView = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const CustomerSignatureView = styled.View`
  flex-direction: row ;
  align-items: center ;
  text-align: center ;
  margin-top: 24px ;
  margin-bottom: 24px;
`;

export const EmplyeeDetailsView = styled.View`
  flex-direction: row ;
  align-items: center ;
  text-align: center ;
  margin-top: 24px ;
`;

export const checkBoxStyle = {
  width: 24,
  height: 24,
  marginRight: 12,
};

export const employeeSectionSpacings = {
 marginLeft:200
};
