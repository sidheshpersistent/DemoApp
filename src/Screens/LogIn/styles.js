import { StyleSheet } from "react-native";
import styled  from "styled-components/native";


export const LoginContainer = styled.ImageBackground`
    flex:1;
    justify-content: center;
    align-items: center;
`;
export const LoginTitle = styled.View`
    justify-content: center;
    align-items: flex-start;

`;
export const LoginBox = styled.View`
    margin-top: 15px;
    border-radius: 12px;
    background-color: #f6f6f6;
    flex: 1;
`;
export const LoginBoxContainer = styled.View`
    width: 500px;
    height: 400px;
`;
export const LoginTitleTextBold = styled.Text`
    fontSize: 28px;
    color: white;
    font-weight: 700;
`;
export const LoginTitleTextRegular = styled.Text`
    fontSize: 28px;
    color: white;
    font-weight: 400;
`;
export const UserNameView = styled.View`
    flex: 1;
    padding-top:30px;
`;
export const PasswordView = UserNameView;
export const ForgotPassView = styled.View`
    flex:0.5;
    justify-content: center;
    align-items: flex-end;
`;
export const UserNametextInput = styled.TextInput`
    background-color: white;
    height: 62px;
    margin-horizontal: 20px;
    border-radius: 8px;
    fontSize: 16px;
`;
export const PasswordtextInput = UserNametextInput;
export const LoginButtonView = styled.View`
    flex: 1.5;
    justify-content: center;
`;
export const ErrorMsgView = LoginButtonView;