

import styled from "styled-components/native";
import { UpperBoxContainer } from "../../Components";

export const Container = styled.View`
flex: 1 ;
 background-color: "#f6f6f6"
`;

export const CloseAndSave = styled.View`


margin-bottom: 0px;
margin-top: 16px;
margin-horizontal: 16px;
`;

export const IconClose = styled.Image`
width: 24px;
height: 24px;
`;

export const SaveAndExit = styled.Text`
font-family: Inter-SemiBold;
font-size: 14px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.5px;
color: #50bfbf;
align-self:flex-end
`;

export const ButtonText = {
fontWeight: "700",
width: 174,
height: 24,
fontFamily: "Inter",
fontSize: 17,
alignSelf: "center",
fontStyle: "normal",
lineHeight: 24,
letterSpacing: 0,
textAlign: "center",
color: "#ffffff",
};
export const Button = {
alignSelf: "center",
marginTop: 20,
marginBottom: 40,
alignItems: "center",
justifyContent: "center",
width: 200,
height: 56,
borderRadius: 27,
backgroundColor: "#50bfbf",
};

export const CongratsTextStyle = {
fontSize: 20,
fontFamily: "Inter-SemiBold",
lineHeight: 26,
color: "#25243b",
letterSpacing: -0.5,
marginTop: 12,
};
export const HeaderContainer = styled(UpperBoxContainer)`

padding: 12px 15px 26px 12px;
margin-bottom: 25px;
`;

export const CongratsTextContainer = styled.View`

justify-content: center;
            align-items: flex-start ;
            margin-left: 57 ;
            margin-right: 152
`;
