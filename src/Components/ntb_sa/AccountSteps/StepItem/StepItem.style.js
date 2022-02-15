import styled from 'styled-components/native';
import { Colors, Typography } from 'styles';
import { Dimensions } from 'react-native';
import DeprecatedStyledText from 'components/common/DeprecatedStyledText';

const deviceWidth = Dimensions.get('window').width;

export const TabLabel = styled(DeprecatedStyledText)`
  ${({ IsSelected, TabNo }) =>
    /* eslint-disable no-nested-ternary */
    IsSelected === TabNo
      ? `
  font-size: ${Typography.SEMIBOLD}px;
    font-family: ${Typography.FONT_FAMILY_BOLD};
    color: ${Colors.DARK};
    margin-top: 8px;
    text-align: center;
    background-color: ${Colors.STEP_BG}

  `
      : TabNo < IsSelected
      ? `
    font-size: ${Typography.SEMIBOLD}px;
    font-family: ${Typography.FONT_FAMILY_BOLD};
    color: ${Colors.DARK};
    margin-top: 8px;
    text-align: center;
    background-color: ${Colors.STEP_BG}
    color:${Colors.MAROON}
   `
      : `
   margin-top: 8px;
   font-size: ${Typography.SEMIBOLD}px;
   font-family: ${Typography.FONT_FAMILY_REGULAR};
   color: ${Colors.DARK};
   text-align: center;
   background-color: ${Colors.STEP_BG}
  `}
`;

export const TabText = styled(DeprecatedStyledText)`
  ${({ IsSelected, TabNo }) =>
    IsSelected >= TabNo
      ? `
  text-align: center;
    font-size: ${Typography.BODY_2_REGULAR}px;
    font-family: ${Typography.FONT_FAMILY_BOLD};
    color: ${Colors.WHITE}
  `
      : `
  text-align: center;
    font-size: ${Typography.BODY_2_REGULAR}px;
    font-family: ${Typography.FONT_FAMILY_LIGHT};
    color: ${Colors.MAROON}
`}
`;

export const Tabs = styled.View`
  ${({ IsSelected, TabNo }) =>
    IsSelected >= TabNo
      ? `
  border-radius: 13px;
  background-color: ${Colors.MAROON};
  height: 26px;
  width: 26px;
  align-content:center;
  justify-content:center;
  position:absolute;
  top:0
  `
      : `
  border-radius: 13px;
  background-color: ${Colors.WHITE};
  height: 26px;
  width: 26px;
  align-content:center;
  justify-content:center;
  position:absolute;
  top:0
`}
`;

export const MainContainer = styled.View`
  align-items: center;
  margin-horizontal: 0px;
  top: -10px;
`;

export const InnerContainer = styled.View`
  width: ${deviceWidth / 3}px;
  top: -10px;
  padding-top: 18px;
  margin-top: 14px;
  overflow: hidden;
`;
// background-color: ${Colors.BACKGROUND_COLOR};
