import "react-native";
import React from "react";
import { render, waitFor} from "@testing-library/react-native";

// import { TestIds, LOGIN } from '../../Utils/Constants';
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
} from "react-native";



import PreApprovedOffers from ".";
import useSession from "../../App/useSession";

afterEach(() => {
  jest.clearAllMocks();
});

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
//mock react native image crop picker
jest.mock("react-native-image-crop-picker", () => ({ openCamera: jest.fn() }));

//mock CCL component library
jest.mock("@idfc/ccl-mobile/lib/module/v2", () => {
  const RenderPropsWithChildren = (props) => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  const RenderOnlyPropsTextInput = (props) => <MockTextInput {...props} />;
  const RenderPropsText = (props) => <MockText {...props} />;
  const RenderOnlyProps = (props) => <MockView {...props} />;
  return {
    TextInput: RenderOnlyPropsTextInput,
    StyledText: RenderPropsText,
    Button: RenderPropsWithChildren,
    Select: RenderOnlyProps,
    Checkbox: RenderOnlyProps,
    RadioButton: RenderOnlyProps,
  };
});

jest.mock("@idfc/ccl-mobile", () => {
  const RenderPropsWithChildren = (props) => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  return {
    IconButton: RenderPropsWithChildren,
    Icon: RenderPropsWithChildren,
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
jest.mock("../../App/useSession");

const useSessionFunc = () => {
  useSession.mockReturnValue({
    session: {
      
      availedCardFlag:"",
      
        
      
    },
    setSession: () => jest.fn(),
  });
};

beforeEach(() => {
  useSessionFunc();
});

const props = {
  prev:jest.fn(),
  next:jest.fn(),
  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
  route:{
    params:{
      isApplied:false
    }
  }
};

describe("Personalized Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(<PreApprovedOffers {...props} navigation={jest.fn()} />)
    );
    expect(toJSON()).toMatchSnapshot();
  });
  
  
});
