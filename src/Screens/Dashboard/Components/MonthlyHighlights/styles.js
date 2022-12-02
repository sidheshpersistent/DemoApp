import { StyledText } from '@idfc/ccl-mobile/lib/module/v2';
import styled from 'styled-components/native';
import Colors from '../../../../Utils/Colors';

export const HighLightContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const HighLightTextContainer = styled.View`
  margin-top: 39px;
  width: 70px;
`;
export const HighLightText = styled(StyledText)`
  font-family: Inter;
  font-size: 12px;
  line-height: 16px;
  color: #25243b;
`;
export const HighlightValue = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #25243b;
  font-family: Inter;
`;
export const TotalApplicationImage= styled.Image`
  width:19px;
  height:24px;
`;
export const TotalSuccessImage= styled.Image`
  width:24px;
  height:24px;
`;
export const TotalProgressImage=TotalSuccessImage;

export const highlightCard = {
  width: '30%',
  backgroundColor: Colors.TINT_PURPLE.code,
  marginTop: 16,
  marginBottom: 26,
  height: 119,
  borderRadius: 20,
  paddingLeft: 16,
  paddingRight: 16,
};
export const highlightCard2 = {
  width: '30%',
  backgroundColor: Colors.TINT_GREEN.code,
  marginTop: 16,
  height: 119,
  borderRadius: 20,
  paddingLeft: 16,
  paddingRight: 16,
};
export const highlightCard3 = {
  width: '30%',
  backgroundColor: Colors.TINT_YELLOW.code,
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
  justifyContent: 'center',
  position: 'absolute',
  borderRadius: 8,
  alignItems: 'center',
};
