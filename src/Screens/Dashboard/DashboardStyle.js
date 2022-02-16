import styled from 'styled-components/native';

export const DashboardContainer = styled.View`
flex:1;
backgroundColor:lightgrey;
  
`;

export const UpperBoxContainer = styled.View`
    
padding:8.3% 6.7%;

height:33.4%;
backgroundColor:white;
borderBottomLeftRadius:24px;
borderBottomRightRadius:24px;

`;
export const Welcome = styled.Text`
  fontSize:28px;
 lineHeight:36px;
 letterSpacing:-1px;
    color:#25243b;
    
`;

export const AgentName = styled.Text`
  fontSize:28px;
  lineHeight:36px;
  letterSpacing:-1px;
  fontWeight:600;
  color:#25243b
`;
export const AgentGreetWrapper = styled.View`
    marginLeft:16px;
    
`;
export const HighlightHeading = styled.Text`
    marginTop:12px;
    fontSize:10px
`;

export const image={
    width: 48, height: 48, borderRadius: 24
  }

export const header={elevation: 0, padding: 0, margin: 0}

// without percent sizes may causse conflict as in highlights card 

export  const highlightCard={width: "30%",backgroundColor:"skyblue",marginTop:16,height:90} 

