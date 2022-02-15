import React from 'react';
import { View } from 'react-native';
import Svg, { LinearGradient, Defs, Rect, Stop } from 'react-native-svg';

const CustomLinearGradient = props => {
  const {
    startColor,
    endColor,
    rectWidth,
    rectHeight,
    children,
    x,
    y,
    rx,
    ry,
    custStyle = {},
    contentStyle = {},
  } = props;

  return (
    <View style={custStyle}>
      <Svg height={rectHeight} width={rectWidth}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={startColor} stopOpacity="1" />
            <Stop offset="1" stopColor={endColor} stopOpacity="1" />
          </LinearGradient>
        </Defs>

        <Rect x={x} y={y} rx={rx} ry={ry} width={rectWidth} height={rectHeight} fill="url(#grad)" />
      </Svg>

      <View style={[contentStyle, { width: rectWidth, height: rectHeight }]}>{children}</View>
    </View>
  );
};

export default CustomLinearGradient;
