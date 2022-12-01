import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import LoginScreen from './index';
// import useSession from '../../App/useSession';

// jest.mock('../../App/useSession');
// jest.mock('react-native-app-auth', () => ({
//   authorize: () => jest.fn(),
// }));
// beforeEach(() => {
//   useSession.mockReturnValue({
//     session: {},
//     setSession: () => jest.fn(),
//   });
// });

test('Should match snapshot', async () => {
  const {toJSON} = await waitFor(() => render(<LoginScreen />));
  expect(toJSON()).toMatchSnapshot();
});
