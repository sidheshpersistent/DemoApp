import React from 'react';
import {StyleSheet, View} from 'react-native';



const ProfileHeaderContainer = props => {
  
  
  const {leftView, rightView} = props;
  return (
    <View style={[styles.headerCardStyle, props.style]}>
      <View>{leftView}</View>
      <View style={styles.rightStyle}>{rightView}</View>
    </View>
  );
};


const styles = StyleSheet.create({
  rightStyle: {
    marginTop: -7,
    marginEnd: 20,
    marginStart: 10,
  },
 headerCardStyle : {
    flexDirection: 'row',
    padding: 20,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "white",
  }
});

export default ProfileHeaderContainer;
