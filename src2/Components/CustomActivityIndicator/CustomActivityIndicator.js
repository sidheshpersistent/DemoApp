import PropTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
// import {Colors} from '../../Utils/index';
import styles from './CustomActivityIndicatorStyles';

const CustomActivityIndicator = props => {
  const {loadingText, indicatorFlag} = props;

  return (
    <Modal visible={indicatorFlag} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.indicatorStyle}>
          <ActivityIndicator size="large" color={"#830b15"} />
          <Text style={styles.indicatorFont}> {loadingText}</Text>
        </View>
      </View>
    </Modal>
  );
};

CustomActivityIndicator.propTypes = {
  loadingText: PropTypes.string,
  indicatorFlag: PropTypes.bool,
};

CustomActivityIndicator.defaultProps = {
  loadingText: 'Please wait...',
  indicatorFlag: false,
};

export default CustomActivityIndicator;
