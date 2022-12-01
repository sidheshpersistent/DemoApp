import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import PopupEditBranch from ".";
import { TestIds,Account_Type } from "../../../Utils/Constants";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";
import useSession from "../../../App/useSession";
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
afterEach(() => {
  jest.clearAllMocks();
});

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
jest.mock("../../../App/useSession");
const useSessionFunc = (type, success, index) => {
  useSession.mockReturnValue({
    session: {
      accountType: type,
      agentDetails: {
        email: 'sagar@idfcbanktest.com',
        userId: ''
      },
      customerProfile: {
        bankingPreference: {
          inputAccountNumber: "123456789123",
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
  useSessionFunc(Account_Type.ASSISTED_CS, true, 0);
});

describe("PopupTextInput Test Module", () => {
  test("Should render elements", () => {
    const { getByTestId } = render(<PopupEditBranch />);
    expect(getByTestId(TestIds.peb_popup_info)).toBeDefined();
  });

  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<PopupEditBranch />));
    expect(toJSON()).toMatchSnapshot();
  });

  test("Should fire the function passed as prop when onpress",async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(
      <PopupEditBranch
        testID_submit={TestIds.peb_popup_submit}
        testID_cancel={TestIds.peb_popup_cancel}
        buttonPress={navigate}
        cancelButtonPress={navigate}
      />
    );
    fireEvent.press(getByTestId(TestIds.peb_popup_submit));
    const id1=getByTestId(TestIds.ps_Preferred_branch_dropdown)
    await fireEvent(id1,'sethideSearchResult',true)
    await fireEvent(id1,'setIsCompanySelectedFromList',true)
    await fireEvent(id1,'clickHandler',{displayText:"indian company"})
    await fireEvent(id1,'getSerachResult',"result")
    
    // fireEvent.press(getByTestId(TestIds.peb_popup_cancel));
  });
});
