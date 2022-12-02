
import styled from 'styled-components/native';

export const LoginContainer = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LoginTitle = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-vertical: 24;
`;
export const LoginBox = styled.View`
  margin-top: 15px;
  border-radius: 12px;
  background-color: #f6f6f6;
`;
export const LoginBoxContainer = styled.View`
  width: 500px;
`;
export const LoginTitleTextBold = styled.Text`
  fontsize: 28px;
  color: white;
  font-weight: 700;
`;
export const LoginTitleTextRegular = styled.Text`
  fontsize: 28px;
  color: white;
  font-weight: 400;
`;
export const UserNameView = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
`;
export const PasswordView = UserNameView;
export const ForgotPassView = styled.View`
  justify-content: center;
  align-items: flex-end;
`;
export const UserNametextInput = styled.TextInput`
  background-color: white;
  height: 62px;
  margin-horizontal: 20px;
  border-radius: 8px;
  fontsize: 16px;
`;
export const PasswordtextInput = UserNametextInput;
export const LoginButtonView = styled.View`
  width: 100%;

  margin-bottom: 20px;
`;

export const CardMargin = styled.View`
  margin-bottom: 20px;
`;
export const ErrorMsgView = LoginButtonView;

export const PopupContainer = {
  backgroundColor: "#f6f6f6", 
  width: "95%" 
};
