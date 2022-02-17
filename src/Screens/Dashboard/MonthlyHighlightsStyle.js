import styled from 'styled-components/native';
import Card from '../../components/CardView';
import { DASHBOARD_CODE } from '../../constants/colorCode';
const {PENDING_HIGHLIGHT,SUCCESS_HIGHLIGHT,TOTAL_HIGHLIGHT}=DASHBOARD_CODE
export const HighLightContainer = styled.View`
    justifyContent:space-between;
    flexDirection:row;
`;
export const HighLightTextContainer = styled.View`
    marginTop:39px;
    width:70px;
    
`;
export const HighLightText = styled.Text`
    
    fontSize:12px;
    lineHeight:16px;
    color: #25243b
`;
export const HighlightValue= styled.Text`
    fontSize:28px;
    fontWeight:bold;
    color:#25243b

`

export  const highlightCard={width: "30%",backgroundColor:TOTAL_HIGHLIGHT,marginTop:16,height:119,borderRadius:20,paddingLeft:16,paddingRight:16} 
export  const highlightCard2={width: "30%",backgroundColor:SUCCESS_HIGHLIGHT,marginTop:16,height:119,borderRadius:20,paddingLeft:16,paddingRight:16} 
export  const highlightCard3={width: "30%",backgroundColor:PENDING_HIGHLIGHT,marginTop:16,height:119,borderRadius:20,paddingLeft:16,paddingRight:16} 
