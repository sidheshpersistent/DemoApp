

import styled from "styled-components/native";
import { Colors } from "../../../Utils";

export const CardMargin = styled.View`
  margin-bottom: 0px;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: ${Colors.NEW_GREY_600.code};
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const LabelText = styled.Text`
  font-size: 10px;
  font-family: Inter;
  font-style: normal;
  line-height: 13px;
  color: ${Colors.NEW_GREY_600.code};
  margin-top: 2px;
  margin-bottom: 6px;
`;

export const boxFlex = {
  flex: 0.5
};

export const boxMarging = {
  marginTop: 20
};

export const boxCard = {
  elevation: 4,
  padding: 20,
};

export const accDetailBox = {
  alignItems: 'center',
  padding: 10,
  marginBottom: 8,
  flexDirection: 'row',
};

export const AccDetailsTextStyle = {
  fontSize: 10,
  fontFamily: 'Inter-Bold',
  color: Colors.NEW_GREY_600.code,
};

export const AccDetailsValueStyle = {
  fontSize: 12,
  fontFamily: 'Inter-SemiBold',
  color: Colors.NEW_GREY_800.code,
  fontWeight: 'bold',
};
