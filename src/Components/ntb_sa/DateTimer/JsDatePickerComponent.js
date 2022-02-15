import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { Colors, Typography } from 'styles';
import { iconConstants } from 'constants/ntb_sa';
import CardView from '../common/CardView';
import CustomIcon from '../common/CustomIcon';

const styles = StyleSheet.create({
  touchableContainer: { flex: 1, justifyContent: 'center' },
  textStyle: {
    fontSize: 10,
    marginTop: -10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 8,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginBottom: 16,
    borderColor: Colors.GREY,
  },
  customIconStyle: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    position: 'relative',
    marginTop: 10,
  },
  textInputStyle: {
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingTop: 8,
    paddingBottom: 8,
    width: '85%',
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 1,
    paddingBottom: 1,
  },
  cardContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
  },
  topStyle: { paddingTop: 0 },
});

const JsDatePickerComponent = props => {
  const {
    containerStyle,
    placeholder,
    fontName = iconConstants.IC_DATE,
    errorColor = Colors.DARK,
    minimumDate = null,
    maximumDate = new Date(),
    checkIsEmpty,
    holidayDBData = [],
    updateDate,
  } = props;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [dateText, setDateTxt] = useState('');
  const [show, setShow] = useState(false);
  const [disableDate, setDisableDate] = useState('');
  const placeholderStyle = { opacity: dateText === '' ? 0.4 : 1, color: show ? Colors.MAROON : Colors.DARK };
  const errorStyle = { color: errorColor, opacity: errorColor === Colors.ACCENT_2 ? 1 : 0.4 };

  const onSetShow = showValue => {
    setShow(!showValue);
    let disableDateCSV = '';
    if (holidayDBData.length > 0) {
      for (let i = 0; i < holidayDBData.length; i++) {
        if (disableDateCSV === '') {
          disableDateCSV = `"${holidayDBData[i].value}": {"disabled": true}`;
        } else {
          disableDateCSV = `${disableDateCSV},"${holidayDBData[i].value}": {"disabled": true}`;
        }
      }
    }
    disableDateCSV = `{${disableDateCSV}}`;
    const jsonObjDate = JSON.parse(disableDateCSV);
    setDisableDate(jsonObjDate);
  };

  const makeDate = dateObj => {
    setDateTxt(`${dateObj.day} ${monthNames[dateObj.month - 1]} ${dateObj.year}`);
    if (updateDate) {
      updateDate(dateObj.dateString);
    }
    checkIsEmpty(`${dateObj.day} ${monthNames[dateObj.month - 1]} ${dateObj.year}`);
  };
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <CardView style={styles.cardContainer}>
        <View style={styles.topStyle}>
          <TouchableOpacity onPress={() => onSetShow(show)}>
            <View style={[styles.inputContainer]}>
              <Text style={[styles.textInputStyle, { ...placeholderStyle }]}>
                {dateText === '' ? placeholder : dateText}
              </Text>

              <CustomIcon style={[styles.customIconStyle, { color: Colors.MAROON }]} name={fontName} size={24} />
            </View>
          </TouchableOpacity>
          <If condition={show}>
            <Modal isVisible>
              <TouchableOpacity style={styles.touchableContainer} onPress={() => setShow(false)}>
                <Calendar
                  markingType="period"
                  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                  minDate={minimumDate}
                  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                  maxDate={maximumDate}
                  markedDates={disableDate}
                  theme={{
                    textMonthFontWeight: 'bold',
                    arrowColor: '#830b15', // Month change arrow color
                    textSectionTitleColor: '#9B1E26', // week days
                  }}
                  disableAllTouchEventsForDisabledDays
                  onDayPress={day => {
                    makeDate(day);
                    onSetShow(show);
                  }}
                />
              </TouchableOpacity>
            </Modal>
          </If>
          <If condition={dateText !== ''}>
            <Text
              style={[
                styles.textStyle,
                {
                  ...errorStyle,
                },
              ]}
            >
              {placeholder}
            </Text>
          </If>
          <If condition={dateText === ''}>
            <View style={[styles.horizontalLine, { borderColor: Colors.GREY }]} />
          </If>
        </View>
      </CardView>
    </View>
  );
};

export default JsDatePickerComponent;
