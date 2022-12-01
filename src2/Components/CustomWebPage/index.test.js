import "react-native";
import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

// import { TestIds, LOGIN } from '../../Utils/Constants';
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
} from "react-native";

import useSession from "../../App/useSession";
import CustomWebPage from ".";
import { TestIds } from "../../Utils";

afterEach(() => {
  jest.clearAllMocks();
});

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
//mock react native image crop picker
jest.mock("react-native-image-crop-picker", () => ({ openCamera: jest.fn() }));

jest.mock("react-native-webview", () => {
  const RealComponent = jest.requireActual("react-native-webview");

  return RealComponent;
});

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

const useSessionFunc = (signatureImage = "", panImage = "", isIndianCitizen = true ,isPoliticalyExposed=false,isOpenImagePicker=false) => {
  useSession.mockReturnValue({
    session: {
      availedCardFlag: "",
      customerProfile: {
        customerConsent: {
            isIndianCitizen: isIndianCitizen,
            isPanImageNeeded: true,
            country: "",
            foreignTin: "",
            tinCountry: "",
            isTermsAgreed: true,
            isConsentGiven: true,
            isPoliticalyExposed: isPoliticalyExposed,
            signatureImage: signatureImage,
            panImage: panImage,
            isOpenImagePicker: isOpenImagePicker,
            isOpenImagePickerPan: false
        }
    },
    },
    setSession: () => jest.fn(),
  });
};

beforeEach(() => {
  useSessionFunc();
});



const props = {
  prev: jest.fn(),
  next: jest.fn(),
  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
  route: {
    params: {
      isVisibleHeader: false,
      title: "",
      subTitle: "",
      isVisibleDone: "",
      isForTermsAndCondition:true
    },
  },
};

const props2 = {
  prev: jest.fn(),
  next: jest.fn(),
  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
  route: {
    params: {
      isVisibleHeader: false,
      title: "",
      subTitle: "",
      isVisibleDone: "",
      isForTermsAndCondition:false
    },
  },
};
describe("CustomWebPage testing module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(<CustomWebPage {...props} navigation={jest.fn()} />)
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test("Should fire the function passed as prop when onpress", async() => {
   
    const { getByTestId } = render(
        <CustomWebPage {...props} navigation={jest.fn()} />
    );
    const id = getByTestId(TestIds.custom_web_page);
    await fireEvent(id, 'onLoad');
    const id2 = getByTestId(TestIds.custom_web_page);
    await fireEvent(id2, 'onLoadStart');
    const id3 = getByTestId(TestIds.custom_web_page);
    await fireEvent(id3, 'onNavigationStateChange',{canGoBack:jest.fn()});
    
  });
  test("Should fire the function passed as prop when onScroll true", async() => {
   
    const { getByTestId } = render(
        <CustomWebPage {...props} />
    );
    const id = getByTestId(TestIds.custom_web_page);
    await fireEvent(id, 'onScroll',{nativeEvent:{ layoutMeasurement:{height:10}, contentOffset:{y:100}, contentSize:{height:100} }});

  });

  test("Should fire the function passed as prop when onScroll false", async() => {
   
    const { getByTestId } = render(
        <CustomWebPage {...props2} />
    );
    const id = getByTestId(TestIds.custom_web_page);
    await fireEvent(id, 'onScroll',{nativeEvent:{ layoutMeasurement:{height:10}, contentOffset:{y:100}, contentSize:{height:1000} }});

  });

});
