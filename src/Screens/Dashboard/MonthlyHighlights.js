import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Card from '../../components/CardView';

import {
  highlightCard,
  highlightCard2,
  highlightCard3,
  HighLightContainer,
  HighLightText,
  HighLightTextContainer,
  HighlightValue,
} from './MonthlyHighlightsStyle';

const MonthlyHighlights = props => {
  const {monthlyHighlights} = props;

  return (
    <HighLightContainer>
      {monthlyHighlights.map(item => (
        <Card
          key={item.id}
          style={
            item.flag == 'total'
              ? highlightCard
              : item.flag == 'success'
              ? highlightCard2
              : highlightCard3
          }>
          <HighLightTextContainer>
            <HighLightText>{item.title}</HighLightText>
          </HighLightTextContainer>
          <HighlightValue>{item.value}</HighlightValue>
        </Card>
      ))}
    </HighLightContainer>
  );
};

export default MonthlyHighlights;
