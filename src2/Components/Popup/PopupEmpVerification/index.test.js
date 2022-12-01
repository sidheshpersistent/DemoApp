import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";

import PopupEmpVerification from ".";


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


  const props ={
    testID_submit: "testID_submit",
    isClose:true,
    icon:true,
    buttonPress:jest.fn(),
    buttonWidth:true
  }

describe("PopupEmpVerification Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<PopupEmpVerification />));

    expect(toJSON()).toMatchSnapshot();
  });
  test("Should fire the function passed as prop when onpress",async () => {

    const { getByTestId } = render(<PopupEmpVerification {...props}/>);

    const id1=getByTestId('TEST10')
    await fireEvent(id1,'onChange')

    const id2 = getByTestId(props.testID_submit)
    await fireEvent(id2,'onChangeText','sagar@gmail.com')
    await fireEvent(id2,'onChangeText','')
    await fireEvent(id2,'onChangeText','98efs')

    const id3=getByTestId('TEST20')
    await fireEvent(id3,'onChange')
    const id4=getByTestId('TEST30')
    await fireEvent(id4,'buttonPress')
  });
});
