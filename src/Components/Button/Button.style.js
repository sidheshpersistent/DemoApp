import styled, {css} from 'styled-components/native';
import Text from '../Typography/Text';

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-horizontal: 20px;
`;

export const Label = styled(Text)`
  ${({fontSize}) => css`
    font-size: ${fontSize}px;
  `}
`;

export const Container = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  justify-content: center;

  ${({size, customWidth}) => {
    if (size === 'large') {
      return css`
        width: ${100}%;
        height: 80px;
        border-radius: 3px;
      `;
    }
    if (size === 'small') {
      return css`
        width: ${customWidth ? (customWidth.includes('%') ? customWidth : `${customWidth}px`) : '160px'};
        height: 30px;
        border-radius: 25px;
      `;
    }
    return css`
      width: ${customWidth ? (customWidth.includes('%') ? customWidth : `${customWidth}px`) : '250px'};
      height: 50px;
      border-radius: 25px;
    `;
  }}

  ${({buttonType, disabled, noBorder, theme}) => {
    if (buttonType === 'secondary')
      return css`
        background-color: ${disabled ? theme?.Button[buttonType]?.disabled?.backgroundColor : theme?.Button[buttonType]?.backgroundColor};
        border-width: ${noBorder ? '0' : '2px'};
        border-color: ${disabled ? theme?.Button[buttonType]?.disabled?.border : theme?.Button[buttonType]?.border};
      `;

    if (disabled) {
      return css`
        background-color: ${theme?.Button[buttonType]?.disabled?.backgroundColor};
      `;
    }
    return css`
      background-color: ${theme?.Button[buttonType]?.backgroundColor};
    `;
  }}
`;

export const IconWrapper = styled.View`
  margin-right: 8px;
`;
