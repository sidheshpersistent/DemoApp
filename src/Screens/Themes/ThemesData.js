import merge from 'lodash.merge';
import { ALL_THEMES } from '@idfc/ccl-mobile/lib/module/themes';
import MOBILE_THEMES from 'themes/index';
import { THEME_NAMES } from './ThemesConstants';

const ALL_LIGHT_THEMES = merge(ALL_THEMES.base, MOBILE_THEMES.base);
const ALL_DARK_THEMES = merge(ALL_THEMES.dark, MOBILE_THEMES.dark);

const THEME_DATA = {
  [THEME_NAMES.LIGHT]: ALL_LIGHT_THEMES,
  [THEME_NAMES.DARK]: ALL_DARK_THEMES,
};

export default THEME_DATA;
