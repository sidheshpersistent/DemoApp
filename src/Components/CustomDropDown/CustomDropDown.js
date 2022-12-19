
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { chevronDown } from '../../Assets/Images';
import { Colors, FontFamily } from '../../Utils';



const CustomDropDown = props => {
    const { testID, options, label, onChange, style } = props;

    return (
        <>
            <SelectDropdown
                testID={testID}
                data={options}
                defaultButtonText={label}
                onSelect={(e) => onChange(e)}
                dropdownIconPosition={"right"}
                buttonStyle={{ width: '100%', backgroundColor: 'white', height: 70 }}
                buttonTextStyle={{
                    fontSize: 14,
                    fontFamily: FontFamily.Inter_SemiBold,
                    lineHeight: 14,
                    color: Colors.GRAY,
                }}
                rowTextStyle={{
                    fontSize: 14,
                    fontFamily: FontFamily.Inter_SemiBold,
                    lineHeight: 14,
                    color: Colors.GRAY,
                    letterSpacing: -0.5,
                    marginTop: 6,
                }}
                renderDropdownIcon={() => {
                    return <Image
                        source={chevronDown}
                        style={{
                            padding: 10,
                            margin: 5,
                            height: 25,
                            width: 25,
                            resizeMode: 'stretch',
                        }}
                    />
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.displayText
                }}
                rowTextForSelection={(item, index) => {
                    return item.displayText
                }}
            />
        </>
    );
};

export default CustomDropDown;
