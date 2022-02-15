import React from 'react';
import { Colors } from 'styles';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import CustomIcon from 'components/ntb_sa/common/CustomIcon';
import { IconButton, Container } from './ArrowWrapper.style';

const styles = StyleSheet.create({
  activeIcon: {
    color: Colors.WHITE,
    opacity: 1,
  },
  inActiveIcon: {
    color: Colors.MAROON,
    opacity: 0.4,
  },
});

const ArrowWrapper = props => {
  const { isActive, handleNext, arrowIcon, aadharConsent } = props;

  return (
    <Container aadharConsent={aadharConsent}>
      <IconButton onPress={handleNext} isActive={isActive}>
        <CustomIcon style={isActive ? styles.activeIcon : styles.inActiveIcon} name={arrowIcon} size={40} />
      </IconButton>
    </Container>
  );
};

ArrowWrapper.propTypes = {
  isActive: PropTypes.bool,
  handleNext: PropTypes.func,
  arrowIcon: PropTypes.string,
};

ArrowWrapper.defaultProps = {
  isActive: false,
  handleNext: undefined,
  arrowIcon: '',
};

export default ArrowWrapper;
