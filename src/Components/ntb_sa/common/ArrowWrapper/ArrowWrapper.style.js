import styled from 'styled-components/native';
import { Colors } from 'styles';
import { View, TouchableOpacity } from 'react-native';

export const IconButton = styled(TouchableOpacity).attrs({
  activeOpacity: 1,
})`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  background-color: ${props => (props.isActive ? Colors.MAROON : Colors.GREY)};
`;

export const Container = styled(View)`
  align-items: flex-end;
  justify-content: ${props => (props.aadharConsent ? 'flex-start' : 'flex-end')};
`;
