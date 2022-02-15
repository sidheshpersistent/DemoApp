import React from 'react';
import { View as MockView } from 'react-native';
import { Appearance } from 'react-native-appearance';
import { render, fireEvent } from 'test/test-utils';
import ThemesOptions from './ThemesOptions';

jest.mock('react-native-appearance', () => ({
  Appearance: {
    getColorScheme: jest.fn().mockReturnValue('light'),
    addChangeListener: jest.fn().mockReturnValue({ remove: jest.fn() }),
  },
  AppearanceProvider: ({ children }) => <MockView>{children}</MockView>,
}));

jest.mock('@idfc/ccl-mobile', () => {
  const RealModule = jest.requireActual('test/ccl-mobile.mock');
  const RenderOnlyProps = props => <MockView {...props} />;
  return {
    ...RealModule,
    RadioButton: RenderOnlyProps,
    Text: RenderOnlyProps,
  };
});

const mockThemeChange = jest.fn();
const props = { selectedThemeOption: 'LIGHT', onThemeChange: mockThemeChange };

describe('ThemeSettings screen', () => {
  it('should render component', () => {
    const tree = render(<ThemesOptions {...props} />);

    expect(tree).toMatchSnapshot();
  });

  it('should check light theme radio button by default', () => {
    const container = render(<ThemesOptions />);
    const { getByTestId } = container;

    expect(getByTestId('0-LIGHT').props.checked).toStrictEqual(true);
  });

  it('should check dark theme radio button when selectedThemeOption prop is dark', () => {
    const container = render(<ThemesOptions {...props} selectedThemeOption="DARK" />);
    const { getByTestId } = container;

    expect(getByTestId('1-DARK').props.checked).toStrictEqual(true);
    expect(getByTestId('0-LIGHT').props.checked).toStrictEqual(false);
    expect(getByTestId('2-SYSTEM').props.checked).toStrictEqual(false);
  });

  it('should call on onThemeChange callback when theme radio button clicked', () => {
    const container = render(<ThemesOptions {...props} />);
    const { getByTestId } = container;

    fireEvent(getByTestId('1-DARK'), 'onChange');

    expect(mockThemeChange).toHaveBeenCalledTimes(1);
    expect(mockThemeChange).toHaveBeenCalledWith('DARK');

    fireEvent(getByTestId('2-SYSTEM'), 'onChange');

    expect(mockThemeChange).toHaveBeenCalledWith('SYSTEM');
  });

  it('should not render system theme option if appearance value is no-preference', () => {
    jest.spyOn(Appearance, 'getColorScheme').mockReturnValue('no-preference');

    const container = render(<ThemesOptions {...props} />);
    const { queryByTestId } = container;

    expect(queryByTestId('2-SYSTEM')).toBeNull();
    expect(container).toMatchSnapshot();
  });
});
