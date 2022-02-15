import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RadioButton, Text } from '@idfc/ccl-mobile';
import { Spacing } from '@idfc/ccl-commons/enums';

export const StyledSafeAreaView = styled.SafeAreaView`
  margin-bottom: ${Platform.OS === 'android' ? 20 : 0};
  flex: 1;
  justify-content: space-between;
  padding-horizontal: ${Spacing.SPACE_20}px;
`;

export const ThemeContainer = styled.View`
  margin-top: ${Spacing.SPACE_40}px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${Spacing.SPACE_32}px;
  padding-horizontal: ${Spacing.SPACE_16}px;
`;

export const Column = styled.View`
  align-items: center;
`;

export const StyledRadioButton = styled(RadioButton)`
  padding-top: ${Spacing.SPACE_16}px;
`;

export const LabelText = styled(Text)`
  padding: 10px;
`;
