import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { RadialGradient, Rect, Defs, Stop } from 'react-native-svg';

const GradientRectangle = props => {
  const {
    startColor,
    endColor,
    rectWidth,
    rectHeight,
    children,
    color,
    rx = 8,
    ry = 8,
    cx = '50%',
    cy = '45%',
    style = {},
    containerStyle,
  } = props;

  const styles = StyleSheet.create({
    viewContainer: {
      width: rectWidth,
      height: rectHeight,
      position: 'absolute',
      ...style,
    },
    view: {
      width: rectWidth,
      height: rectHeight,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  });

  return (
    <View>
      <Svg width={rectWidth} height={rectHeight}>
        <Defs>
          <RadialGradient id="grad" cx={cx} cy={cy} rx="170%" ry="120%" gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor={startColor} stopOpacity="1" />
            <Stop offset="1" stopColor={endColor} stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" rx={rx} ry={ry} width={rectWidth} height={rectHeight} fill="url(#grad)" />
      </Svg>
      <View style={[styles.view, containerStyle, { backgroundColor: 'transparent' }]}>{children}</View>
    </View>
  );
};

export default GradientRectangle;
