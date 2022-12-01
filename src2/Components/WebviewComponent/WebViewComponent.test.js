
import React from 'react';
import { render } from '@testing-library/react-native';
import WebViewComponent from './WebViewComponent';

const props = {
  route: {
    params: {
      url: "https://google.com"
    }
  },
};

jest.mock('react-native-webview', () => {
  const RealComponent = jest.requireActual('react-native-webview');
  return RealComponent;
});

describe('WebViewComponent', () => {
  test('Should match snapshot', () => {
    const { toJSON } = render(<WebViewComponent {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
