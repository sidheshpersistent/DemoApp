import React from 'react';
import { ImageBackground } from 'react-native';
import BGImage from '../../Assets/Images/bg1.png';
const BackgroundImage = props => {
  const { style, imageSource, imageStyle } = props;


  
  return (
    <ImageBackground
      imageStyle={imageStyle}
      style={[{ flex: 1 }, style]} source={imageSource || BGImage}>
      {props.children}
    </ImageBackground>
  );
};

export default BackgroundImage;
