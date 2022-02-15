import palette from '@idfc/ccl-commons/palette';
import {arrayToObject} from '@idfc/ccl-commons/utils';

export const DISABLED_ICON_COLOR = 'lightGray';
export const TRANSPARENT_DISABLED_ICON_COLOR = 'gray';

export const IconCategory = {
  PRIMARY: 'Primary',
  REGULAR: 'Regular',
};

export const ICON_COLOR_TO_TEXT_COLOR = {
  lightGray: 'grey200',
  gray: 'grey400',
  maroon: 'maroon',
  green: 'green',
  red: 'red',
  yellow: 'yellow',
  white: 'white',
  black: 'black',
  gold: 'gold',
  goldLight: 'goldLight',
  blue: 'blue',
  maroonLight: 'maroonLight',
  maroonDark: 'maroonDark',
  blueLight: 'blueLight',
  newMaroon100: 'newMaroon100',
  newGrey600: 'newGrey600',
  newRed200: 'newRed200',
  newGrey400: 'newGrey400',
  newMaroon400: 'newMaroon400',
  newGreen100: 'newGreen100',
  newRed100: 'NEW_RED_100',
};

export const ICON_COLOR_TO_PALETTE_COLOR = {
  lightGray: palette.grey200,
  gray: palette.grey400,
  maroon: palette.maroon,
  green: palette.green,
  red: palette.red,
  yellow: palette.yellow,
  white: palette.white,
  black: palette.black,
  gold: palette.gold,
  goldLight: palette.goldLight,
  blue: palette.blue,
  maroonLight: palette.maroonLight,
  maroonDark: palette.maroonDark,
  blueLight: palette.blueLight,
  newMaroon100: palette.NEW_MAROON_100,
  newGrey600: palette.NEW_GREY_600,
  newRed200: palette.NEW_RED_200,
  newGrey400: palette.NEW_GREY_400,
  NEW_RED_100: palette.NEW_RED_100,
  NEW_YELLOW_200: palette.NEW_YELLOW_200,
  newMaroon400: palette.NEW_MAROON_400,
  newGreen100: palette.NEW_GREEN_100,
};

export const ICON_VARIANTS = {
  primary: 'primary',
  ...Object.assign({}, ...arrayToObject(Object.keys(ICON_COLOR_TO_PALETTE_COLOR))),
};

export default {IconCategory, ICON_COLOR_TO_TEXT_COLOR, ICON_COLOR_TO_PALETTE_COLOR, ICON_VARIANTS, DISABLED_ICON_COLOR, TRANSPARENT_DISABLED_ICON_COLOR};
