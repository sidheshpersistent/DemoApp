import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors, Typography } from 'styles';
import commonLabel from 'translations/ntb_sa/common';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { getAccountCreationDetails } from 'ntb_redux/selectors';

export const MainContainer = styled(View)`
  padding-horizontal: 20px;
`;
export const CenterView = styled(View)`
  padding-top: 80px;
  align-self: center;
`;

export const TimeSlotText = styled(Text)`
  text-align: center;
  font-size: ${Typography.BODY_3_REGULAR}px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  color: ${Colors.DARK};
`;

export const TouchableView = styled(TouchableOpacity)`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.GREY};
`;

const TimeSlotPicker = props => {
  const { onSelectTime, selectedDate } = props;

  let currHours = new Date().getHours() + 1;
  let currMinutes = new Date().getMinutes();

  if (currHours < 9) {
    currHours = 8;
    currMinutes = 30;
  }

  const accountCreationDetails = useSelector(getAccountCreationDetails());

  if (selectedDate !== '') {
    const date1 = new Date(selectedDate);
    const date2 = new Date();
    if (date1.getTime() > date2.getTime()) {
      currHours = 8;
      currMinutes = 30;
    } else if (accountCreationDetails !== undefined) {
      let accountCreateServerTime = '';
      accountCreateServerTime = accountCreationDetails.accountCreationObj.serverTime;
      currHours = new Date(accountCreateServerTime).getHours() + 1;
      currMinutes = new Date(accountCreateServerTime).getMinutes();
    }
  }

  /*    eslint-disable prefer-const   */
  let timeSlotArr1 = [];
  let minflag = 0;
  for (let i = currHours; i < 18; i++) {
    let hourflag = 'AM';
    let hourflag2 = 'AM';
    let hourText = i;

    if (currMinutes < 30) {
      currMinutes = 30;
      minflag = 1;
      let hourText1 = hourText + 1;
      if (hourText1 > 11) {
        hourflag = 'PM';
      }

      if (hourText > 12) {
        hourText -= 12;
      }
      if (hourText1 > 12) {
        hourText1 -= 12;
      }
      const pushText2 = `${hourText}:30 - ${hourText1}:00 ${hourflag}`;
      timeSlotArr1.push(pushText2);
    } else if (minflag === 1) {
      let hourText1 = hourText;
      if (hourText1 > 11) {
        hourflag = 'PM';
      }
      if (hourText1 > 12) {
        hourText1 -= 12;
      }

      let hourText2 = hourText + 1;
      if (hourText2 > 11) {
        hourflag2 = 'PM';
      }
      if (hourText2 > 12) {
        hourText2 -= 12;
      }

      const pushText1 = `${hourText1}:00 - ${hourText1}:30 ${hourflag}`;
      const pushText2 = `${hourText1}:30 - ${hourText2}:00  ${hourflag2}`;
      if (hourText1 !== 9) {
        timeSlotArr1.push(pushText1);
      }
      timeSlotArr1.push(pushText2);
    } else {
      minflag = 1;
    }
  }

  return (
    <MainContainer>
      <If condition={timeSlotArr1.length > 0}>
        {timeSlotArr1.map(element => (
          <TouchableView
            key={element}
            onPress={() => {
              onSelectTime(element);
            }}
          >
            <TimeSlotText>{element}</TimeSlotText>
          </TouchableView>
        ))}
      </If>
      <If condition={timeSlotArr1.length === 0}>
        <CenterView>
          <Text>{commonLabel.NO_SLOTS_AVAILABLE}</Text>
        </CenterView>
      </If>
    </MainContainer>
  );
};

export default TimeSlotPicker;
