import styled from 'styled-components/native';
import COLORS from '@idfc/ccl-commons/palette';

import {DEFAULT_FONT_SIZES, HEADING_TAGS} from './Text.constants';

export const TextWrapper = styled.Text`
  color: ${({color, theme}) => (color && COLORS[color] ? theme?.Text?.FontColor[color] : theme?.Text?.FontColor?.grey500)};
  font-size: ${({fontSize, type}) => `${fontSize || DEFAULT_FONT_SIZES[type] || DEFAULT_FONT_SIZES.default}px`};
  font-family: ${({type, bold, theme}) => (bold || HEADING_TAGS.includes(type) ? theme?.FontFamily?.BOLD : theme?.FontFamily?.REGULAR)};

  ${({align}) => align && `text-align: ${align}`};
  ${({lineHeight}) => lineHeight && `line-height:${lineHeight}px`};

  ${({marginTop}) => marginTop && `margin-top:${marginTop}px`};
  ${({marginRight}) => marginRight && `margin-right:${marginRight}px`};
  ${({marginBottom}) => marginBottom && `margin-bottom:${marginBottom}px`};
  ${({marginLeft}) => marginLeft && `margin-left:${marginLeft}px`};
  ${({marginVertical}) => marginVertical && `marginVertical:${marginVertical}px`};
  ${({marginHorizontal}) => marginHorizontal && `marginHorizontal:${marginHorizontal}px`};

  ${({paddingTop}) => paddingTop && `padding-top:${paddingTop}px`};
  ${({paddingRight}) => paddingRight && `padding-right:${paddingRight}px`};
  ${({paddingBottom}) => paddingBottom && `padding-bottom:${paddingBottom}px`};
  ${({paddingLeft}) => paddingLeft && `padding-left:${paddingLeft}px`};
  ${({paddingVertical}) => paddingVertical && `paddingVertical:${paddingVertical}px`};
  ${({paddingHorizontal}) => paddingHorizontal && `paddingHorizontal:${paddingHorizontal}px`};
`;

export default TextWrapper;
