/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'styles';
import MaskedView from '@react-native-community/masked-view';
import CustomIcon from './CustomIcon';

//  props.gradientColor = ['#122c96', 'rgba(247, 198, 80, 0.71)']

const IconWrapper = styled(View)`
  background: ${Colors.TRANSPARENT};
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  maskedViewStyle: { flexDirection: 'row', marginLeft: 3 },
  linearGradientStyle: {
    flex: 1,
  },
  iconStyle: {
    color: 'white',
  },
});

const MaskedIcon = props => {
  const { size, style } = props;
  return (
    <View style={{ ...style, width: size }}>
      <MaskedView
        style={[styles.maskedViewStyle, { height: size }]}
        maskElement={
          <IconWrapper>
            <CustomIcon style={styles.iconStyle} name={props.iconName} size={size} />
          </IconWrapper>
        }
      >
        <LinearGradient colors={props.gradientColor} style={styles.linearGradientStyle} />
      </MaskedView>
    </View>
  );
};

export default MaskedIcon;
