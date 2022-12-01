import "react-native";
import React from "react";
import { fireEvent, render, waitFor} from "@testing-library/react-native";
// import { TestIds, LOGIN } from '../../Utils/Constants';
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
 
} from "react-native";

import PersonalizedBanking from ".";
import useSession from "../../../../App/useSession";
import { TestIds } from "../../../../Utils";
import { Account_Type } from "../../../../Utils/Constants";

afterEach(() => {
  jest.clearAllMocks();
});

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
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
          SAProductList:[],
          branchSelectedValue:"pune"
        },
      },
    },
    setSession: () => jest.fn(),
  });
};

beforeEach(() => {
  useSessionFunc(Account_Type.ASSISTED_CS);
});

const props = {
  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
};

describe("Personalized Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(<PersonalizedBanking {...props} navigation={jest.fn()} />)
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test("Should render elements for CS", () => {
    const { getByTestId,getAllByTestId } = render(
      <PersonalizedBanking {...props} navigation={jest.fn()} />
    );

    expect(getByTestId(TestIds.ps_select_a_product)).toBeDefined();
    // expect(getByTestId(TestIds.ps_recommended)).toBeDefined();
    expect(getByTestId(TestIds.ps_employee_reimbursement)).toBeDefined();
    expect(getByTestId(TestIds.ps_employee_reimbursement_yes)).toBeDefined();
    expect(getByTestId(TestIds.ps_employee_reimbursement_no)).toBeDefined();
    expect(getByTestId(TestIds.ps_Preferred_branch)).toBeDefined();
    expect(getByTestId(TestIds.ps_Preferred_branch_dropdown)).toBeDefined();
    expect(getByTestId(TestIds.ps_services_required)).toBeDefined();
    expect(getByTestId(TestIds.ps_checkbook)).toBeDefined();
    expect(getByTestId(TestIds.ps_debitcard)).toBeDefined();
    expect(getByTestId(TestIds.ps_employee_reimbursement_switch)).toBeDefined();
    expect(getByTestId(TestIds.ps_checkbook_checkbox)).toBeDefined();
    expect(getByTestId(TestIds.ps_debitcard_checkbox)).toBeDefined();
    // expect(getAllByTestId(TestIds.ps_product_radio)).toBeDefined();
    
  });
  test("Should render elements for HH ", () => {
    useSessionFunc(Account_Type.ASSISTED_SA);
    const { getByTestId } = render(
      <PersonalizedBanking {...props} navigation={jest.fn()} />
    );
    expect(getByTestId(TestIds.ps_select_a_product)).toBeDefined();
    expect(getByTestId(TestIds.ps_Preferred_branch)).toBeDefined();
    expect(getByTestId(TestIds.ps_Preferred_branch_dropdown)).toBeDefined();
    expect(getByTestId(TestIds.ps_services_required)).toBeDefined();
    expect(getByTestId(TestIds.ps_checkbook)).toBeDefined();
    expect(getByTestId(TestIds.ps_debitcard)).toBeDefined();
    expect(getByTestId(TestIds.ps_checkbook_checkbox)).toBeDefined();
    expect(getByTestId(TestIds.ps_debitcard_checkbox)).toBeDefined();
    expect(getByTestId(TestIds.ps_recommended_product)).toBeDefined();
    expect(getByTestId(TestIds.ps_select_product_dropdown)).toBeDefined();
    expect(getByTestId(TestIds.ps_view_all_benifit)).toBeDefined();
    //expect(getByTestId("t")).toBeDefined();
  });

  test("Should select product from dropdown ",async () => {
    useSessionFunc(Account_Type.ASSISTED_SA);
    const { getByTestId } = render(
      <PersonalizedBanking
        onChange={jest.fn()}
       {...props} navigation={jest.fn()} />
    );
    const id = getByTestId(TestIds.ps_select_product_dropdown);
    await fireEvent(id, 'onChange');
   
    
  });
  test("Should optfor employee reimburesement ",async () => {
    useSessionFunc(Account_Type.ASSISTED_CS);
    const { getByTestId } = render(
      <PersonalizedBanking
        onChange={jest.fn()}
       {...props} navigation={jest.fn()} />
    );
    const id = getByTestId(TestIds.ps_employee_reimbursement_switch);
    await fireEvent(id, 'onValueChange');
   
    
  });
  test("Should select preffered branch dropdown ",async () => {
    useSessionFunc(Account_Type.ASSISTED_CS);
    const { getByTestId,getAllByTestId } = render(
      <PersonalizedBanking
        onChange={jest.fn()}
       {...props} navigation={jest.fn()} />
    );
    const id = getByTestId(TestIds.ps_Preferred_branch_dropdown);
    await fireEvent(id, 'onChange');
    const id2 = getByTestId(TestIds.ps_debitcard_checkbox);
    await fireEvent(id2, 'onChange');
    const id3 = getByTestId(TestIds.ps_checkbook_checkbox);
    await fireEvent(id3, 'onChange');
    // const id4 = getAllByTestId(TestIds.ps_product_radio);
    // await fireEvent(id4[0], 'onChange');
  });
  
});
