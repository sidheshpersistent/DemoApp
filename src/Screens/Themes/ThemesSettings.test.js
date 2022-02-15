import React from 'react';
import { render, fireEvent } from 'test/test-utils';
import ThemesSettings from './ThemesSettings';

const mockGoBack = jest.fn();

const mockedSetSelectedThemeName = jest.fn();

jest.mock('@optimus/themes/useThemes', () => () => ({
  setSelectedThemeName: mockedSetSelectedThemeName,
  selectedThemeName: 'LIGHT',
}));

jest.mock('react-native-appearance', () => {
  const ReactNative = jest.requireActual('react-native');
  return {
    Appearance: {
      getColorScheme: jest.fn().mockReturnValue('light'),
      addChangeListener: jest.fn().mockReturnValue({ remove: jest.fn() }),
    },
    AppearanceProvider: ({ children }) => <ReactNative.View>{children}</ReactNative.View>,
  };
});

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: () => mockGoBack(),
  }),
}));

jest.mock('@idfc/ccl-mobile', () => {
  const RealModule = jest.requireActual('test/ccl-mobile.mock');
  const ReactNative = jest.requireActual('react-native');
  const RenderOnlyProps = props => <ReactNative.View {...props} />;
  return {
    ...RealModule,
    RadioButton: RenderOnlyProps,
    Text: RenderOnlyProps,
    Button: RenderOnlyProps,
  };
});

jest.mock('@optimus/core-feature-toggle');

describe('ThemeSettings screen', () => {
  it('should render component', () => {
    const tree = render(<ThemesSettings />);
    expect(tree).toMatchSnapshot();
  });

  it('should apply dark theme when dark mode radio button is clicked and save button is pressed', () => {
    const container = render(<ThemesSettings />);
    const { getByTestId } = container;
    fireEvent(getByTestId('1-DARK'), 'onChange');
    fireEvent(getByTestId('themeChange'), 'onPress');

    expect(mockedSetSelectedThemeName).toHaveBeenCalledTimes(1);
    expect(mockedSetSelectedThemeName).toHaveBeenCalledWith('DARK');

    fireEvent(getByTestId('2-SYSTEM'), 'onChange');
    fireEvent(getByTestId('themeChange'), 'onPress');

    expect(mockedSetSelectedThemeName).toHaveBeenCalledWith('SYSTEM');
  });
});
