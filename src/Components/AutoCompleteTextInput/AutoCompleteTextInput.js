import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, Image, Pressable, Text, TextInput, View} from 'react-native';
import {
  Colors,
  ConsoleLogHelper,
  Constants,
  KeyboardConst,
  moderateScale,
} from '../../Utils/index';
import styles from './AutoCompleteTextInputStyles';
import {useOrientation} from '../../Utils/useOrientation';

const AutoCompleteTextInput = props => {
  const {
    invalid,
    value,
    keyboardType,
    returnKeyType,
    multiline,
    maxLength,
    backgroundColor,
    editable,
    placeholder,
    autoCapitalize,
    inputRef,
    testID,
    name,
    onBlur,
    errors,
    errorMessage,
    isSecured = false,
    isRightImage = false,
    rightImage,
    isBorderActive,
    data,
    onSelectListItem,
    isCitySearch,
  } = props;

  const errorMessageStr = errorMessage || (errors && errors?.[name]?.message);
  const isPortraitOrientation = useOrientation();

  return (
    <>
      <View
        style={[
          // styles.container,
          {
            backgroundColor:
              backgroundColor == null ? Colors.White : backgroundColor,
          },
        ]}>
        <TextInput
          testID={testID}
          accessibilityLabel={testID}
          onBlur={onBlur}
          value={
            autoCapitalize === KeyboardConst.Characters
              ? value.toUpperCase()
              : value
          }
          ref={inputRef}
          maxLength={maxLength}
          multiline={multiline}
          keyboardType={keyboardType}
          placeholder={placeholder}
          editable={editable}
          autoCapitalize={autoCapitalize}
          secureTextEntry={isSecured}
          returnKeyType={returnKeyType}
          // onChangeText={text => props.onChangeText(text)}
          style={[
            isPortraitOrientation
              ? [
                  styles.textInputStyle_p,
                  {
                    marginTop:
                      value.length > 0 ? moderateScale(4.5) : moderateScale(10),
                  },
                ]
              : styles.textInputStyle,
            {
              marginBottom: value.length > 0 ? 0 : 14,
              borderBottomWidth: isBorderActive
                ? value.length > 0
                  ? 0
                  : 0.6
                : 0,
              height: value.length ? null : isPortraitOrientation ? 56 : 66,
            },
          ]}
        />
        {isRightImage && (
          <Pressable
            style={styles.imagePasswordview}
            onPress={() => props.onPressRightImage(!props.isSecured)}>
            <Image style={styles.imagePasswordview} source={rightImage} />
          </Pressable>
        )}
        {/* {value.length > 0 && invalid ? (
          <Image
            style={styles.imgWarning}
            source={require('../../../assets/icons_24_search.png')}
          />
        ) : null} */}

        {/* {value.length > 0 && invalid ? (
          <View
            style={
              isPortraitOrientation
                ? styles.placeholderStyle_p
                : styles.placeholderStyle
            }>
            <Text style={styles.textFontRed}>{errorMessageStr}</Text>
          </View>
        ) : (
          <>
            {value.length !== 0 && (
              <View style={styles.placeholderStyle}>
                <Text style={styles.textFont}>{placeholder}</Text>
              </View>
            )}
          </>
        )} */}
      </View>
      {/* {data?.length > 0 && (
        <View style={styles.listStyle}>
          <FlatList
            data={data}
            keyboardShouldPersistTaps="always"
            nestedScrollEnabled={true}
            contentContainerStyle={{flex: 1}}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() => {
                    ConsoleLogHelper.log('ON ITEM PRESS');
                    // onSelectListItem(item);
                  }}>
                  <Text style={styles.listItemText}>
                    {isCitySearch ? item?.cityDesc : item?.name}
                  </Text>
                  <View style={styles.listItemSeperator} />
                </Pressable>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </View>
      )} */}
    </>
  );
};

AutoCompleteTextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  hintText: PropTypes.string,
  autoCapitalize: PropTypes.string,
  errorMessage: PropTypes.string,
  KeyID: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  disabledValue: PropTypes.bool,
  backgroundColor: PropTypes.string,
  editable: PropTypes.bool,
  onBlur: PropTypes.func,
  errors: PropTypes.object,
  isBorderActive: PropTypes.bool,
  onPressRightImage: PropTypes.func,
};

AutoCompleteTextInput.defaultProps = {
  placeholder: '',
  keyboardType: 'default',
  editable: true,
  name: undefined,
  value: '',
  returnKeyType: 'next',
  hintText: undefined,
  autoCapitalize: undefined,
  errorMessage: undefined,
  KeyID: undefined,
  maxLength: Constants.Input_Text_Length,
  multiline: false,
  disabledValue: true,
  onBlur: undefined,
  errors: null,
  isBorderActive: true,
  onPressRightImage: PropTypes.func,
  isCitySearch: true,
};

export default AutoCompleteTextInput;
