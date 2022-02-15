import styled from 'styled-components/native';

export const DEFAULT_BOX_PADDING = 10;
export const DEFAULT_BOX_MARGIN = 0;

export const BoxWrapper = styled.View`
  

  border-radius: 5px;

 
  shadow-opacity: 0.22;

  shadow-offset: 0 1px;
  shadow-radius: 2px;
  elevation: 5;
  margin-vertical: ${(props) => props.marginVertical || DEFAULT_BOX_MARGIN}px;
  margin-horizontal: ${(props) => props.marginHorizontal || DEFAULT_BOX_MARGIN}px;
`;

export const BoxPadding = styled.View`
  border-radius: 5px;
  ${({noPadding, paddingVertical, paddingHorizontal}) => {
    if (noPadding) {
      return `
      padding-vertical: 0;
      padding-horizontal: 0;
      `;
    }
    return `
      padding-vertical: ${paddingVertical || DEFAULT_BOX_PADDING}px;
      padding-horizontal: ${paddingHorizontal || DEFAULT_BOX_PADDING}px;
    `;
  }};
`;

export const BoxSelect = styled.TouchableOpacity`
  
  border-radius: 5px;
`;
