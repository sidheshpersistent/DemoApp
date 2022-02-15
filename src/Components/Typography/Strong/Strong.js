import React from 'react';
import PropTypes from 'prop-types';

import WrapperText from './Strong.style';

const Strong = ({children, testID}) => <WrapperText testID={testID}>{children}</WrapperText>;

Strong.propTypes = {
  children: PropTypes.node.isRequired,
  testID: PropTypes.string,
};

Strong.defaultProps = {
  testID: undefined,
};
/** @component */
export default Strong;
