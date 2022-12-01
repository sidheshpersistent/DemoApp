import React from 'react';
import {View} from 'react-native';
import {TestIds} from '../../../../Utils/Constants';


import {
  highlightCard,
  highlightCard2,
  highlightCard3,
  HighLightContainer,
  HighLightText,
  HighLightTextContainer,
  HighlightValue,
  smallBox,
  TotalApplicationImage,
  TotalProgressImage,
  TotalSuccessImage,
} from './styles';
import { FontSize, LineHeight,COLOR_TYPES } from '@idfc/ccl-commons/enums';


import { monthlyProgressApplication, monthlySuccessApplication, monthlyTotalApplication } from '../../../../Assets/Images';
import { Card,CustomText } from '../../../../Components';
import { Colors } from '../../../../Utils';



const MonthlyHighlights = props => {
 
// monthlyHighlights
  const {monthlyHighlights} = props;

// console.log("qqqqqqq",monthlyHighlights)

  return (
    <HighLightContainer>
      {monthlyHighlights.map(item =>
        item.flag == 'total' ? (
       
       <Card key={item.id} style={highlightCard} testID={TestIds.db_total_app}> 
            <View style={[smallBox, {backgroundColor: COLOR_TYPES.PROD_TWILIGHT_100}]}>
              <TotalApplicationImage
                source={monthlyTotalApplication}
                
              />
            </View>
            <HighLightTextContainer>
              <CustomText
                fontSize={FontSize.SIZE_12}
                lineHeight={LineHeight.HEIGHT_16}
                color={Colors.NEW_GREY_800.text}>
                {item.title}
              </CustomText>
            </HighLightTextContainer>
            <HighlightValue>{item.value}</HighlightValue>
          </Card>
        ) : item.flag == 'success' ? (
          <Card key={item.id} style={highlightCard2} testID={TestIds.db_successful_app}>
            <View style={[smallBox, {backgroundColor: COLOR_TYPES.PROD_PERSIAN_100}]}>
              <TotalSuccessImage
                source={monthlySuccessApplication}
          
              />
            </View>
            <HighLightTextContainer>
              <HighLightText>{item.title}</HighLightText>
            </HighLightTextContainer>
            <HighlightValue>{item.value}</HighlightValue>
          </Card>
        ) : (
          <Card key={item.id} style={highlightCard3} testID={TestIds.db_app_in_progress}>
            <View style={[smallBox, {backgroundColor: COLOR_TYPES.PROD_MUSTARD_100}]}>
              <TotalProgressImage        
                source={monthlyProgressApplication}
              
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
