import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Slider from 'react-native-slider';
import { Colors, Typography } from 'styles';
import CardView from '../../common/CardView';

const { width } = Dimensions.get('window');
const oneButtonSlideWidth = width * 0.9;
const styles = StyleSheet.create({
  seekbarlable: {
    opacity: 0.8,
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderColor: Colors.DARK,
    justifyContent: 'center',
  },
  seekbarlable2: {
    opacity: 0.8,
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderColor: Colors.DARK,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 2,
    paddingEnd: 2,
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardStyle: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignSelf: 'center',
    width: oneButtonSlideWidth,
    zIndex: 20,
  },
  mainConatiner: { marginVertical: 10 },
});

const CustomSlider = props => {
  const { currentValue, onSliderValueChange, minValue, maxValue } = props;
  return (
    <View style={styles.mainConatiner}>
      <CardView style={styles.cardStyle}>
        <Slider
          value={currentValue}
          onValueChange={value => onSliderValueChange(value)}
          minimumValue={minValue}
          maximumValue={maxValue}
          step={1000}
          minimumTrackTintColor="#9b1e26"
          maximumTrackTintColor="#9b1e26"
          thumbTintColor="#9b1e26"
          // thumbTouchSize= {'width: 40, height: 40'}
          debugTouchArea={false}
          animationType="timing"
        />
        <View style={styles.bottomContainer}>
          <View style={styles.seekbarlable}>
            <Text>{`₹${minValue}`}</Text>
          </View>
          <View style={styles.seekbarlable2}>
            <Text>{`₹${maxValue}`}</Text>
          </View>
        </View>
      </CardView>
    </View>
  );
};

CustomSlider.propTypes = {
  currentValue: PropTypes.number,
  onSliderValueChange: PropTypes.func.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

CustomSlider.defaultProps = {
  currentValue: undefined,
};

export default CustomSlider;
