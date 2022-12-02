import "react-native";
import React from "react";
import { render, waitFor} from "@testing-library/react-native";

// import { TestIds, LOGIN } from '../../Utils/Constants';
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,

} from "react-native";

//import useSession from "../../../../App/useSession";



import ScanScreen from ".";
import useSession from "../../../../App/useSession";


jest.mock(
    'react-native-qrcode-scanner/node_modules/react-native-permissions',
    () => require('react-native-permissions/mock'),
    {onRead:jest.fn()}
  );

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

const useSessionFunc = (type, success, index) => {
  useSession.mockReturnValue({
    session: {
      accountType: type,
      customerProfile: {
        bankingPreference: {
          inputAccountNumber: "3423",
          Success: success,
          verifyKitData: {
            data: {
              accountNumber: "",
              ucic: "",
              accountType: "",
            },
          },
          activeIndex: index,
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
  useSessionFunc("CS", false, 0);
});

const props = {
  navigation:{
    navigate:jest.fn()
  },

  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
};

describe("Scanner Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(<ScanScreen {...props} navigation={jest.fn()}  />)
    );
    expect(toJSON()).toMatchSnapshot();
   
  });

  // test("Should be able to toggle employee reimbursement",async () => {
  //   const { getByTestId } = render(
  //     <ScanScreen
  //     {...props} navigation={jest.fn()} />
  //   );
  
  //   expect(getByTestId("scan")).toBeDefined()
  // });
  
  

});
