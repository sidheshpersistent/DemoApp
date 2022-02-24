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
        Heading="Popup Heading"
        ButtonText="Ok"
        buttonPress={() => buttonPress()}
        component={
          <View>
            <Text>ayush</Text>
            <Text>ayush</Text>
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
