import MORE_ROUTES from 'constants/routes/more';
import Labels from 'translations/settingsScreen/labels';

const ACTION_TYPE = {
  BUTTON: 'BUTTON',
  TOGGLE: 'TOGGLE',
};

const THEME_NAMES = { LIGHT: 'LIGHT', DARK: 'DARK', SYSTEM: 'SYSTEM' };

const THEME_KEY = 'Theme';

const INITIAL_THEME_STATE = {
  [THEME_KEY]: '',
};

const THEME_SETTINGS = {
  id: 2,
  subHeader: Labels.DISPLAY_MODE,
  stateConstant: THEME_KEY,
  settingActionText: Labels.CHANGE,
  settingActionType: ACTION_TYPE.BUTTON,
  actionTestId: 'change-theme',
  onClickAction: props => props.navigation.navigate(MORE_ROUTES.THEMES_SETTINGS),
};

const INTER_FONT_FAMILY = {
  REGULAR: 'Inter-Regular',
  BOLD: 'Inter-Bold',
  LIGHT: 'Inter-Light',
  SEMIBOLD: 'Inter-SemiBold',
};

export { THEME_NAMES, THEME_KEY, INITIAL_THEME_STATE, THEME_SETTINGS, INTER_FONT_FAMILY };
