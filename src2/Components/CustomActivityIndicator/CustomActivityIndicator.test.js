import CustomActivityIndicator from './CustomActivityIndicator';
import React from 'react';
import {render} from '@testing-library/react-native';

test('Should match snapshot', () => {
  const {toJSON} = render(<CustomActivityIndicator />);
  expect(toJSON()).toMatchSnapshot();
});
