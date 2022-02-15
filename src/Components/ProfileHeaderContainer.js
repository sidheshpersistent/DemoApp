import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { CommonStyle } from 'styles/index';

const styles = StyleSheet.create({
  rightStyle: {
    marginTop: -7,
    marginEnd: 20,
    marginStart: 10,
  },
});

const ProfileHeaderContainer = props => {
  const { leftView, rightView } = props;
  return (
    <View style={ [CommonStyle.headerCardStyle,props.style]}>
      <View>{leftView}</View>
      <View style={styles.rightStyle}>{rightView}</View>
    </View>
  );
};

ProfileHeaderContainer.propTypes = {
  leftView: PropTypes.node.isRequired,
  rightView: PropTypes.node.isRequired,
};

export default ProfileHeaderContainer;
