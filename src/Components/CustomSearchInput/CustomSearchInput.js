import React, { useState } from 'react';
import { View, Keyboard, ScrollView } from 'react-native';
import { SearchResult, IconButton } from '@idfc/ccl-mobile';
import { Colors, Icon_Size } from '../../Utils';
import { CustomTextInput } from '../../Components';
//not used
const CustomSearchInput = props => {
    const {
        data,
        placeholder,
        testID,
        setSearchValue,
        defaultValue
    } = props;
    console.log('defaultValue ', defaultValue);
    const [filterResult, setfilterResult] = useState(data);
    const [searchText, setSearchText] = useState(defaultValue !== '' ? defaultValue : '');
    const [hideSearchResult, sethideSearchResult] = useState(false);

    const clickHandler = (country) => {
        setSearchValue(country);
        setSearchText(country.displayText);
        console.log('searchtext ', country);
        Keyboard.dismiss();
        sethideSearchResult(false);
    };
    const filterHandler = (searchText) => {
        console.log("text search intput ", searchText);
        setSearchText(searchText);
        let searchData = [];
        if (searchText && searchText != "") {
            searchData = data.filter((country) => country.displayText.toLowerCase().includes(searchText.toLowerCase()));
        }
        console.log("searchData", searchData)
        if (searchData && searchData.length > 0) {
            sethideSearchResult(true)
        }
        else {
            sethideSearchResult(false)
        }
        setfilterResult(searchData);
    };
    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <CustomTextInput
                testID={testID}
                label={placeholder}
                labelStyle={{
                    color: Colors.NEW_GREY_800.text,
                }}
                inputBorderProps={{
                    style: {
                        borderBottomColor: Colors.NEW_GREY_800.text
                    },
                }}
                onChangeText={text => {
                    filterHandler(text);
                }}
                onBlur={() => sethideSearchResult(false)}
                value={searchText}
                textInputProps={{
                    style: {
                        color: Colors.NEW_GREY_800.text
                    },
                    // onChangeText: text => {
                    //     filterHandler(text);
                    // },
                    // value:searchText
                }}
                suffix={
                    <IconButton
                        primaryColor={Colors.MAROON_DARK}
                        iconColor={Colors.MAROON_DARK}
                        iconType={"Search"}
                        buttonSize={22}
                        transparent
                        iconSrize={Icon_Size.NORMAL}
                    // onPress={() => {
                    //     setToggleMask(!toggleMask);
                    // }}
                    />
                }
            >
            </CustomTextInput>

            {hideSearchResult ?
                <View style={{ paddingHorizontal: 10, backgroundColor: "white", elevation: 2, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                    <SearchResult>
                        {filterResult.map((country) => (
                            <SearchResult.Item key={country.id} onClick={() => clickHandler(country)}>
                                <SearchResult.Text>{country.displayText}</SearchResult.Text>
                            </SearchResult.Item>
                        ))}
                    </SearchResult>
                </View>
                : null}
        </ScrollView>
    );
};
export default CustomSearchInput;
