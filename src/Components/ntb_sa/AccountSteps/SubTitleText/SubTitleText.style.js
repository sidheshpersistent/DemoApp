import styled from 'styled-components/native';
import { Colors, Typography } from 'styles';
import DeprecatedStyledText from 'components/common/DeprecatedStyledText';

export const MainContainer = styled.View`
  margin-horizontal: 18px;
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 10px;
`;

export const SubTitleTxt = styled(DeprecatedStyledText)`
  ${({ isSpannedTxt }) =>
    isSpannedTxt
      ? null
      : `
  font-size: ${Typography.H5_BOLD}px;
    font-family: ${Typography.FONT_FAMILY_BOLD};
    color: ${Colors.DARK};
    align-self: flex-start
`}
`;

export const ButtonWrapper = styled.TouchableOpacity`
  margin-right: 5px;
  align-items: center;
  margin-bottom: 3px;
`;
