import React from 'react';
import PropTypes from 'prop-types';
import * as COLOR from '@idfc/ccl-commons/palette/colors';

import {FontSize, LineHeight, TextAlign} from '@idfc/ccl-commons/enums';
import {TextWrapper} from './Text.style';
import {HEADING_TAGS} from './Text.constants';

const Text = ({
  as,
  color,
  fontSize,
  children,
  align,
  lineHeight,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginVertical,
  marginHorizontal,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingVertical,
  paddingHorizontal,
  ...restProps
}) => (
  <TextWrapper
    color={color}
    fontSize={fontSize}
    align={align}
    type={as}
    marginTop={marginTop}
    marginRight={marginRight}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginVertical={marginVertical}
    marginHorizontal={marginHorizontal}
    paddingTop={paddingTop}
    paddingRight={paddingRight}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    paddingVertical={paddingVertical}
    paddingHorizontal={paddingHorizontal}
    lineHeight={lineHeight}
    {...restProps}>
    {children}
  </TextWrapper>
);

Text.propTypes = {
  /** Inner element is React component  */
  children: PropTypes.node,
  /** Text rendered with Default sizes  - (h1, h2, h3) */
  as: PropTypes.oneOf(HEADING_TAGS),
  /** Text rendered with given colors(from palette) - (maroon, red, green) etc... */
  color: PropTypes.oneOf(Object.keys(COLOR)),
  /** Text rendered with given font size - (10, 12, 14, 16, 20, 24, 26, 34, 64) */
  fontSize: PropTypes.oneOf(Object.values(FontSize)),
  /** Set the text-align attribute - {left, center, right} */
  align: PropTypes.oneOf(Object.values(TextAlign)),
  /** Set the line-height attribute - (18, 20, 22, 24) */
  lineHeight: PropTypes.oneOf(Object.values(LineHeight)),
  /** Set the margin attribute */
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  /** Set the padding attribute */
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  /** Sets font-size bold */
  bold: PropTypes.bool,
};

Text.defaultProps = {
  children: null,
  color: undefined,
  marginTop: undefined,
  marginRight: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginVertical: undefined,
  marginHorizontal: undefined,
  paddingTop: undefined,
  paddingRight: undefined,
  paddingBottom: undefined,
  paddingLeft: undefined,
  paddingVertical: undefined,
  paddingHorizontal: undefined,
  as: undefined,
  fontSize: undefined,
  align: undefined,
  lineHeight: undefined,
  bold: false,
};

/** @component */
export default Text;
