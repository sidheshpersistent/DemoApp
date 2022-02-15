import { Text } from 'react-native';
import { Typography } from 'styles';
import styled from 'styled-components';

/* eslint-disable import/prefer-default-export */
export const ButtonText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  font-family: ${Typography.FONT_FAMILY_BOLD};
  color: ${props => props.textColorProp};
  opacity: ${props => props.opacity};
`;
