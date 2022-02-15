import styled from 'styled-components/native';
import { Colors, Typography } from 'styles';
import DeprecatedStyledText from 'components/common/DeprecatedStyledText';

export const CarouselItemContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;
export const ItemHeightView = styled.View`
  height: 140px;
`;

export const TextStyle = styled(DeprecatedStyledText)`
  font-size: 14px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  color: ${Colors.WHITE};
  text-align: center;
`;

export const TextContainer = styled.View`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const GradientContainer = styled.View`
  align-items: center;
`;

export const IconContainer = styled.View`
  margin-top: 20px;
  background: ${props => props.bgColor};
  border-radius: 60px;
`;
