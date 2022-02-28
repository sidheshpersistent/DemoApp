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

import { Container } from './UpperBoxContainerStyle';
const UpperBoxContainer=(props)=>{

    return(
        <Container style={props.style} >
            {
                props.children
            }
        </Container>
    )
}

export default UpperBoxContainer