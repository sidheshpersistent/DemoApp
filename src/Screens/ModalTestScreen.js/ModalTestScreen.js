import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Popup from '../../components/Popup/Popup';
const icon = require('../../assets/info.png');
const ModelTestScreen = props => {
  const [isVisible, setIsvisible] = useState(false);

  const buttonPress = () => {
    console.log('i am pressed');
    setIsvisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <Popup
        animationIn="bounceIn"
        popupIcon={icon}
        isVisible={isVisible}
        Heading="When is it mandatory to enter PAN ?"
        ButtonText="Okay, Got it!"
        buttonPress={() => buttonPress()}
        component={
          <View style={{width:392}}>
            <Text>•  Customer is below 60 years of age and gross annual 
    income is above ₹2.5 lacs</Text>
            </View>
          
        }
      />

      <TouchableOpacity onPress={() => setIsvisible(true)}>
        <Text style={{fontSize: 40}}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModelTestScreen;
