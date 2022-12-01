import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";
import useSession from "../../../App/useSession";
import PopupFeedback from ".";




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
jest.mock("../../../App/useSession");
  const props ={
    testID_submit: "testID_submit"
  }
  const useSessionFunc=()=>{
    useSession.mockReturnValue({
      session: {
        agentDetails: {
          email: 'sagar@idfcbanktest.com',
          firstName: 'Sagar',
          lastName: 'Bhat',
          userId: '1',
          password:'password'
        },
      },
      setSession: () => jest.fn(),
    });
  }
  beforeEach(() => {
   useSessionFunc()
  });
  

describe("PopupFeedback Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<PopupFeedback />));
    expect(toJSON()).toMatchSnapshot();
  });

  test("Should fire the function passed as prop when onpress",async () => {

    const { getByTestId } = render( <PopupFeedback {...props}/>);
    fireEvent.press(getByTestId('test0'));
    fireEvent.press(getByTestId(props.testID_submit));

  });

});
