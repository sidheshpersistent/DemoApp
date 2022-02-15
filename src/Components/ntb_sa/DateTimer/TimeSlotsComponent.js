import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography } from 'styles';
import { iconConstants, deviceConstants } from 'constants/ntb_sa';
import CardView from '../common/CardView';
import CustomIcon from '../common/CustomIcon';
import TimeSlotPicker from './TimeSlotPicker';
import CustomModal from '../Modal/CustomModal';

const styles = StyleSheet.create({
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
  cardStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
  },
  btnTop: {
    paddingTop: 0,
  },
});

const TimeSlotsComponent = props => {
  const {
    containerStyle,
    placeholder,
    timeValue,
    fontName = iconConstants.IC_TIME,
    errorColor = Colors.DARK,
    checkIsEmpty,
    selectedDate,
  } = props;

  const [time, setTimeTxt] = useState('');
  const [show, setShow] = useState(false);

  const onSetShow = showValue => {
    setShow(!showValue);
  };

  const onSelectTime = selectTime => {
    setTimeTxt(selectTime);
    checkIsEmpty(selectTime);
    setShow(false);
  };

  useEffect(() => {
    setTimeTxt(timeValue);
  }, [timeValue]);

  const txtOpacity = {
    opacity: time === '' ? 0.4 : 1,
    color: show ? Colors.MAROON : Colors.DARK,
  };

  const placeholderOpacity = {
    color: errorColor,
    opacity: errorColor === Colors.ACCENT_2 ? 1 : 0.4,
  };

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <CardView style={styles.cardStyle}>
        <View style={styles.btnTop}>
          <TouchableOpacity onPress={() => onSetShow(show)}>
            <View style={[styles.inputContainer]}>
              <Text style={[styles.textInputStyle, { ...txtOpacity }]}>{time === '' ? placeholder : time}</Text>

              <CustomIcon style={[styles.customIconStyle, { color: Colors.MAROON }]} name={fontName} size={24} />
            </View>
          </TouchableOpacity>
          <If condition={show}>
            <CustomModal
              isVisible={show}
              iconModal={iconConstants.IC_CLOSE}
              popText="Select Time"
              popColorText={Colors.DARK}
              ComponentName={<TimeSlotPicker onSelectTime={onSelectTime} selectedDate={selectedDate} />}
              maxHeight={deviceConstants.deviceHeight * 0.5}
              toggleCallback={() => {
                setShow(!show);
              }}
            />
          </If>
          <If condition={time}>
            <Text
              style={[
                styles.textStyle,
                {
                  ...placeholderOpacity,
                },
              ]}
            >
              {placeholder}
            </Text>
          </If>
          <If condition={time === ''}>
            <View style={[styles.horizontalLine, { borderColor: Colors.GREY }]} />
          </If>
        </View>
      </CardView>
    </View>
  );
};

export default TimeSlotsComponent;
