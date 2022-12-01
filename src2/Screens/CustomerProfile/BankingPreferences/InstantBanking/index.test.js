import "react-native";
import React from "react";
import { fireEvent, render, waitFor} from "@testing-library/react-native";
// import { TestIds, LOGIN } from '../../Utils/Constants';
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
 
} from "react-native";



import { TestIds } from "../../../../Utils";
import InstantBanking from ".";
import useSession from "../../../../App/useSession";


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
const useSessionFunc = (e) => {
  useSession.mockReturnValue({
    session: {
      accountType: e,
      customerProfile: {
        bankingPreference: {
          inputAccountNumber: "",
          Success: false,
          verifyKitData: {
            data: {
              accountNumber: "",
              ucic: "",
              accountType: "",
            },
          },
          activeIndex: 0,
          istermsAggreed: true,
          boosterAccount: true,
          checkbookOpted: true,
          debitOpted: true,
          productRadio: "Radio 0",
          productSelected: "",
          branchSelected: "",
          reimburseAccount: false,
          services: "",
          isEditBranch: false,
        },
      },
    },
    setSession: () => jest.fn(),
  });
};

beforeEach(() => {
  useSessionFunc("CS");
});

const props = {
  navigation:{navigate:jest.fn()},
  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
};

describe("Personalized Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(<InstantBanking {...props} navigation={jest.fn()} />)
    );
    expect(toJSON()).toMatchSnapshot();
  });
  
  test("Should render elements for instant banking HH and cs", () => {
    const { getByTestId} = render(
      <InstantBanking {...props} navigation={jest.fn()} />
    );

    expect(getByTestId(TestIds.ib_please_assign)).toBeDefined();
    expect(getByTestId(TestIds.ib_scan_qr)).toBeDefined();
    expect(getByTestId(TestIds.ib_scan_button)).toBeDefined();
    expect(getByTestId(TestIds.ib_scan_now)).toBeDefined();
    expect(getByTestId(TestIds.ib_or)).toBeDefined();
    expect(getByTestId(TestIds.ib_account_number_input)).toBeDefined();
  
    
  });

  test("Should start scanning ",async () => {
    const { getByTestId } = render(
      <InstantBanking
        onChange={jest.fn()}
       {...props}  />
    );
    const id = getByTestId(TestIds.ib_scan_button);
    await fireEvent(id, 'onPress');
   
    
  });

  test("Should input insta kit account number ",async () => {
    const { getByTestId } = render(
      <InstantBanking
       {...props}  />
    );
    
    const id = getByTestId(TestIds.ib_account_number_input);
    
    id.props.textInputProps.onChangeText("123")
    
    
  });

  
});
