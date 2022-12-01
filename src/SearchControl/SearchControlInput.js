import React, {Component, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import FloatingLabelInput from '../TextInput/FloatingLabelInput';

const SearchControlInput = props => {
  const {
    placeholder,
    testID,
    searchList,
    isRankListAvailable,
    resetRankList,
    value,
    onCrossPress,
    onChangeText,
  } = props;
  const [searchText, setSearchText] = useState(value ? value : '');
  const [filteredList, setFilteredList] = useState([]);
  const [isCompanySelectedFromList, setIsCompanySelectedFromList] =
    useState(true);
  const [hideSearchResult, sethideSearchResult] = useState(false);

  useEffect(() => {
    setSearchText(value);
  }, [value]);

  const changeTextDebounced = text => {
    setSearchText(text);
    if (text == '') {
      sethideSearchResult(false);
    }
  };

  const filterListHandler = text => {
    if (text) {
      let data = searchList?.filter(item =>
        item?.displayText.toUpperCase().includes(text.toUpperCase()),
      );
      setFilteredList(data);
      if (data && data.length > 0) {
        sethideSearchResult(true);
      } else {
        sethideSearchResult(false);
      }
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSearchText(item.displayText);
          setIsCompanySelectedFromList(true);
          //clickHandler(item)
          sethideSearchResult(false);
        }}>
        <View style={{margin: 12}}>
          <Text>{item.displayText}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FloatingLabelInput
        testID={'testId'}
        label={placeholder}
        onChangeText={text => {
          if (isRankListAvailable) {
            resetRankList();
          }
          onChangeText ? onChangeText(text) : null;
          setIsCompanySelectedFromList(false);
          filterListHandler(text);
          changeTextDebounced(text);
        }}
        value={searchText}
      />
      <View>
        {hideSearchResult && filteredList && filteredList.length > 0 ? (
          <View
            style={[
              {
                marginHorizontal: 6,
                elevation: 10,
                backgroundColor: 'white',
                height: filteredList.length > 5 ? 200 : null,
              },
            ]}>
            <FlatList
              data={filteredList}
              renderItem={renderItem}
              scrollEnabled={true}
              nestedScrollEnabled={true}
              disableScrollViewPanResponder={true}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default SearchControlInput;
