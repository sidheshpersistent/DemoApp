import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  UpperBoxContainer,
  DashboardContainer,
  Welcome,
  AgentName,
  AgentGreetWrapper,
  HighlightHeading,
  header,
  image,
} from './DashboardStyle';
import ProfileHeaderContainer from '../../components/ProfileHeaderContainer';

import {COMMON_CONST} from '../../constants/constants';
import MonthlyHighlights from './MonthlyHighlights';
const Dashboard = props => {

  useEffect(()=>{


  },[])

  const [monthlyHighlights, setMonthlyHighlights] = useState([
    {id: 1, flag: 'total', value: 100, title: 'Total Applications'},
    {id: 2, flag: 'success', value: 80, title: 'Successful Applications'},
    {id: 3, flag: 'pending', value: 200, title: 'Application In Progress'},
  ]);

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
              <AgentName>Rajiv Kumar !</AgentName>
            </AgentGreetWrapper>
          }
        />
        <HighlightHeading>{COMMON_CONST.HIGHLIGHTS}</HighlightHeading>
        <MonthlyHighlights monthlyHighlights={monthlyHighlights} />
      </UpperBoxContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
