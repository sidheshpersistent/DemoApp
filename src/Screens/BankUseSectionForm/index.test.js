import 'react-native';
import React from 'react';
import { render,waitFor,fireEvent} from '@testing-library/react-native';
import BankUseSectionForm from '.';
import { TestIds,Account_Type } from "../../Utils/Constants";
import useSession from "../../App/useSession";
import { getCampaignCodeList_MockData,getBankList_MockData } from '../../Utils/TestingMockData';
import { Endpoints } from '../../API';
import axios from 'axios';
import { TextInput as MockTextInput, View as MockView, Text as MockText, ImageBackground as MockImageBackground } from 'react-native';
afterEach(() => {
    jest.clearAllMocks();
  })

  jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
  jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
  jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());

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
    };
  });
  
  jest.mock("@idfc/ccl-mobile", () => {
    const RenderPropsWithChildren = (props) => {
      const { children } = props;
      return <MockView {...props}>{children}</MockView>;
    };
    return {
      IconButton: RenderPropsWithChildren,
      SearchResult: RenderPropsWithChildren,
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
  // here context variables will be written to pass test cases

const useSessionFunc=(
    showCompanyName=false,
    form60Visible=false,
    selValue="Radio 1",
    customerOtherAddress=null,
    nomineeAddressRadio="Radio 1",
    nomineeOtherAddress=null,
    isNomineeMinor=false,
    guardianAddressRadio="Radio 1",
    guardianOtherAddress=null,
   
    
    
  )=>{
    useSession.mockReturnValue({
      session: {
        accountType: Account_Type.ASSISTED_SA,
        adharDetails:{
          adharNumber: "",
          name: "",
          avator:"",
          gender: "",
          state: "",
          pincode: "",
          location: "",
          dob: "",
          addressLn1: "",
          addressLn2: "", 
        },
        customerProfile: {
          personalDetail: {
            annualIncome: "",
            mothersName: "",
            countryOfBirth: { displayText: "India" },
            nomineeVisible: true,
            communicationAddress: false,
            nomineeCommunicationAddress: false,
            guardianCommunicationAddress: false,
            form60Visible: form60Visible , //false
            panApplied: true,
            selValue: selValue,  //"Radio 1"
            nomineeAddressRadio: nomineeAddressRadio, // "Radio 1"
            guardianAddressRadio: guardianAddressRadio, //"Radio 1"
            customerOtherAddress: customerOtherAddress,//null
            guardianOtherAddress: guardianOtherAddress , //null
            nomineeDob: "",
            isNomineeMinor: isNomineeMinor , //false
            showCompanyName: showCompanyName ,//false
            occupationType: "",
            sourceOfIncome: "",
            sourceOfIncomeDetails: [],
            nomineeName: "",
            customerRelation: "",
            guardianName: "",
            customerPincode: "",
            customerAddress1: "",
            customerAddress2: "",
            customerAddress3: "",
            nomineeOtherAddress: nomineeOtherAddress , //null
            nomineePincode: "",
            nomineeAddress1: "",
            nomineeAddress2: "",
            nomineeAddress3: "",
            guardianPincode: "",
            guardianAddress1: "",
            guardianAddress2: "",
            guardianAddress3: "",
            cityOfBirth: "",
            CompanyValue: "",
            popupType: false,
            occupationDetails: "",
            companyDetails: "",
            countryDetails: "",
            panNumber: "",
            isPanPopupShow: false,
            panAdharInvalid: false,
            isPanAdharMatchPopup: false,
            isErrorPan: false,
            isNTBUser: false,
            customerData: "",
            isPrathamBankUser: false,
            isETBUser: false,
            popupTypeInfo: "",
            fathersName: "",
            acknowledgeNumb: "",
            applicationDob: "",
          },
        },
      },
      setSession: () => jest.fn(),
    });
  }
  beforeEach(() => {
  
   useSessionFunc()
  
  });
  const props = {
    route : {
        params:{
            option:{
                custName : "subrat"
            }
        }
    },
    session: jest.fn(),
    setSession: jest.fn(),
  };
 
  describe('BankUseSectionForm Test Module', () => {
    test('Test getBankList and getCampaignCodeList api', () => {
      const navigate = jest.fn();
      const { getByTestId } = render(<BankUseSectionForm {...props} buttonPress={navigate} />);
      jest.spyOn(axios, 'get').mockImplementation((url) => {
        switch (url) {
          // case url.indexOf(Endpoints.getPaymentDetails)!=-1:
          //   return Promise.resolve(getPaymentDetails_MockData);
          case Endpoints.getCampaignCodeList:
            return Promise.resolve(getCampaignCodeList_MockData);
          case Endpoints.getBankList:
            return Promise.resolve(getBankList_MockData);
        }
      });
    });
    test('Should match snapshot', async () => {
      const { toJSON } = await waitFor(() => render(<BankUseSectionForm  {...props}/>));
      expect(toJSON()).toMatchSnapshot();
    });
    test("Should render elements for Customer consent", async () => {
      const { getByTestId } = render(
          <BankUseSectionForm {...props} />
      );
      expect(getByTestId(TestIds.bus_close_and_save)).toBeDefined();
      expect(getByTestId(TestIds.bus_initial_funding)).toBeDefined();
      expect(getByTestId(TestIds.bus_mode_of_payment)).toBeDefined();
      expect(getByTestId(TestIds.bus_cheque_details)).toBeDefined();
      expect(getByTestId(TestIds.bus_bank_name)).toBeDefined();
      expect(getByTestId(TestIds.bus_branch_name)).toBeDefined();
      expect(getByTestId(TestIds.bus_lead_code)).toBeDefined();
      expect(getByTestId(TestIds.bus_lead_warmer_code)).toBeDefined();
  });
  test('Test save and close button press', () => {
    const { getByTestId } = render(<BankUseSectionForm  {...props}/>);
    fireEvent.press(getByTestId(TestIds.bus_close_and_save));
  });
  test("Test setInitial funding switch button press ",async () => {
    const { getByTestId } = render(<BankUseSectionForm  {...props}/>);
    const id = getByTestId(TestIds.bus_initial_funding);
    await fireEvent(id, 'onValueChange'); 
  });
  test('test mock IP amount', async () => {
    const { getByTestId } = render(<BankUseSectionForm  {...props}/>);
    fireEvent.changeText(getByTestId(TestIds.bus_ip_amount), "5000");
  });
  test("Test mode of payment ",async () => {
    const { getByTestId } = render(<BankUseSectionForm  {...props}/>);
    const id = getByTestId(TestIds.bus_mode_of_payment);
    await fireEvent(id, 'onChange'); 
  });
  test('test mock cheque details', async () => {
    const { getByTestId } = render(<BankUseSectionForm  {...props}/>);
    fireEvent.changeText(getByTestId(TestIds.bus_cheque_details), "34322212");
  });
  test("Test search bank name event  ",async () => {
    const { getByTestId } = render(<BankUseSectionForm  {...props}/>);
    const id = getByTestId(TestIds.bus_bank_name);
    await fireEvent(id, 'onChangeText'); 
    await fireEvent(id, 'onCrossPress'); 
    await fireEvent(id, 'clickHandler',{bank:{displayText:"HDFC"}}); 
    fireEvent.changeText(getByTestId(TestIds.bus_branch_name), "pune");
    fireEvent.changeText(getByTestId(TestIds.bus_lead_code), "100005");
    fireEvent.changeText(getByTestId(TestIds.bus_lead_code), "");
    const id1 = getByTestId(TestIds.bus_lead_code);
    await fireEvent(id1, 'onBlur'); 
    fireEvent.changeText(getByTestId(TestIds.bus_lead_warmer_code), "123456");
    fireEvent.changeText(getByTestId(TestIds.bus_lead_warmer_code), "");
    fireEvent.changeText(getByTestId(TestIds.bus_lead_converter_code), "123456");
    fireEvent.changeText(getByTestId(TestIds.bus_lead_converter_code), "");
    const id2 = getByTestId(TestIds.bus_campaign_code);
    await fireEvent(id2, 'onChange',{"campaignCode":{id: 1,displayText: "Doctors and CA Drive",value: "6569"}}); 
    const id3 = getByTestId(TestIds.bus_met_customer_at);
    await fireEvent(id3, 'onChange',{"metCustomerAt":{ id: "1", displayText: "Residence", value: "1" }}); 
    const id4 = getByTestId(TestIds.bus_is_customer_sign);
    await fireEvent(id4, 'onPress'); 
    const id5 = getByTestId(TestIds.bus_save_button);
    await fireEvent(id5, 'onPress');
  });
  test('Test success message popup  button press', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<BankUseSectionForm {...props} buttonPress={navigate} />);
    fireEvent.press(getByTestId(TestIds.bus_success_message_popup));
  });
  test('Test error message popup  button press', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<BankUseSectionForm {...props} buttonPress={navigate} />);
    fireEvent.press(getByTestId(TestIds.bus_error_popup));
  });
  });