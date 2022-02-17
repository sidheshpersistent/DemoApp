import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  UpperBoxContainer,
  DashboardContainer,
  Welcome,
  AgentName,
  AgentImage,
  AgentGreetWrapper,
  HighlightHeading,
  header,
  image,
  highlightCard,
} from './DashboardStyle';
import ProfileHeaderContainer from '../../components/ProfileHeaderContainer';

import Card from '../../components/CardView';
import {COMMON_CONST} from '../../constants/constants';
const Dashboard = props => {
  return (
    <DashboardContainer>
      <UpperBoxContainer>
        <ProfileHeaderContainer
          style={header}
          maxContainerHeight={200}
          leftView={
            <View>
              <Image style={image} source={require('./testImg.jpg')} />
            </View>
          }
          rightView={
            <AgentGreetWrapper>
              <Welcome>{COMMON_CONST.DROP_JOURNY_MODAL_TITLE}</Welcome>
              <AgentName>Rajiv Kumar!</AgentName>
            </AgentGreetWrapper>
          }
        />
        <HighlightHeading>{COMMON_CONST.HIGHLIGHTS}</HighlightHeading>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Card style={highlightCard}>
            <Text>ayush</Text>
            <Text>mishra</Text>
          </Card>
          <Card style={highlightCard}>
            <Text>ayush</Text>
            <Text>mishra</Text>
          </Card>
          <Card style={highlightCard}>
            <Text>ayush</Text>
            <Text>mishra</Text>
          </Card>
        </View>
      </UpperBoxContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
