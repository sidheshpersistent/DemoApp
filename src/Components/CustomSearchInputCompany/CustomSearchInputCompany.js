import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { IconButton } from '@idfc/ccl-mobile';
import { Colors, Icon_Size } from '../../Utils';
import { CustomTextInput } from '../../Components';
import { debounce } from "lodash";
import { flatlistView } from './styled';

{/* needs to set zIndex = 1 for the parent view of CustomSearchInputCompany */ }

const CustomSearchInputCompany = props => {
    const {
        placeholder,
        testID,
        getSerachResult,
        searchList,
        hideSearchResult,
        sethideSearchResult,
        clickHandler,
        isCompanySelectedFromList,
        setIsCompanySelectedFromList,
        isRankListAvailable,
        resetRankList,
        value,
        onCrossPress,
    } = props;
    const [searchText, setSearchText] = useState(value ? value : "");

    useEffect(() => {
        setSearchText(value);
    }, [value]);
    const changeTextDebounced = (text) => {
        setSearchText(text);
        if(text==""){
            sethideSearchResult(false);
        }
    }
    const handler = useCallback(debounce(changeTextDebounced, 1000), []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                setSearchText(item.displayText)
                setIsCompanySelectedFromList(true)
                clickHandler(item)
            }}>
                <View style={{ margin: 12 }}>
                    <Text>{item.displayText}</Text>
                </View>
            </TouchableOpacity>

        );
    }
    return (
        <View keyboardShouldPersistTaps='handled' style={{ zIndex: 0 }}>
            <View>
                <CustomTextInput
                    testID={testID}
                    label={placeholder}
                    inputBorderProps={{
                        style: {
                            borderBottomColor: Colors.NEW_GREY_800.text
                        },
                    }}
                    onChangeText={text => {
                        if (isRankListAvailable) {
                            resetRankList()
                        }

                        handler(text)
                        setIsCompanySelectedFromList(false)
                        getSerachResult(text);
                    }}
                    value={searchText}
                    textInputProps={{
                        style: {
                            color:
                                isCompanySelectedFromList && searchText !== ""
                                    ? Colors.GRAY
                                    : Colors.ERROR,
                        },
                        maxLength: 30,
                    }}
                    suffix={
                        <IconButton
                            primaryColor={Colors.MAROON_DARK}
                            iconColor={Colors.MAROON_DARK}
                            iconType={searchText ? "Cross" : "Search"}
                            transparent
                            iconSrize={Icon_Size.NORMAL}
                            onPress={() => {
                                onCrossPress?onCrossPress():null
                                
                                setSearchText("");
                                sethideSearchResult(false);
                                setIsCompanySelectedFromList(false)
                                if (isRankListAvailable) {
                                    resetRankList();
                                }

                            }}
                        />
                    }
                    labelStyle={
                        isCompanySelectedFromList && searchText !== ""
                            ? { color: Colors.GRAY }
                            : searchText? { color: Colors.ERROR } : { color: Colors.GRAY }
                    }

                >
                </CustomTextInput>
            </View>
            {hideSearchResult && searchList && searchList.length > 0 ?
                <View style={[flatlistView, { height: searchList.length > 5 ? 200 : null, }]}>
                    <FlatList
                        data={searchList}
                        renderItem={renderItem}
                        scrollEnabled={true}
                        nestedScrollEnabled={true}
                        disableScrollViewPanResponder={true}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                    />
                </View>

                : null}
        </View>
    );
};
export default CustomSearchInputCompany;
