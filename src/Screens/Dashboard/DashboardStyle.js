import styled from 'styled-components/native';

export const DashboardContainer = styled.View`
flex:1;
backgroundColor:lightgrey;
  
`;

export const UpperBoxContainer = styled.View`
    
padding:8.8% 6.7%;

height:33.4%;
backgroundColor:white;
borderBottomLeftRadius:24px;
borderBottomRightRadius:24px;
elevation:4
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
    fontSize:10px;
    fontWeight:800;
    letterSpacing:0.5px;
    lineHeight:14px;
    color:#686873
`;


export const image={
    width: 48, height: 48, borderRadius: 24
  }

export const header={elevation: 0, padding: 0, margin: 0}

// without percent sizes may causse conflict as in highlights card 



