import styled from 'styled-components/native';

export const PlaceHolderWrapper = styled.View`
  width: ${({iconSize}) => `${iconSize}px`};
  height: ${({iconSize}) => `${iconSize}px`};
  line-height: ${({iconSize}) => `${iconSize}px`};
  border: 1px dashed ${({theme}) => theme?.Common?.borderColor};
  border-radius: ${({iconSize}) => `${iconSize / 2}px`};
  align-items: center;
  justify-content: center;
`;
