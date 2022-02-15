import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {dark} from '../../themes';
import Button from './Button';
import {render} from '../../../test/test-utils';

describe('<Button/>', () => {
  it('should match snapshot', () => {
    expect(render(<Button accessibilityLabel="customButton" testID="customButton" onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button buttonType="secondary" onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button buttonType="secondary" noBorder onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button buttonType="secondary" width="100" onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button buttonType="secondary" width="70%" onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button buttonType="primary" disabled onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button iconName="Send" buttonType="primary" disabled onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button isRounded={false} size="large" onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button isRounded={false} size="large" iconName="Send" buttonType="secondary" onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button isRounded={false} size="large" iconName="Send" buttonType="primary" onPress={() => {}} />)).toMatchSnapshot();
    expect(render(<Button isRounded={false} size="large" iconName="Send" disabled onPress={() => {}} />)).toMatchSnapshot();
  });

  it('should match snapshot for dark mode', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button accessibilityLabel="customButton" testID="customButton" onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot for dark mode button with type secondary', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button buttonType="secondary" onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot for dark mode button with type secondary and noBorder', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button buttonType="secondary" noBorder onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot for dark mode button with type secondary and custom width', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button buttonType="secondary" width="100" onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot for dark mode button with type secondary and custom width in percentage', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button buttonType="secondary" width="70%" onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot for dark mode button with type primary and disabled prop', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button buttonType="primary" disabled onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button iconName="Send" buttonType="primary" disabled onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot for dark mode large prop', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button isRounded={false} size="large" onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot for dark mode large prop with iconName', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button isRounded={false} size="large" iconName="Send" buttonType="secondary" onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot for dark mode large prop with iconName and disabled', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Button isRounded={false} size="large" iconName="Send" disabled onPress={() => {}} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('should call mock OnPress on disabled False', () => {
    const mockOnClickfn = jest.fn();
    const {getByTestId} = render(<Button onPress={mockOnClickfn} testID="customButton" />);
    fireEvent.press(getByTestId('customButton'));
    // eslint-disable-next-line jest/prefer-called-with
    expect(mockOnClickfn).toHaveBeenCalled();
  });
});
