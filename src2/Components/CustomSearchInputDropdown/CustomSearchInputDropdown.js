import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { IconButton } from '@idfc/ccl-mobile';
import { Colors, Icon_Size } from '../../Utils';
import { CustomTextInput } from '..';
import { debounce } from "lodash";
import { flatlistView } from './styled';
import { isEmptyValue } from '../../Utils/ValidationUtils';

{/* needs to set zIndex = 1 for the parent view of CustomSearchInputCompany */ }

const CustomSearchInputDropdown = props => {
    const {
        placeholder,
        testID,
        searchList,
        clickHandler,
        isRankListAvailable,
        resetRankList,
        value,
        onCrossPress,
        onChangeText
    } = props;
    const [searchText, setSearchText] = useState(value ? value : "");
    const [filteredList,setFilteredList]=useState([])
    const [isCompanySelectedFromList,setIsCompanySelectedFromList]=useState(true)
    const [hideSearchResult,sethideSearchResult]=useState(false)
    useEffect(() => {
        setSearchText(value);
    }, [value]);
    const changeTextDebounced = (text) => {
        setSearchText(text);
        if(text==""){
            sethideSearchResult(false);
        }
    }

    const filteredListHandler =(text)=>{
        if (text && text.length >= 3 && !isEmptyValue(searchList)) {
            let data = searchList?.filter((item) =>item?.displayText.toUpperCase().includes(text.toUpperCase())  
            );
            setFilteredList(data);
            if (data && data.length > 0) {
              sethideSearchResult( true);
              
            } else {
                sethideSearchResult( false);
            }
          }
    }
    const handler = useCallback(debounce(changeTextDebounced, 1000), []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                setSearchText(item.displayText)
                setIsCompanySelectedFromList(true)
                clickHandler(item)
                sethideSearchResult(false)
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
                        onChangeText?onChangeText(text):null
                        handler(text)
                        setIsCompanySelectedFromList(false)
                        filteredListHandler(text)
                        
                        // getSerachResult(text);
                    }}
                    onBlur={()=>sethideSearchResult(false)}
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
            {hideSearchResult && filteredList && filteredList.length > 0 ?
                <View style={[flatlistView, { height: filteredList.length > 5 ? 200 : null, }]}>
                    <FlatList
                        data={filteredList}
                        renderItem={renderItem}
                        scrollEnabled={true}
                        nestedScrollEnabled={true}
                        disableScrollViewPanResponder={true}
                        keyExtractor={item => item.id}
                        
                    />
                </View>

                : null}
        </View>
    );
};
export default CustomSearchInputDropdown;
