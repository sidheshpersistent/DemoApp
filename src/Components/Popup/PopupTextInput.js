import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Popup from '../../components/Popup/Popup';

const PopupTextInput = (props) => {
  const {
    isVisible,
    Heading,
    popupInfo,
    ButtonText,
    buttonPress,
    animationIn,
    popupIcon,
    TextInputPlaceholder,

    TextInputvalue,
    onchangeText
  } = props;
  return (
    <Popup
      animationIn={animationIn}
      popupIcon={popupIcon}
      isVisible={isVisible}
      Heading={Heading}
      component={
        <View>
          <View style={{width:416}}><Text>{popupInfo}</Text></View>
          <View style={{width:416,height:92}}>
              <TextInput 
                placeholder={TextInputPlaceholder}
                value={TextInputvalue}
                onChangeText={()=>onchangeText()}
              />
          </View>
        </View>
      }
      ButtonText={ButtonText}
      buttonPress={() => buttonPress()}
    />
  );
};

export default PopupTextInput;
