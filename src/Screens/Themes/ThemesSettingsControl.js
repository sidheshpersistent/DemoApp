import React from 'react';
import useThemes from '@optimus/themes/useThemes';
import Labels from 'translations/settingsScreen/labels';
import { ButtonActionRow } from 'screens/settingsScreen/ButtonActionRow';
import { INITIAL_THEME_STATE, THEME_SETTINGS, THEME_KEY } from './ThemesConstants';

const ThemesSettingsControl = props => {
  const { selectedThemeName } = useThemes();
  const state = {
    ...INITIAL_THEME_STATE,
    [THEME_KEY]: Labels[selectedThemeName],
  };

  return <ButtonActionRow {...props} item={THEME_SETTINGS} state={state} />;
};

export default ThemesSettingsControl;
