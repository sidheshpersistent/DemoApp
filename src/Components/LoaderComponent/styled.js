import styled from 'styled-components/native';

export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
`;
export const LogoView = styled.View`
  justify-content: center;
  align-items: center;
`;


export const ModalView = styled.View`
  justify-content: center;
  width: 100%; /**TODO: changed from 70 to 90 as there was conflict with UI on Screen, Have to be discussed  */
  height: 100%;
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
  flex-direction: row;
`;

export const AccountDetailsColumn = styled.View`
  flex: 1;
  padding-bottom: 5px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;




export const AccountListView = styled.View`
  background-color: #ffffff;
  width: 100%;
  padding-vertical: 20px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const ChooseReasonView = styled.View`
  background-color: #25243b;
  border-radius: 10px;
  margin-top: 16px;
  padding-horizontal: 20px;
  padding-vertical: 16px;
`;
export const BodyContainer = styled.View`
  padding-bottom: 20px;
`;
export const CancelBtn = styled.TouchableOpacity`
  align-self: center;
  margin-top: 0px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 56px;
`;
export const SideIcon = styled.Image`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 16px;
  top: -35px;
`;
