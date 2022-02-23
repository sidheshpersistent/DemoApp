import {render} from '@testing-library/react-native';
import React from 'react';
import AutoCompleteTextInput from './AutoCompleteTextInput';

test('Should match snapshot', () => {
  const {toJSON} = render(<AutoCompleteTextInput />);
  expect(toJSON()).toMatchSnapshot();
});
