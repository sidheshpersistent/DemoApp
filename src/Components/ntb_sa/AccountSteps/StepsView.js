import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'styles';
import StepItem from './StepItem/StepItem';

const deviceWidth = Dimensions.get('window').width;

const MainContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  width: ${deviceWidth}px;
  background-color: ${Colors.STEP_BG}
  top: 10px;
`;

const StepsView = props => {
  const steps = [
    { stepNo: 1, stepLabel: 'BASIC\n DETAILS' },
    { stepNo: 2, stepLabel: 'PRODUCT\n SELECTION' },
  ];

  const { selectedStep = 1 } = props;

  return (
    <MainContainer>
      {steps.map(element => {
        return (
          <StepItem
            key={element.stepNo}
            isSelected={selectedStep}
            tabNo={element.stepNo}
            tabLabel={element.stepLabel}
            style={{ flex: 1 }}
          />
        );
      })}
    </MainContainer>
  );
};
export default StepsView;
