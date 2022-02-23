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
    border-radius: 10px;
    background-color: #f6f6f6;
    flex: 1;
`;
export const LoginBoxContainer = styled.View`
    width: 500px;
    height: 400px;
`;
export const LoginTitleText = styled.Text`
    fontSize: 40px;
    color: white;
`;
export const UserNameView = styled.View`
    flex: 1;
    justify-content: center; 
`;
export const PasswordView = UserNameView;
export const UserNametextInput = styled.TextInput`
    background-color: white;
    height: 50px;
    margin-horizontal: 20px;
    border-radius: 10px;
    fontSize: 30px
`;
export const PasswordtextInput = UserNametextInput;
export const LoginButtonView = styled.View`
    flex: 1;
    justify-content: center;
`;
export const ErrorMsgView = LoginButtonView;