import styled from 'styled-components/native';

import {DASHBOARD_CODE} from '../../constants/colorCode';
const {PENDING_HIGHLIGHT, SUCCESS_HIGHLIGHT, TOTAL_HIGHLIGHT} = DASHBOARD_CODE;
export const HighLightContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const HighLightTextContainer = styled.View`
  margin-top: 39px;
  width: 70px;
`;
export const HighLightText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #25243b;
`;
export const HighlightValue = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #25243b;
`;

export const highlightCard = {
  width: '30%',
  backgroundColor: TOTAL_HIGHLIGHT,
  marginTop: 16,
  height: 119,
  borderRadius: 20,
  paddingLeft: 16,
  paddingRight: 16,
};
export const highlightCard2 = {
  width: '30%',
  backgroundColor: SUCCESS_HIGHLIGHT,
  marginTop: 16,
  height: 119,
  borderRadius: 20,
  paddingLeft: 16,
  paddingRight: 16,
};
export const highlightCard3 = {
  width: '30%',
  backgroundColor: PENDING_HIGHLIGHT,
  marginTop: 16,
  height: 119,
  borderRadius: 20,
  paddingLeft: 16,
  paddingRight: 16,
};
export const smallBox = {
  width: 36,
  
  top: 15,
  right: 15,
  height: 40,
  justifyContent:"center",
  position:"absolute",
  borderRadius: 8,
  alignItems:"center"
 
};
