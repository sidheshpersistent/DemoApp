import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';

const BackgroundImage = props => {
  return (
    <ImageBackground style={[{flex: 1},props.style]} source={require('../../assets/bg1.png')}>
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundImage;
