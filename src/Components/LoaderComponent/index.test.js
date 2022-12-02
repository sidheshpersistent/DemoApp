import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";
import LoaderComponent from ".";


// mock CCL component library
jest.mock("@idfc/ccl-mobile/lib/module/v2", () => {
  const RenderPropsWithChildren = (props) => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  const RenderOnlyPropsTextInput = props => <MockTextInput {...props} />;
  const RenderPropsText = (props) => <MockText {...props} />;
  const RenderOnlyProps = (props) => <MockView {...props} />;
  return {
    StyledText: RenderPropsText,
    Button: RenderPropsWithChildren,
    Select: RenderOnlyProps,
    TextInput: RenderOnlyPropsTextInput,
  };
});




describe("LoaderComponent Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<LoaderComponent />));
    expect(toJSON()).toMatchSnapshot();
  });

});