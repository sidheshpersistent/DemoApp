import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Colors, Typography } from 'styles';
import { Text, TouchableOpacity } from 'react-native';

const LinkWrapper = styled(TouchableOpacity)``;
const LinkText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  font-family: ${Typography.FONT_FAMILY_BOLD};
  color: ${Colors.MAROON};
  opacity: ${props => (props.disabledValue ? 0.4 : 1)};
  text-align: ${props => (props.alignText === undefined ? 'center' : 'left')};
`;

const CustomTextLink = props => {
  const { handleLink, text, alignText, disabledValue } = props;
  return (
    <LinkWrapper disabled={disabledValue} onPress={handleLink}>
      <LinkText disabledValue={disabledValue} alignText={alignText}>
        {text}
      </LinkText>
    </LinkWrapper>
  );
};

CustomTextLink.propTypes = {
  text: PropTypes.string,
  disabledValue: PropTypes.bool,
};

CustomTextLink.defaultProps = {
  text: '',
  disabledValue: false,
};

export default React.memo(CustomTextLink);
