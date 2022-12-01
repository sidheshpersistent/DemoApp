import "react-native";
import React from "react";
import { render, waitFor,fireEvent } from "@testing-library/react-native";

// import { TestIds, LOGIN } from '../../Utils/Constants';
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
} from "react-native";

//import useSession from "../../../../App/useSession";
import BankingPreferences from ".";
import useSession from "../../../App/useSession";
import { TestIds } from "../../../Utils";
import { Account_Type } from "../../../Utils/Constants";

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
          branchSelectedInstant:{displayText:""}
        },
      },
    },
    setSession: () => jest.fn(),
  });
};

beforeEach(() => {
  useSessionFunc(Account_Type.ASSISTED_CS, true, 0);
});

const props = {
  resetFunc:{
    current:""
  },
  childFunc:{
    current:""
  },
  prev:jest.fn(),
  next:jest.fn(),
  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
  loading: jest.fn(),
};

describe("Personalized Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(<BankingPreferences {...props} navigation={jest.fn()} />)
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test("Should render elements for Banking CS", async() => {
    const { getByTestId } = render(
      <BankingPreferences {...props} navigation={jest.fn()} />
    );
    expect(getByTestId(TestIds.bp_verify_account_details)).toBeDefined();
    expect(getByTestId(TestIds.bp_account_type_heading)).toBeDefined();
    expect(getByTestId(TestIds.bp_account_type)).toBeDefined();
    expect(getByTestId(TestIds.bp_account_number_heading)).toBeDefined();
    expect(getByTestId(TestIds.bp_account_number)).toBeDefined();
    expect(getByTestId(TestIds.bp_ucic_heading)).toBeDefined();
    expect(getByTestId(TestIds.bp_ucic)).toBeDefined();
    expect(getByTestId(TestIds.bp_fetched_branch_heading)).toBeDefined();
    expect(getByTestId(TestIds.bp_branch_selected)).toBeDefined();
    expect(getByTestId(TestIds.bp_terms_aggreed_checkbox)).toBeDefined();
    expect(getByTestId(TestIds.bp_i_agree)).toBeDefined();
    expect(getByTestId(TestIds.bp_inactive_forex)).toBeDefined();
  
  });

  test("Should render elements for Banking HH",async () => {
    useSessionFunc(Account_Type.ASSISTED_SA, true, 0);
    const { getByTestId } = render(
      <BankingPreferences {...props} navigation={jest.fn()} />
    );

    expect(getByTestId(TestIds.bp_active_debit_card)).toBeDefined();
   
  });
  test("Should render elements for Banking CS , false ", async() => {
    useSessionFunc(Account_Type.ASSISTED_CS, false, 0);
    const { getByTestId } = render(
      <BankingPreferences {...props} navigation={jest.fn()} />
    );
    expect(getByTestId(TestIds.bp_personalized_button)).toBeDefined();
    
  });
  test("Should render elements for Banking CS , True, 1 ", async() => {
    useSessionFunc(Account_Type.ASSISTED_CS, true, 1);
    const { getByTestId} = render(
      <BankingPreferences {...props} navigation={jest.fn()} />
    );
    expect(getByTestId(TestIds.bp_active_forex)).toBeDefined();
    expect(getByTestId(TestIds.bp_opt_for)).toBeDefined();
    expect(getByTestId(TestIds.bp_yes)).toBeDefined();
    expect(getByTestId(TestIds.bp_opt_for_switch)).toBeDefined();
    expect(getByTestId(TestIds.bp_no)).toBeDefined();
    
  });
  test("Should render elements for Banking CS , false, 1 ", async() => {
    useSessionFunc(Account_Type.ASSISTED_CS, false, 1);
    const buttonActive=()=>{
      return true
    }
    const { getByTestId } = render(
      <BankingPreferences buttonActive={buttonActive} {...props} navigation={jest.fn()} />
    );
    const id7 = getByTestId(TestIds.bp_right_arrow);
    await fireEvent(id7, 'onPress');
  });

  // functional test

  test("Should toogle instaKit and personalized",async () => {
    useSessionFunc(Account_Type.ASSISTED_CS, false, 0);
    const { getByTestId } = render(
      <BankingPreferences
        onChange={jest.fn()}
       {...props} navigation={jest.fn()} />
    );
    const id = getByTestId(TestIds.bp_personalized_button);
    await fireEvent(id, 'selectedButtonIndex');
    // const id7 = getByTestId(TestIds.bp_right_arrow);
    // await fireEvent(id7, 'onPress');
  });

  test("Should enable is edit branch ",async () => {
    
    const { getByTestId } = render(
      <BankingPreferences
      
      
        onChange={jest.fn()}
       {...props} navigation={jest.fn()} />
    );
    const id = getByTestId(TestIds.bp_is_edit_branch);
    await fireEvent(id, 'onPress');
    const id2 = getByTestId(TestIds.bp_terms_aggreed_checkbox);
    await fireEvent(id2, 'onChange');
    const id3 = getByTestId(TestIds.bp_back_arrow);
    await fireEvent(id3, 'onPress');
    // const id4 = getByTestId(TestIds.bp_right_arrow);
    // await fireEvent(id4, 'onPress');
    const id5 = getByTestId(TestIds.bp_popup_submit);
    await fireEvent(id5, 'buttonPress');
    const id6 = getByTestId(TestIds.bp_popup_cancel);
    await fireEvent(id6, 'cancelButtonPress');
    
  });
  
  test("Should be able to toggle employee reimbursement",async () => {
    useSessionFunc(Account_Type.ASSISTED_CS, true, 1);
    
    const { getByTestId } = render(
      <BankingPreferences
      
        onChange={jest.fn()}
       {...props} navigation={jest.fn()} />
    );
    const id = getByTestId(TestIds.bp_opt_for_switch);
    await fireEvent(id, 'onValueChange');
    const id2 = getByTestId(TestIds.bp_booster_account_checkbox);
    await fireEvent(id2, 'onChange');
    const id4 = getByTestId(TestIds.bp_right_arrow);
    await fireEvent(id4, 'onPress');
  });
  

});
