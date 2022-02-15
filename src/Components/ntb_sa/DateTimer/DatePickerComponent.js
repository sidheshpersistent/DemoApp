import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Colors, Typography } from 'styles';
import { iconConstants } from 'constants/ntb_sa';
import CardView from '../common/CardView';
import CustomIcon from '../common/CustomIcon';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 10,
    marginTop: -10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 8,
  },
  cardContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
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
  topContainer: { paddingTop: 0 },
});

const DatePickerComponent = props => {
  const {
    containerStyle,
    placeholder,
    updateDate,
    mode = 'date',
    fontName = iconConstants.IC_DATE,
    errorColor = Colors.DARK,
    minimumDate = null,
    maximumDate = new Date(),
    checkIsEmpty,
    defaultDate = '',
  } = props;

  const [date, setDate] = useState(new Date());
  const [dateText, setDateTxt] = useState(defaultDate);
  const [show, setShow] = useState(false);

  const placeholderStyle = { opacity: dateText === '' ? 0.4 : 1, color: show ? Colors.MAROON : Colors.DARK };
  const errorStyle = { color: errorColor, opacity: errorColor === Colors.ACCENT_2 ? 1 : 0.4 };

  const onSetShow = showValue => {
    setShow(!showValue);
  };

  const onChange = selectedDate => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (mode === 'time') {
      checkIsEmpty(moment(currentDate).format('hh:mm A'));
      setDateTxt(moment(currentDate).format('hh:mm A'));
    } else {
      setDateTxt(moment(currentDate).format('D MMMM YYYY'));
      if (updateDate) {
        updateDate(selectedDate);
      }
      checkIsEmpty(moment(currentDate).format('D MMMM YYYY'));
    }
    setShow(false);
  };
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <CardView style={styles.cardContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => onSetShow(show)}>
            <View style={[styles.inputContainer]}>
              <Text style={[styles.textInputStyle, { ...placeholderStyle }]}>
                {dateText === '' ? placeholder : dateText}
              </Text>

              <CustomIcon style={[styles.customIconStyle, { color: Colors.MAROON }]} name={fontName} size={24} />
            </View>
          </TouchableOpacity>
          <If condition={show}>
            <DateTimePickerModal
              isVisible={show}
              value={date}
              mode={mode}
              date={date}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              locale="en_IN"
              onConfirm={onChange}
              onCancel={() => {
                setShow(false);
              }}
            />
          </If>
          <If condition={dateText !== ''}>
            <Text style={[styles.textStyle, { ...errorStyle }]}>{placeholder}</Text>
          </If>
          <If condition={dateText === ''}>
            <View style={[styles.horizontalLine, { borderColor: Colors.GREY }]} />
          </If>
        </View>
      </CardView>
    </View>
  );
};

export default DatePickerComponent;
