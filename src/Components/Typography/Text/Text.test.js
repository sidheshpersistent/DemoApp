import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {FontColor} from '@idfc/ccl-commons/enums';

import {dark} from '../../../themes';
import {render, withConsoleErrorSpy} from '../../../../test/test-utils';

import Text from './index';

describe('text Component', () => {
  it('matches snapshot', () => {
    expect(render(<Text />)).toMatchSnapshot();
  });

  it('matches snapshot for dark mode', () => {
    expect(
      render(
        <ThemeProvider theme={dark}>
          <Text color={FontColor.GREY_400} />
        </ThemeProvider>,
      ),
    ).toMatchSnapshot();
  });

  it('when wrong color value passed in props, use default color', () => {
    withConsoleErrorSpy(1)(() => {
      const tree = render(<Text color="abcd" />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('color', '#54565b');
    });
  });

  it('matches snapshot with fontSize prop', () => {
    expect(render(<Text fontSize={12} />)).toMatchSnapshot();
  });

  it('matches snapshot with `bold` prop', () => {
    expect(render(<Text bold />)).toMatchSnapshot();
  });

  it('matches snapshot with as prop', () => {
    expect(render(<Text as="h1" />)).toMatchSnapshot();
  });

  it('matches snapshot with as prop and fontSize and lineHeight', () => {
    expect(render(<Text as="h1" fontSize={20} lineHeight={20} />)).toMatchSnapshot();
  });

  it('matches snapshot with as prop and margin and padding', () => {
    expect(render(<Text as="h1" marginTop={20} paddingLeft={10} lineHeight={24} />)).toMatchSnapshot();
  });

  it('matches snapshot with as prop and paddingVertical and marginHorizontal', () => {
    expect(render(<Text as="h1" marginHorizontal={20} paddingVertical={10} lineHeight={24} />)).toMatchSnapshot();
  });

  it('matches snapshot with all props', () => {
    expect(render(<Text as="h1" color="green" fontSize={24} align="right" lineHeight={24} />)).toMatchSnapshot();
  });
});
