import styled from 'styled-components/native';
import RadioButtonTheming from './RadioButton.theming';
import { Colors } from '../../Utils';

export const RadioSelect = styled.View`
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  border-radius: 12px;
  ${(props) => `
      background-color: ${Colors.PRIMARY_COLOR};
    `};
`;

export const RadioSelectedInnerCircle = styled.View`
  position: absolute;
  z-index: 1;

  align-self: center;

  width: 18px;
  height: 18px;

  border-radius: 9px;
  border-width:3px;
  border-color: ${Colors.white_radio};
  background-color: ${Colors.PRIMARY_COLOR};
 
`;

export const RadioDeselect = styled.View`
  width: 22px;
  height: 22px;

  border-width: 2px;
  border-radius: 11px;
  ${(props) => {
    if (props.disabled) {
      return `
        border-color: ${RadioButtonTheming(props)?.unSelected?.disabled?.borderColor};
        background-color: ${RadioButtonTheming(props)?.unSelected?.disabled?.backgroundColor};
      `;
    }
    return `
      border-color: ${Colors.PRIMARY_COLOR};
      background-color: ${Colors.white_radio};
    `;
  }};
`;

export const RadioContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  padding-vertical: 10px;
  ${(props) => {
   
    if (props.variant === 'highlight' && props.selected) {
     
      return `
        margin-horizontal: 2px;
        padding-horizontal: 20px;
        border-radius: 5px;
        shadow-color: ${RadioButtonTheming(props)[props.variant].selected.container.shadowColor};
        shadow-opacity: 0.22;
    
        shadow-offset: 0 1px;
        shadow-radius: 2px;
        elevation: 5;
        background-color: ${RadioButtonTheming(props)[props.variant].selected.container.backgroundColor};
      `;
    }
    if (props.variant === 'highlight' && !props.selected) {
      return `
        margin-horizontal: 2px;
        padding-horizontal: 20px;
        border-radius: 5px;
        background-color: ${RadioButtonTheming(props)[props.variant].backgroundColor};
      `;
    }
    return '';
  }};
`;

export const RadioLabelView = styled.View`
  justify-content: center;
  margin-left: 12px;

  opacity: ${({disabled}) => (disabled ? 0.3 : 1.0)};
`;
