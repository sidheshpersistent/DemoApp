import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';

const BackgroundImage = props => {
  const {style,imageSource} =props
  return (
    <ImageBackground style={[{flex: 1},style]} source={imageSource||require("../../assets/bg1.png")}>
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundImage;
