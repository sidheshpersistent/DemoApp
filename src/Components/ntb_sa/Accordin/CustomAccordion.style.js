import styled from 'styled-components/native';
import { Colors, Typography } from 'styles';
import DeprecatedStyledText from 'components/common/DeprecatedStyledText';

export const AccodionTopView = styled.View`
  padding-top: 14px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const FaqRow = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const QueText = styled.View`
  flex: 0.9;
  align-items: flex-start;
`;
export const TitleText = styled(DeprecatedStyledText)`
  font-size: 20px;
  font-weight: bold;
  font-family: ${Typography.FONT_FAMILY_BOLD};
  color: ${Colors.WHITE};
`;

export const SubTitle = styled(DeprecatedStyledText)`
  font-size: 14px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  color: ${Colors.WHITE};
  padding-top: 5px;
  line-height: 25px;
`;
export const Arrow = styled.View`
  flex: 0.07;
  align-items: flex-end;
`;
export const KnowMore = styled(DeprecatedStyledText)`
  text-align: center;
  font-size: 12px;
  color: ${Colors.WHITE};
  font-weight: bold;
`;
export const ContentContainer = styled.View`
  flex-direction: row;
  padding-top: 24px;
  margin-bottom: 16px;
  justify-content: flex-start;
  padding-start: 10px;
`;
export const CardStyle = styled.View`
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  background-color: ${props => (props.anyWhereText ? props.bgColor : 'transparent')};
`;
export const AnsText = styled.View`
  padding-start: 24px;
  color: ${Colors.WHITE};
  padding: ${props => (props.TitleText === 'Earn As You GO' ? 10 : 0)};
`;

export const Description = styled.View`
  padding-start: 24px;
  color: ${Colors.WHITE};
`;
export const SecondText = styled(DeprecatedStyledText)`
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  font-size: 12px;
  margin-right: 70px;
  color: ${Colors.WHITE};
`;
export const FirstText = styled(DeprecatedStyledText)`
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  font-size: 16px;
  color: ${Colors.WHITE};
`;
