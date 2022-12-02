import {FlatList} from 'react-native';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import PopUpExistingCustomer from '.';
import { TestIds } from '../../../Utils/Constants';
import { View as MockView, Text as MockText } from 'react-native';
import { dropdownData } from '../../../Screens/CustomerIdentificationDetails/constants';
import useSession from "../../../App/useSession";

const mocCustomerDedupeData={"accountList":[{"accountNumber":"********654","accountType":"Pratham Bank"}],"adharNumber":123456789123,"customerID":"******755","emailID":"idfc@gmail.com","isPrathamBankCustomer":true,"mobileNumber":9876543210,"panNumber":"AZWPB6704F"};

afterEach(() => {
  jest.clearAllMocks();
})


jest.mock("../../../App/useSession");
beforeEach(() => {
  useSession.mockReturnValue({
    session: {
      reasonForDuplicateAcc:""
    },
    setSession: () => jest.fn(),
  });
});
// mock CCL component library
jest.mock('@idfc/ccl-mobile/lib/module/v2', () => {
  const RenderPropsWithChildren = props => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  const RenderPropsText = props => <MockText {...props} />
  const RenderOnlyProps = props => <MockView {...props} />;
  return {
    StyledText: RenderPropsText,
    Button: RenderPropsWithChildren,
    Select: RenderOnlyProps
  };
});

describe('PopupExistingCustomer Test Module', () => {
  test('Should render elements', () => {
    const { getByTestId } = render(<PopUpExistingCustomer dropdownData={dropdownData} responseData={mocCustomerDedupeData}/>);
    expect(getByTestId(TestIds.pec_popup_icon)).toBeDefined();
    expect(getByTestId(TestIds.pec_heading)).toBeDefined();
    expect(getByTestId(TestIds.pec_sub_text)).toBeDefined();
    expect(getByTestId(TestIds.pec_customer_mobile)).toBeDefined();
    expect(getByTestId(TestIds.pec_customer_mobile_number)).toBeDefined();
    expect(getByTestId(TestIds.pec_use_for_account_opening)).toBeDefined();
    expect(getByTestId(TestIds.pec_select_reason)).toBeDefined();
    expect(getByTestId(TestIds.pec_select_dropdown)).toBeDefined();
    // expect(getByTestId(TestIds.pec_submit_button)).toBeDefined();
    // expect(getByTestId(TestIds.pec_cancel_button)).toBeDefined();
    expect(getByTestId(TestIds.pec_flatlist)).toBeDefined();
});

  test('Should match snapshot', async () => {
    const { toJSON } = await waitFor(() => render(<PopUpExistingCustomer dropdownData={dropdownData} responseData={mocCustomerDedupeData}/>));
    expect(toJSON()).toMatchSnapshot();
  });

test('Test submit and cancel button press', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<PopUpExistingCustomer testID_submit={TestIds.pec_submit_button} testID_cancel={TestIds.pec_cancel_button} dropdownData={dropdownData} buttonPress={navigate}  cancelBtnPressed={navigate} responseData={mocCustomerDedupeData}/>);
    fireEvent.press(getByTestId(TestIds.pec_submit_button));
    fireEvent.press(getByTestId(TestIds.pec_cancel_button));   
  });

    test('Test Flatlist data', () => {
      const componentTree = render(
        <PopUpExistingCustomer data={mocCustomerDedupeData.accountList} responseData={mocCustomerDedupeData}/>,
      )

      expect(componentTree.UNSAFE_getAllByType(FlatList).length).toBe(1)
      // expect(componentTree.UNSAFE_getAllByType(Item).length).toBe(mockDataTodos.length)
    })
});