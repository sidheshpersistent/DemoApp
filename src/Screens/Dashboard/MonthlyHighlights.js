import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Card from 'components/CardView';


import {
  highlightCard,
  highlightCard2,
  highlightCard3,
  HighLightContainer,
  HighLightText,
  HighLightTextContainer,
  HighlightValue,
  smallBox,
} from './MonthlyHighlightsStyle';

const MonthlyHighlights = props => {
  const {monthlyHighlights} = props;

  return (
    <HighLightContainer>
      {monthlyHighlights.map(item =>
        item.flag == 'total' ? (
          <Card key={item.id} style={highlightCard}>
            <View style={[smallBox, {backgroundColor: '#53537060'}]}>
              <Image
                source={require('../../assets/bg6.png')}
                style={{width: 19, height: 24}}
              />
            </View>
            <HighLightTextContainer>
              <HighLightText>{item.title}</HighLightText>
            </HighLightTextContainer>
            <HighlightValue>{item.value}</HighlightValue>
          </Card>
        ) : item.flag == 'success' ? (
          <Card key={item.id} style={highlightCard2}>
            <View style={[smallBox, {backgroundColor: '#58a79260'}]}>
              <Image
                source={require('../../assets/bg7.png')}
                style={{width: 24, height: 24}}
              />
            </View>
            <HighLightTextContainer>
              <HighLightText>{item.title}</HighLightText>
            </HighLightTextContainer>
            <HighlightValue>{item.value}</HighlightValue>
          </Card>
        ) : (
          <Card key={item.id} style={highlightCard3}>
            <View style={[smallBox, {backgroundColor: '#edc06860'}]}>
              <Image
                source={require('../../assets/bg8.png')}
                style={{width: 24, height: 24}}
              />
            </View>
            <HighLightTextContainer>
              <HighLightText>{item.title}</HighLightText>
            </HighLightTextContainer>
            <HighlightValue>{item.value}</HighlightValue>
          </Card>
        ),
      )}
    </HighLightContainer>
  );
};

export default MonthlyHighlights;
