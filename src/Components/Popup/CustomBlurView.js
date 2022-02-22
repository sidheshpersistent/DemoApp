import React from 'react';
import {
  
  StyleSheet,
  
} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const CustomBlurView = (props) => {
    return(
        <BlurView
        style={styles.container}
        blurRadius={1}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white">
        {props.children}
      </BlurView>
    )
 
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomBlurView;
