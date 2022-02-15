import React from 'react';
import { render } from 'test/test-utils';
import ThemesSettingsControl from './ThemesSettingsControl';

jest.mock('@optimus/themes/useThemes', () => () => ({ selectedThemeName: 'LIGHT' }));
jest.mock('screens/settingsScreen/ButtonActionRow', () => ({ ButtonActionRow: () => <></> }));

describe('ThemesSettingsControl', () => {
  it('should render ThemesSettingsControl component', () => {
    const component = render(<ThemesSettingsControl />);
    expect(component).toMatchSnapshot();
  });
});
