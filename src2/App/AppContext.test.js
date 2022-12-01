import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import AppContext from './AppContext';

test('Should match snapshot', async () => {
  const {toJSON} = await waitFor(() => render(<AppContext />));
  expect(toJSON()).toMatchSnapshot();
});
