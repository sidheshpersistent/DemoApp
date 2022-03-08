import React, {useState} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import styled from 'styled-components/native';

const PersonalizedButton = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {selectedButtonIndex} = props;

  const onPressButton = index => {
    setActiveIndex(index);
    selectedButtonIndex(index);
  };
  return (
    <ButtonContainer>
      <TouchableOpacity
        style={activeIndex === 0 ? {zIndex: 999} : null}
        onPress={() => {
          onPressButton(0);
        }}>
        <RedButtonStyle activeIndex={activeIndex}>
          <ButtonTextWhite activeIndex={activeIndex}>
            Personalized
          </ButtonTextWhite>
        </RedButtonStyle>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onPressButton(1);
        }}>
        <GrayButtonStyle activeIndex={activeIndex}>
          <ButtonTextRed activeIndex={activeIndex}>Instant</ButtonTextRed>
        </GrayButtonStyle>
      </TouchableOpacity>
    </ButtonContainer>
  );
};
export default PersonalizedButton;
export const ButtonContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin-bottom: 32px;
`;
export const RedButtonStyle = styled.View`
  border-radius: 24px;
  background-color: ${props =>
    props.activeIndex === 0 ? '#6e0a0f' : '#e9e9e9'};
  width: 150px;
  height: 38px;
  align-item: center;
  justify-content: center;
  z-index: 999;
`;
export const ButtonTextWhite = styled.Text`
  font-size: 14px;
  color: ${props => (props.activeIndex === 0 ? '#fff' : '#6e0a0f')};
  text-align: center;
  font-weight: bold;
`;
export const GrayButtonStyle = styled.View`
  border-radius: 24px;
  background-color: ${props =>
    props.activeIndex === 1 ? '#6e0a0f' : '#e9e9e9'};
  margin-left: -25px;
  width: 150px;
  height: 38px;
  align-item: center;
  justify-content: center;
  z-index: 1;
`;
export const ButtonTextRed = styled.Text`
  font-size: 14px;
  color: ${props => (props.activeIndex === 1 ? '#fff' : '#6e0a0f')};
  text-align: center;
  font-weight: bold;
`;
