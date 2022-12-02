
import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rowCardStyles: {
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'transparent',
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
    elevation: 2,
    
  },
});

const Card = props => {
  const {key}={props}
  return (
    <View
    key={key}
    style={{...styles.rowCardStyles, ...props.style}}>
      {props.children}
    </View>
  );
};

export default Card;
