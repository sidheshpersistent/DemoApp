import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import EAuth from './EAuth';
import useSession from '../../App/useSession';

jest.mock('../../App/useSession', () => {
  const originalModule = jest.requireActual('../../App/useSession');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked session'),
    session: 'mocked session',
  };
});
jest.mock('react-native-app-auth', () => ({
  authorize: () => jest.fn(),
}));
beforeEach(() => {
  useSession.mockReturnValue({
    session: {},
    setSession: () => jest.fn(),
  });
});

test('Should match snapshot', async () => {
  const {toJSON} = await waitFor(() => render(<EAuth />));
  expect(toJSON()).toMatchSnapshot();
});
