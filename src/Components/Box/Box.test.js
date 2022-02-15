import React from 'react';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import Box from './Box';
import {render} from '../../../test/test-utils';
import {dark} from '../../themes';

const BoxProps = {
  children: <Text>Sample Text</Text>,
  onPress: null,
  paddingHorizontal: 20,
  paddingVertical: 20,
  disabled: false,
};
const BoxPaddingProps = {
  children: <Text>Sample Text</Text>,
  onPress: null,
  disabled: false,
};

describe('<Box />', () => {
  it('Should render Clickable Box component', () => {
    const mockFn = jest.fn();
    expect(
      render(
        <Box
          {...BoxProps}
          onPress={() => {
            mockFn();
          }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('Should render Clickable Box component with testID and accessibilityLabel', () => {
    const mockFn = jest.fn();
    expect(
      render(
        <Box
          {...BoxProps}
          testID="box-wrapper"
          accessibilityLabel="box-wrapper"
          onPress={() => {
            mockFn();
          }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('Should render non-Clickable Box component', () => {
    expect(render(<Box {...BoxProps} testID="box-wrapper" accessibilityLabel="box-wrapper" />)).toMatchSnapshot();
  });

  it('Should render non-Clickable Box component in dark theme', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Box {...BoxProps} testID="box-wrapper" accessibilityLabel="box-wrapper" />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('Should render default padding Box component', () => {
    expect(render(<Box {...BoxPaddingProps} />)).toMatchSnapshot();
  });

  it('Should not have padding', () => {
    expect(render(<Box {...BoxPaddingProps} noPadding />)).toMatchSnapshot();
  });
});
