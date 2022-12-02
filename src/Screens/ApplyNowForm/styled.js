import styled from "styled-components/native";
import { UpperBoxContainer } from "../../Components";

export const HeaderContainer = styled(UpperBoxContainer)`
  padding: 12px 15px 20px 12px;

`;
export const CloseAndSave = styled.View`

  
  align-items:flex-end;
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
  color: #9b1e26;
`;

export const warningBoxStyle = {
  width: "100%",
  alignItems: "center",
  padding: 18,
  marginTop: 10,
  flexDirection: "row",
  borderRadius: 10,
};

export const TitleContainer = styled.View`
  margin-right: 35px;
  align-items: flex-start;
  margin-left: 35px;
`;
