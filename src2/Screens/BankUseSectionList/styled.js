

import styled from "styled-components/native";
import { UpperBoxContainer } from "../../Components";

export const Container = styled.View`
flex: 1 ;
 background-color: "#f6f6f6"
`;

export const CloseAndSave = styled.TouchableOpacity`
width: 50px;
`;


// export const IconClose = styled.Image`
//   width: 24px;
//   height: 24px;
//   tint-color: #ffffff;
// `;

export const IconBack = styled.Image`
margin-bottom: 16px;
margin-top: 16px;
margin-horizontal: 16px;
width: 28px;
height: 28px;
`;

export const SaveAndExit = styled.Text`
  font-family: Inter-SemiBold;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #ffffff;
`;

export const ButtonText = {
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
};
export const Button = {
  alignSelf: 'center',
  marginTop: 20,
  marginBottom: 40,
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  height: 56,
  borderRadius: 27,
  backgroundColor: '#9b1e26',
};
















export const HeaderTextStyle = {
  fontSize: 20,
  fontFamily: "Inter-SemiBold",
  lineHeight: 26,
  color: "#25243b",
  letterSpacing: -0.5,
  marginTop: 12,
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

