import { Text, View } from 'react-native';
import { Colors, Typography } from 'styles';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  justify-align-self: center;
  margin-top: 20px;
`;

export const LeftContentText = styled(Text)`
  font-size: 9px;
  color: ${Colors.DARK};
  opacity: 0.4;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  margin-bottom: 0px;
  margin-vertical: 10px;
`;
export const CardContainerView = styled(View)`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 25px;
  padding-bottom: 16px;
`;
