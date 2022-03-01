import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  
  DashboardContainer,
  Welcome,
  AgentName,
  AgentGreetWrapper,
  HighlightHeading,
  header,
  image,
  LowerBoxContainer,
  CardDetailsView,
  WhatDoYouWantTo,
  Title,
  SubTitle,
} from './DashboardStyle';
import ProfileHeaderContainer from 'components/ProfileHeaderContainer';

import {COMMON_CONST} from '../../constants/constants';
import MonthlyHighlights from './MonthlyHighlights';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const lowerCardWidth = windowWidth / 2 - 60;

const DATA = [
  {
    key: '1',
    title: 'Open a new',
    subtitle: 'Savings \nAccount',
  },
  {
    key: '2',
    title: 'Open a new',
    subtitle: 'Salary \nAccount',
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

const Dashboard = props => {
  useEffect(() => {}, []);

  const [monthlyHighlights, setMonthlyHighlights] = useState([
    {id: 1, flag: 'total', value: 100, title: 'Total Applications'},
    {id: 2, flag: 'success', value: 80, title: 'Successful Applications'},
    {id: 3, flag: 'pending', value: 200, title: 'Application In Progress'},
  ]);

  const onCardPress = index => {
    if (index === 0 || index === 1) {
      let accountType = index === 0 ? 'HH' : 'CS';
      props.navigation.navigate('CustomerIdentificationDetails', {
        accountType: accountType,
      });
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => onCardPress(index)}>
        <ImageBackground
          key={item.key}
          style={{
            width: lowerCardWidth,
            height: lowerCardWidth,
            margin: 15,
          }}
          source={
            index == 0
              ? require('../../assets/bg2.png')
              : index == 1
              ? require('../../assets/bg3.png')
              : index == 2
              ? require('../../assets/bg4.png')
              : require('../../assets/bg5.png')
          }>
          <CardDetailsView>
            <View>
              <Title>{item.title}</Title>
              <SubTitle>{item.subtitle}</SubTitle>
            </View>
            <View>
              <Image
                style={{height: 36, width: 36}}
                source={require('../../assets/icons_24_arrow_forward.png')}
              />
            </View>
          </CardDetailsView>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <BackgroundImage>
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

      <LowerBoxContainer>
        <WhatDoYouWantTo>{COMMON_CONST.MAIN_MENU_HEADER}</WhatDoYouWantTo>

        <FlatList
          data={DATA}
          keyExtractor={item => item.key}
          renderItem={(item, index) => renderItem(item, index)}
          numColumns={2}
        />
      </LowerBoxContainer>
    </BackgroundImage>
  );
};

export default Dashboard;
