import OutlineButton from './OutlineButton';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import { TestIds } from '../../../Utils';

test('Should match snapshot', () => {
  const {toJSON} = render(<OutlineButton />);
  expect(toJSON()).toMatchSnapshot();
});

test('OutlineButton press event call', () => {
  const {getByTestId} = render(<OutlineButton  onPress={jest.fn()}/>);
  fireEvent.press(getByTestId(TestIds.OutlineButton));
});