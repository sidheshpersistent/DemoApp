import styled from 'styled-components/native';

export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
 
  justify-content:center;
 
  width: 90%;  /**TODO: changed from 70 to 90 as there was conflict with UI on Screen, Have to be discussed  */
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
