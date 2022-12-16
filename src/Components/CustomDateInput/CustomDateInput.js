
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';
import CustomTextInput from '../CustomTextInput/CustomTextInput';


const CustomDateInput = props => {
    const { testID, label, dateFormat, minDate, maxDate, selectedDate, onSetDatePress, style } = props;
    const [date, setDate] = useState(new Date());
    const [value, setValue] = useState(moment(new Date()).format(dateFormat));

    const onChange = (event, selectedDate) => {
        const formattedDate = moment(selectedDate).format(dateFormat);
        setValue(formattedDate)
        setDate(selectedDate);
        onSetDatePress(selectedDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
            minimumDate: minDate,
            maximumDate: maxDate
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View>
            <TouchableOpacity onPress={showDatepicker} activeOpacity={1}>
                <CustomTextInput
                    // placeholder={label}
                    label={label}
                    value={value}
                    isError={false}
                    disabled={false}
                    pointerEvents={'none'}
                    testID={testID}
                />
            </TouchableOpacity>
        </View>
    );
};

export default CustomDateInput;
