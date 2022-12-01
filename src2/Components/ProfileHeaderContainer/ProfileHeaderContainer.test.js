import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";

import ProfileHeaderContainer from "./ProfileHeaderContainer";




// mock CCL component library
jest.mock("@idfc/ccl-mobile/lib/module/v2", () => {
    const RenderPropsWithChildren = (props) => {
      const { children } = props;
      return <MockView {...props}>{children}</MockView>;
    };
    const RenderOnlyPropsTextInput = (props) => <MockTextInput {...props} />;
    const RenderPropsText = (props) => <MockText {...props} />;
    const RenderOnlyProps = (props) => <MockView {...props} />;
    return {
      PasswordInput: RenderOnlyProps,
      TextInput: RenderOnlyPropsTextInput,
      StyledText: RenderPropsText,
      Button: RenderPropsWithChildren,
      Select: RenderOnlyProps,
      RadioButton: RenderPropsWithChildren,
      DateInput: RenderOnlyProps,
      Icon:RenderOnlyProps,
    };
  });
  jest.mock('@idfc/ccl-mobile', () => {
    const RenderPropsWithChildren = props => {
      const { children } = props;
      return <MockView {...props}>{children}</MockView>;
    };
    return {
      IconButton: RenderPropsWithChildren,
      Icon: RenderPropsWithChildren,
      SearchResult: RenderPropsWithChildren
    };
  });
jest.mock("@idfc/ccl-commons/enums", () => {
    const RenderPropsWithChildren = (props) => {
      const { children } = props;
      return <MockView {...props}>{children}</MockView>;
    };
    return {
     
        IconSize: RenderPropsWithChildren,
        FontColor: RenderPropsWithChildren,
        IconColor: RenderPropsWithChildren,
        FontSize: RenderPropsWithChildren,
        ColorType: RenderPropsWithChildren,
        LineHeight: RenderPropsWithChildren,
        TextAlign: RenderPropsWithChildren,
        COLOR_TYPES: RenderPropsWithChildren,
      
    };
  });


describe("ProfileHeaderContainer Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<ProfileHeaderContainer />));
    expect(toJSON()).toMatchSnapshot();
  });

});
