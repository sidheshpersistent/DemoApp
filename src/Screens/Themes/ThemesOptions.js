import React from 'react';
import { Appearance } from 'react-native-appearance';
import PropTypes from 'prop-types';

import { Text } from '@idfc/ccl-mobile';
import LightTheme from '@idfc/ccl-commons/assets/images/light-mode.svg';
import DarkTheme from '@idfc/ccl-commons/assets/images/dark-mode.svg';
import SystemTheme from '@idfc/ccl-commons/assets/images/system-mode.svg';

import Labels from 'translations/settingsScreen/labels';

import { Wrapper, Column, StyledRadioButton } from './ThemesSettings.style';
import { THEME_NAMES } from './ThemesConstants';

const NOOP = () => {};

const ThemesOptions = ({ selectedThemeOption, onThemeChange }) => {
  const isThemeSwitchSupportedByOS = Appearance.getColorScheme() !== 'no-preference';

  const hideSystemMode = !isThemeSwitchSupportedByOS;

  const themesData = [
    {
      id: 0,
      svgComponent: <LightTheme width={79} height={170} />,
      label: Labels.LIGHT,
      value: THEME_NAMES.LIGHT,
    },
    {
      id: 1,
      svgComponent: <DarkTheme width={79} height={170} />,
      label: Labels.DARK,
      value: THEME_NAMES.DARK,
    },
    {
      id: 2,
      svgComponent: <SystemTheme width={79} height={170} />,
      label: Labels.SYSTEM,
      value: THEME_NAMES.SYSTEM,
    },
  ];

  return (
    <Wrapper>
      {themesData.map(theme => {
        const { svgComponent, id, value, label } = theme;
        return label === Labels.SYSTEM && hideSystemMode ? null : (
          <Column key={`${id}-${label}`}>
            {svgComponent}
            <StyledRadioButton
              id={id}
              value={value}
              testID={`${id}-${value}`}
              checked={selectedThemeOption === value}
              onChange={() => onThemeChange(value)}
            />
            <Text align="center" fontSize={16} lineHeight={24}>
              {label}
            </Text>
          </Column>
        );
      })}
    </Wrapper>
  );
};

export default ThemesOptions;

ThemesOptions.propTypes = {
  selectedThemeOption: PropTypes.string,
  onThemeChange: PropTypes.func,
};

ThemesOptions.defaultProps = {
  selectedThemeOption: THEME_NAMES.LIGHT,
  onThemeChange: NOOP,
};
