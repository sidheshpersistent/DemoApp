import { INTER_FONT_FAMILY } from 'Screens/Themes/ThemesConstants';

export const FONT_FAMILY_LIGHT = INTER_FONT_FAMILY.LIGHT;
export const FONT_FAMILY_REGULAR = INTER_FONT_FAMILY.REGULAR;
export const FONT_FAMILY_SEMIBOLD = INTER_FONT_FAMILY.SEMIBOLD;
export const FONT_FAMILY_BOLD = INTER_FONT_FAMILY.BOLD;

// FONT SIZE
export const H1_LIGHT = 28;
export const H2_REGULAR = 24;
export const H3_BOLD = 20;
export const H4_BOLD = 16;
export const H5_BOLD = 14;
export const SEMIBOLD = 12;
export const BODY_1_REGULAR = 20;
export const BODY_2_REGULAR = 16;
export const BODY_3_REGULAR = 14;
export const BODY_4_REGULAR = 12;
export const LABEL_BOLD = 10;
export const CAPTION_REGULAR = 10;
export const TITLE_BOLD = 18;

export const getTypograpy = type => {
  switch (type) {
    case 'SF-Pro-Display-Bold':
      return FONT_FAMILY_BOLD;
    case 'SF-Pro-Display-Regular':
      return FONT_FAMILY_REGULAR;
    default:
      return FONT_FAMILY_REGULAR;
  }
};
