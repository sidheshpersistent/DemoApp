import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
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
  LowerBoxContainer,
  highlightMenuCard,
  HighlightMainHeading,
  CardDetailsView,
  MainCardStyle,
} from './DashboardStyle';
import ProfileHeaderContainer from '../../components/ProfileHeaderContainer';

import Card from '../../components/CardView';
import {COMMON_CONST} from '../../constants/constants';

const DATA = [
  {
    key: '1',
    title: 'Open a new',
    subtitle: 'Savings Account',
  },
  {
    key: '2',
    title: 'Open a new',
    subtitle: 'Salary Account',
  },
  {
    key: '3',
    title: 'Go to',
    subtitle: 'Bank Use Section',
  },
  {
    key: '4',
    title: 'Resume',
    subtitle: 'Application',
  },
];

const isEven = val => {
  return val % 2 == 0;
};

const Dashboard = props => {
  const renderItem = (item, index) => {
    alert(index)
    return (
      <Card
        key={item.key}
        style={{
          width: 251,
          height: 253,
          backgroundColor: 'red',
          marginRight: isEven(index + 1) ? 0 : 16,
        }}>
        <CardDetailsView>
          <View>
            <Text>{item.item.title}</Text>
            <Text>{item.item.subtitle}</Text>
          </View>
          <View>
            <Image
              style={{height: 20, width: 20, marginRight: 20, marginTop: 12}}
              source={require('../../assets/icons_24_arrow_forward.png')}
            />
          </View>
        </CardDetailsView>
        <Image
          style={{height: 50, width: 120, alignSelf: 'flex-end'}}
          source={require('../../assets/icons_24_arrow_forward.png')}></Image>
      </Card>
    );
  };

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

      <LowerBoxContainer>
        <HighlightMainHeading>
          {COMMON_CONST.MAIN_MENU_HEADER}
        </HighlightMainHeading>

        {/* {list()} */}
        <FlatList
          data={DATA}
          renderItem={(item, index) => renderItem(item, index)}
          keyExtractor={item => item.id}
          numColumns={2}
          style={{padding: 16}}
        />
      </LowerBoxContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
