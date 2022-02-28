import styled from 'styled-components/native';

export const DashboardContainer = styled.ImageBackground`
  flex: 1;
 
`;



export const Welcome = styled.Text`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1px;
  color: #25243b;
  font-weight: 400;
`;
export const AgentName = styled.Text`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1px;
  font-weight: 600;
  color: #25243b;
`;

export const AgentGreetWrapper = styled.View`
  margin-left: 16px;
`;

export const HighlightHeading = styled.Text`
  margin-top: 12px;
  font-size: 10px;
  font-weight: bold;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: #686873;
`;


export const LowerBoxContainer = styled.View`
padding-horizontal:30px;
padding-top:30px;
flex:1;
`;

export const highlightMenuCard = styled.View`
  width: 251px;
  background-color: #ececef;
`;

export const CardDetailsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin:20px;
`;




export const WhatDoYouWantTo =styled.Text`
height: 22px;
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 22px;
letter-spacing: -0.5px;
color: #ffffff;
padding-left:10px
`
;

export const Title = styled.Text`
 width:118px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;

 color:#25243b
`

export const SubTitle = styled.Text`
 
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: 26px;
 
 color:#25243b
`

export const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
};

export const header = {elevation: 0, padding: 0, marginTop: 15};



export const highlightCard = {
  width: '30%',
  backgroundColor: 'skyblue',
  marginTop: 16,
  height: 90,
};
export const MainCardStyle = {
  width: '45%',
  height: 253,
  backgroundColor: 'red',
  
};
