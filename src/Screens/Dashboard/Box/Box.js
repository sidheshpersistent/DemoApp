import React from 'react';
import PropTypes from 'prop-types';
import {BoxPadding, BoxSelect, BoxWrapper} from './Box.style';

const Box = ({children, paddingVertical, paddingHorizontal, marginVertical, marginHorizontal, noPadding, onPress, disabled, accessibilityLabel, testID, ...restProps}) => (
  <Choose>
    <When condition={Boolean(onPress)}>
      <BoxWrapper accessibilityLabel={accessibilityLabel} testID={testID} onPress={onPress} disabled={disabled} marginVertical={marginVertical} marginHorizontal={marginHorizontal} {...restProps}>
        <BoxSelect onPress={onPress} disabled={disabled}>
          <BoxPadding paddingHorizontal={paddingHorizontal} paddingVertical={paddingVertical} noPadding={noPadding}>
            {children}
          </BoxPadding>
        </BoxSelect>
      </BoxWrapper>
    </When>
    <Otherwise>
      <BoxWrapper accessibilityLabel={accessibilityLabel} testID={testID} disabled={disabled} marginVertical={marginVertical} marginHorizontal={marginHorizontal} {...restProps}>
        <BoxPadding paddingHorizontal={paddingHorizontal} paddingVertical={paddingVertical} noPadding={noPadding}>
          {children}
        </BoxPadding>
      </BoxWrapper>
    </Otherwise>
  </Choose>
);

Box.propTypes = {
  children: PropTypes.node,
  paddingHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  noPadding: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  testID: PropTypes.string,
};

Box.defaultProps = {
  children: null,
  onPress: null,
  paddingHorizontal: undefined,
  paddingVertical: undefined,
  marginVertical: undefined,
  marginHorizontal: undefined,
  noPadding: false,
  disabled: false,
  accessibilityLabel: undefined,
  testID: undefined,
};

/** @component */
export default Box;
