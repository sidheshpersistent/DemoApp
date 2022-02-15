import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { BlurView, VibrancyView } from '@react-native-community/blur';
import { isIOS } from 'utils/ntb_sa';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BlurBackdrop = props => {
  const { children } = props;
  if (isIOS) {
    return (
      <VibrancyView style={styles.container} blurType="dark" blurAmount={1} reducedTransparencyFallbackColor="white">
        {children}
      </VibrancyView>
    );
  }
  return (
    <BlurView
      style={styles.container}
      blurRadius={1}
      blurType="dark"
      blurAmount={50}
      reducedTransparencyFallbackColor="white"
    >
      {children}
    </BlurView>
  );
};

BlurBackdrop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

BlurBackdrop.defaultProps = {
  children: undefined,
};

export default BlurBackdrop;
