import React from 'react';
import {render} from '../../../../test/test-utils';

import Strong from './index';

describe('Strong', () => {
  it('Strong renders correctly', () => {
    expect(render(<Strong testID="boldText">SomeText</Strong>)).toMatchSnapshot();
  });
});
