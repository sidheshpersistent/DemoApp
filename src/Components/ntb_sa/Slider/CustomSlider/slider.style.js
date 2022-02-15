import styled from 'styled-components/native';
import { Colors, Typography } from 'styles';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export const oneButtonSlideWidth = width * 0.9;

export const TextWrapper = styled.View`
  opacity: 0.8;
  font-size: 14px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  border-color: ${Colors.DARK};
`;

export const SliderContainer = styled.View`
  margin-vertical: 10px;
`;

export const CardStyleView = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 0px;
  align-self: center;
  width: ${oneButtonSlideWidth};
`;

export const TextWrapperJustifyCenter = styled.View`
  opacity: 0.8;
  font-size: 14px;
  justify-content: center;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  border-color: ${Colors.DARK};
`;

export const BottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-start: 2px;
  padding-end: 2px;
  align-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
