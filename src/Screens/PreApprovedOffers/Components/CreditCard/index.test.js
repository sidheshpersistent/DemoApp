import "react-native";
import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

// import { TestIds, LOGIN } from '../../Utils/Constants';
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
} from "react-native";

import CreditCard from ".";
import useSession from "../../../../App/useSession";
import { TestIds } from "../../../../Utils";

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
jest.mock("../../../../App/useSession");

const useSessionFunc = () => {
  useSession.mockReturnValue({
    session: {
      availedCardFlag: "",
    },
    setSession: () => jest.fn(),
  });
};

beforeEach(() => {
  useSessionFunc();
});
const item = {
  id: 1,
  isOfferAvailed: false,
  flag: "wealth",
  AvailedCardInfo: {
    applicationDetail: [
      {
        id: 1,
        refNumber: "9001233133",
      },
      {
        id: 2,

        time: "1-2 business days*",
      },
    ],
    isProcessed: false,
  },
  knowMore: {
    uri: "https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/hospicash.html?alt=media&token=d9544af0-fd35-435b-bcad-34306aa00fbb",
    title: "Group Safeguard - Hospicash - IDFC First Bank",
  },
};
const item2 = {
  id: 1,
  isOfferAvailed: true,
  flag: "wealth",
  AvailedCardInfo: {
    applicationDetail: [
      {
        id: 1,
        refNumber: "9001233133",
      },
      {
        id: 2,

        time: "1-2 business days*",
      },
    ],
    isProcessed: false,
  },
};
const props = {
  prev: jest.fn(),
  next: jest.fn(),
  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
};

describe("Personalized Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(<CreditCard {...props} item={item} navigation={jest.fn()} />)
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test("Should render else condition", async () => {
    render(<CreditCard {...props} item={item2} navigation={jest.fn()} />);
  });
  test("Should click on know more and avail offer", async () => {
    const { getByTestId } = render(
      <CreditCard {...props} item={item} navigation={jest.fn()} />
    );
    const id = getByTestId(TestIds.pa_knowMore_button);
    await fireEvent(id, 'onPress');
    
    const id2 = getByTestId(TestIds.pa_AvailOffer_button);
    await fireEvent(id2, 'buttonPress');
  });



});
