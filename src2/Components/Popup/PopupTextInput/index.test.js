import 'react-native';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import PopupTextInput from '.';
import { TestIds } from '../../../Utils/Constants';
import { TextInput as MockTextInput, View as MockView, Text as MockText } from 'react-native';
import { POPUP_INFO } from '../../../Screens/CustomerIdentificationDetails/constants';

afterEach(() => {
  jest.clearAllMocks();
})

// mock CCL component library
jest.mock('@idfc/ccl-mobile/lib/module/v2', () => {
  const RenderPropsWithChildren = props => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  const RenderOnlyPropsTextInput = props => <MockTextInput {...props} />;
  const RenderPropsText = props => <MockText {...props} />
  return {
    TextInput: RenderOnlyPropsTextInput,
    StyledText: RenderPropsText,
    Button: RenderPropsWithChildren
  };
});

jest.mock('@idfc/ccl-mobile', () => {
  const RenderOnlyProps = props => <MockView {...props} />;
  return {
    IconButton: RenderOnlyProps,
  };
});

describe('PopupTextInput Test Module', () => {
  test('Should render elements', () => {
    const { getByTestId } = render(<PopupTextInput popupType={"mobile"}/>);
    expect(getByTestId(TestIds.pti_popup_info_text)).toBeDefined();
    expect(getByTestId(TestIds.pti_popup_text_input)).toBeDefined();
});

  test('Popup screen texts rendering correctly', () => {
    const { getAllByText } = render(<PopupTextInput popupInfo={POPUP_INFO.PAN_CHECK_INFO} popupType={"pan"}/>);
    expect(getAllByText(POPUP_INFO.PAN_CHECK_INFO)).toHaveLength(1);
  });

  test('Should match snapshot', async () => {
    const { toJSON } = await waitFor(() => render(<PopupTextInput />));
    expect(toJSON()).toMatchSnapshot();
  });
  test('Should fire the function passed as prop when onpress', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<PopupTextInput testID_submit={TestIds.pti_popup_submit} buttonPress={navigate}  />);
    fireEvent.press(getByTestId(TestIds.pti_popup_submit));
  });

  test('Popup screen texts rendering correctly',async () => {
    const props={
      popupType:"pan",
      onchangeText:jest.fn()
    }
    const { getByTestId } = render(<PopupTextInput {...props} popupInfo={POPUP_INFO.PAN_CHECK_INFO} popupType={"pan"}/>);
    const id1=getByTestId(TestIds.pti_popup_text_input)
    id1.props.textInputProps.onChangeText("DXHP")
  });
});