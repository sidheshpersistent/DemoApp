import styled from 'styled-components/native';

export const DashboardContainer = styled.View`
  flex: 1;
  background-color: lightgrey;
`;

export const UpperBoxContainer = styled.View`
  padding: 8.3% 6.7%;

  height: 33.4%;
  background-color: white;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const LowerBoxContainer = styled.View`
  padding: 0% 6.7%;
  background-color: blue;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const highlightMenuCard = styled.View`
  width: 251px;
  background-color: #ececef;
`;

export const CardDetailsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
`;

export const Welcome = styled.Text`
  fontsize: 28px;
  lineheight: 36px;
  letterspacing: -1px;
  color: #25243b;
`;

export const AgentName = styled.Text`
  fontsize: 28px;
  lineheight: 36px;
  letterspacing: -1px;
  fontweight: 600;
  color: #25243b;
`;
export const AgentGreetWrapper = styled.View`
  marginleft: 16px;
`;
export const HighlightHeading = styled.Text`
  margintop: 12px;
  fontsize: 10px;
`;
export const HighlightMainHeading = styled.Text`
  fontsize: 16px;
`;

export const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
};

export const header = {elevation: 0, padding: 0, margin: 0};

// without percent sizes may causse conflict as in highlights card

export const highlightCard = {
  width: '30%',
  backgroundColor: 'skyblue',
  marginTop: 16,
  height: 90,
};
export const MainCardStyle = {
  width: '45%',
  height: 253,
  backgroundColor:'red',
  margin:8
};
