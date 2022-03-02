import styled from 'styled-components/native';

export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
 
  justify-content:center;
 
  width: 80%;  /**TODO: changed from 70 to 90 as there was conflict with UI on Screen, Have to be discussed  */
  background-color: #f6f6f6;
  border-radius: 16px;
  shadow-color: black;
  elevation: 4;
`;

export const PopupHeading = styled.Text`
  
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #25243b;
`;

export const SubTextContainer = styled.View`
  margin-top: 20px;  
`;

export const TopIconView = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  top: -32px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const AccountDetailsCardContainer = styled.View`
  flexDirection:row;
`;

export const AccountDetailsColumn = styled.View`
  flex:1; 
  padding-bottom:5px;
  padding-top:10px;
  padding-left:20px;
  padding-right:20px;
`;

export const AccountTypeText = styled.Text`
  color:#686873;
  font-size:10px;
  line-height:14px;
  letter-spacing:0.5px;
`;

export const AccountNumberText = styled.Text`
  color:#000000;
  font-size:14px;
  line-height:20px;
  letter-spacing:-0.5px;
`;

export const AccountListView = styled.View`
  background-color:#ffffff;
  width:100%;
  padding-vertical:20px;
  margin-top:10px;
  border-radius:10px;
`;

export const ChooseReasonView = styled.View`
  background-color:#25243b;
  border-radius:10px;
  margin-top:16px;
`;

export const AccountOpeningMsg = styled.Text`
  color:#ffffff;
  font-size:12px;
  line-height:18px;
  letter-spacing:-0.2px;
  padding-horizontal:20px;
  padding-vertical:16px;
`;

export const ReasonText = styled.Text`
  color:#25243b;
  padding-vertical:20px;
  font-size:14px;
  line-height:20px;
  letter-spacing:-0.5px;
`;