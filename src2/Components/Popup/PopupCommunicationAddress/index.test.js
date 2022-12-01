import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { TestIds } from "../../../Utils/Constants";
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
} from "react-native";
import PopupCommunicationAddress from ".";
import { StringsOfLanguages } from "../../../Localization";


   jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());

// const callUseEffect = () => {
//   mockUseEffect();
//   mockUseEffect();
//   mockUseEffect();
// };

jest.mock("@idfc/ccl-mobile/lib/module/v2", () => {
  const RenderPropsWithChildren = (props) => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  const RenderOnlyPropsTextInput = (props) => <MockTextInput {...props} />;
  const RenderPropsText = (props) => <MockText {...props} />;

  return {
    PasswordInput: RenderOnlyPropsTextInput,
    TextInput: RenderOnlyPropsTextInput,
    StyledText: RenderPropsText,
    Button: RenderPropsWithChildren,
  };
});

const props = {
  checkPincode:'751024'
}
const props2 = {
  checkPincode:'45'
}
 describe("New communication address Test Module", () => {
  test('Should match snapshot', async () => {
    const { toJSON } = await waitFor(() => render(<PopupCommunicationAddress checkPincode={"123456"}/>));
    expect(toJSON()).toMatchSnapshot();
  });
  test("Should render elements", () => {
    const { getByTestId } = render(<PopupCommunicationAddress checkPincode={"123456"}/>);
    expect(getByTestId(TestIds.nca_popuInfo)).toBeDefined();
    expect(getByTestId(TestIds.nca_pincode)).toBeDefined();
    expect(getByTestId(TestIds.nca_address1)).toBeDefined();
    expect(getByTestId(TestIds.nca_address2)).toBeDefined();
    expect(getByTestId(TestIds.nca_address3)).toBeDefined();
    expect(getByTestId(TestIds.nca_citytext)).toBeDefined();
  });

  test("New communication address screen texts rendering correctly", () => {
    const { getAllByText, getByTestId } = render(<PopupCommunicationAddress popupInfo={StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_SUB_HEADING} checkPincode={"123456"}/>);
    expect(getAllByText(StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_SUB_HEADING)).toHaveLength(1);
    fireEvent.changeText(getByTestId(TestIds.nca_pincode), "123456");
    fireEvent.changeText(getByTestId(TestIds.nca_address1), "address line 1");
    fireEvent.changeText(getByTestId(TestIds.nca_address2), "address line 2");
  });

  test('Should fire the function passed as prop when onpress', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<PopupCommunicationAddress testID_submit={TestIds.nca_popup_submit} testID_cancel={TestIds.nca_popup_cancel} buttonPress={navigate} cancelButtonPress={navigate} checkPincode={"123456"}/>);
    fireEvent.press(getByTestId(TestIds.nca_popup_submit));
    fireEvent.press(getByTestId(TestIds.nca_popup_cancel));
    // expect(navigate).toHaveBeenCalledTimes(0);
  });
  test('Test popup submit button else condition', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<PopupCommunicationAddress testID_submit={TestIds.nca_popup_submit} testID_cancel={TestIds.nca_popup_cancel} buttonPress={navigate} cancelButtonPress={navigate} checkPincode={""}/>);
    fireEvent.press(getByTestId(TestIds.nca_popup_submit));
  });

  test("Should fire the function passed as prop when onpress",async () => {

    const { getByTestId } = render(<PopupCommunicationAddress {...props}/>);

    const id1=getByTestId(TestIds.nca_pincode)
    await fireEvent(id1,'onChangeText','751020')

  });
  // test("Should fire the function passed as prop when onpress",async () => {

  //   const { getByTestId } = render(<PopupCommunicationAddress {...props2}/>);

  //   const id1=getByTestId(TestIds.nca_address1)
  //   await fireEvent(id1,'onChangeText','asdsd')
  //   const id2=getByTestId(TestIds.nca_address2)
  //   await fireEvent(id2,'onChangeText','sadfkj')

  // });

});
