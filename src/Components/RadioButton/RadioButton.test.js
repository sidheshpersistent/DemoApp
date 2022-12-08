import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {dark} from '../../themes';
import RadioButton from './RadioButton';
import {render} from '../../../test/test-utils';

describe('RadioButton', () => {
  it('Basic Snapshot tests for RadioButton', () => {
    const radioButton = render(<RadioButton accessibilityLabel="testRadioButton" testID="testRadioButton" id="1" name="myRadio" />);
    expect(radioButton).toMatchSnapshot();
  });

  it('Basic Snapshot tests for RadioButton in dark mode', () => {
    const radioButton = render(
      <ThemeProvider theme={dark}>
        <RadioButton accessibilityLabel="testRadioButton" testID="testRadioButton" id="1" name="myRadio" />
      </ThemeProvider>,
    );
    expect(radioButton).toMatchSnapshot();
  });

  it('Basic RadioButton with checked & disabled', () => {
    const radioButton = render(
      <ThemeProvider theme={dark}>
        <RadioButton id="1" checked disabled name="myRadio" />
      </ThemeProvider>,
    );
    expect(radioButton).toMatchSnapshot();
  });

  it('Basic RadioButton with checked & disabled in dark mode', () => {
    const radioButton = render(<RadioButton id="1" checked disabled name="myRadio" />);
    expect(radioButton).toMatchSnapshot();
  });

  it('RadioButton with highlight variant', () => {
    const radioButton = render(
      <RadioButton id="1" name="myRadio" variant="highlight" accessibilityLabel="testRadioButton" testID="testRadioButton">
        Highlighted Button
      </RadioButton>,
    );
    expect(radioButton).toMatchSnapshot();
  });

  it('RadioButton with highlight variant with checked', () => {
    const radioButton = render(
      <RadioButton id="1" name="myRadio" checked variant="highlight" accessibilityLabel="testRadioButton" testID="testRadioButton">
        Highlighted Button
      </RadioButton>,
    );
    expect(radioButton).toMatchSnapshot();
  });

  it('RadioButton with highlight variant with checked in dark mode', () => {
    const radioButton = render(
      <ThemeProvider theme={dark}>
        <RadioButton id="1" name="myRadio" checked variant="highlight" accessibilityLabel="testRadioButton" testID="testRadioButton">
          Highlighted Button
        </RadioButton>
      </ThemeProvider>,
    );
    expect(radioButton).toMatchSnapshot();
  });

  it('should select desired radio button when clicked', () => {
    const mockFunction = jest.fn();
    const {getByTestId} = render(
      <RadioButton id="1" name="myRadio" value="radio-1" onPress={mockFunction} testID="radio-test-id">
        Highlighted Button
      </RadioButton>,
    );
    const touchableRadio = getByTestId('radio-test-id');
    fireEvent.press(touchableRadio);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
