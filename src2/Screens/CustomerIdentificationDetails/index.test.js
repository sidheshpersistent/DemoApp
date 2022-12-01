import 'react-native';
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import CustomerIdentificationDetails from './index';
import { TextInput as MockTextInput, View as MockView, Text as MockText } from 'react-native';
import { TestIds,Account_Type, Milestone, CommonConstant } from '../../Utils/Constants';
import { Endpoints } from '../../API';
import axios from 'axios';
import { isPanNumberValidApi, checkPanAdharMatch, customerDedupe, checkMobileDedupe, checkEmailDedupe } from '../../Utils/CommonApi/index';
import { CID_MockData } from '../../Utils/TestingMockData';
import useSession from "../../App/useSession";
afterEach(() => {
  jest.clearAllMocks();
})

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
// mock CCL component library
jest.mock('@idfc/ccl-mobile/lib/module/v2', () => {
  const RenderOnlyPropsTextInput = props => <MockTextInput {...props} />;
  const RenderPropsText = props => <MockText {...props} />
  const RenderOnlyProps = props => <MockView {...props} />;
  return {
    PasswordInput: RenderOnlyProps,
    TextInput: RenderOnlyPropsTextInput,
    StyledText: RenderPropsText,
    Select: RenderOnlyProps,
    Button: RenderOnlyProps
  };
});
jest.mock('@idfc/ccl-mobile', () => {
  const RenderPropsWithChildren = props => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  return {
    IconButton: RenderPropsWithChildren,
    SearchResult: RenderPropsWithChildren
  };
});


jest.mock('@idfc/ccl-commons/enums', () => {
  const RenderPropsWithChildren = props => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  return {
    IconSize: RenderPropsWithChildren,
    FontColor: RenderPropsWithChildren,
    IconColor: RenderPropsWithChildren,
    FontSize: RenderPropsWithChildren,
    LineHeight: RenderPropsWithChildren,
    TextAlign: RenderPropsWithChildren,
    COLOR_TYPES: RenderPropsWithChildren,
  };
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
      accountType: "ASSISTED_CS",
    }
  }),
}));
jest.mock("../../App/useSession");

// here context variables will be written to pass test cases


const fetchedData={
  response:{
    milestone:Milestone.PERSONAL_DETAILS
  }
}




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
      accountType: "ASSISTED_CS",
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




describe('CID Test Module', () => {
  test('Test api', () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    jest.spyOn(axios, 'get').mockImplementation((url) => {
      switch (url) {
        case Endpoints.getResumeJourneyCheck:
          return Promise.resolve(response={status:CommonConstant.SUCCESS});
      }
    });
  });
  
  test('Should render elements', () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    // expect(getByTestId(TestIds.cid_cs_cust_details)).toBeDefined();
    expect(getByTestId(TestIds.cid_cust_details)).toBeDefined();
    expect(getByTestId(TestIds.cid_mobile_number)).toBeDefined();
    expect(getByTestId(TestIds.cid_personal_email)).toBeDefined();
    expect(getByTestId(TestIds.cid_office_email)).toBeDefined();
    expect(getByTestId(TestIds.cid_pan)).toBeDefined();
    expect(getByTestId(TestIds.cid_mandatory_pan)).toBeDefined();
    expect(getByTestId(TestIds.cid_aadhar)).toBeDefined();
    expect(getByTestId(TestIds.cid_pan_tooltip)).toBeDefined();
  });

  test('Should match snapshot', async () => {
    const { toJSON } = await waitFor(() => render(<CustomerIdentificationDetails />));
    expect(toJSON()).toMatchSnapshot();
  });

  test('test valid personal email validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_personal_email), "kapil@gmail.com");
  });
  test('test invalid office email validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_office_email), "rohit@.");
  });

  // ELSE BLOCK TESTTING
  test('test valid office email validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_office_email), "kapil@gmail.com");
  });

  // test('test invalid personal email validations', async () => {
  //   const { getByTestId } = render(<CustomerIdentificationDetails />);
  //   fireEvent.changeText(getByTestId(TestIds.cid_personal_email), "rohit@.");
  // });

  //IF BLOCK TESTTING
  test('test invalid number validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_mobile_number), "272222221");
  });

  //ELSE BLOCK TESTTING
  test('test valid number validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_mobile_number), "7276000040");
  });

  //IF BLOCK TESTTING
  test('test invalid adhar or vid validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_aadhar), "123");
  });

  //ELSE BLOCK TESTTING
  test('test valid adhar or vid validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_aadhar), "123456789123");
  });

  //IF BLOCK TESTTING
  test('test invalid pan validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_pan), "As23S");
  });

  //ELSE BLOCK TESTTING
  test('test valid pan validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_pan), "ASDFS1234D");
  });

  test('Test pan popup button press', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<CustomerIdentificationDetails buttonPress={navigate} cancelBtnPressed={navigate} />);
    fireEvent.press(getByTestId(TestIds.cid_pan_check_submit));
  });

  test('Test popup info button press', () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.press(getByTestId(TestIds.cid_pan_tooltip));
  });

  test('Test enable submit button conditions', () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_mobile_number), "9090909090");
    fireEvent.changeText(getByTestId(TestIds.cid_aadhar), "123456789123");
    fireEvent.changeText(getByTestId(TestIds.cid_office_email), "rohit@gmail.com");
    fireEvent.changeText(getByTestId(TestIds.cid_pan), "AZWPB6704F");
    // fireEvent.press(getByTestId(TestIds.cid_submit_button));

    isPanNumberValidApi("AZWPB6704F");
    checkPanAdharMatch("123456789123", "AZWPB6704B");
    checkMobileDedupe("9876543210");
    checkEmailDedupe("idfc@gmail.com", (response) => {});
    
    customerDedupe(CID_MockData.CustomerDedupeParams);
    jest.spyOn(axios, 'get').mockImplementation((url) => {
      console.log("mock url 555 : ", url)
      switch (url) {
        case Endpoints.getCompanyList:
          return Promise.resolve(CID_MockData.companyList);
        case Endpoints.getPanValidationData:
          return Promise.resolve(CID_MockData.PanValidation);
        case Endpoints.checkPanAdharMatch + "123456789123" + ".json":
          return Promise.resolve(CID_MockData.PAN_Adhar_Name_Match);
        case Endpoints.customerDedupe + "123456789123" + ".json":
          return Promise.resolve(CID_MockData.CustomerDedupe);
        case Endpoints.customerDedupe + ".json":
          return Promise.resolve(CID_MockData.CustomerDedupe);
        case Endpoints.checkMobileDedupe + ".json":
          return Promise.resolve(CID_MockData.MobileDedupe);
          case Endpoints.checkEmailDedupe + ".json":
            return Promise.resolve(CID_MockData.EmailDedupe);
        // default :
        // return Promise.resolve(mockData_CustomerDedupe);
      }
    });
  });

  test('test for empty mobile number validations', async () => {
    const { getByTestId } = render(<CustomerIdentificationDetails />);
    fireEvent.changeText(getByTestId(TestIds.cid_mobile_number), "");
  });
  test('Test email check popup button press', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<CustomerIdentificationDetails buttonPress={navigate} cancelButtonPress={navigate} />);
    fireEvent.press(getByTestId(TestIds.cid_pan_pop_up_submit));
    fireEvent.press(getByTestId(TestIds.cid_pan_pop_up_cancel));

  });
  test('Test re enter email check popup button press', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<CustomerIdentificationDetails cancelButtonPress={navigate} />);
    fireEvent.press(getByTestId(TestIds.cid_pan_pop_up_cancel1));
  });
  test('Test re enter mobile check popup button press', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<CustomerIdentificationDetails cancelButtonPress={navigate} />);
    fireEvent.press(getByTestId(TestIds.cid_pan_pop_up_cancel2));
  });
  test('Test ETB user popup  button press', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<CustomerIdentificationDetails cancelBtnPressed={navigate} buttonPress={navigate} />);
    fireEvent.press(getByTestId(TestIds.cid_adhar_pop_up_submit));
    fireEvent.press(getByTestId(TestIds.cid_re_enter_pan_validate));
    fireEvent.press(getByTestId(TestIds.cid_adhar_pop_up_cancel2));
    fireEvent.press(getByTestId(TestIds.cid_pan_adhar_match_pop_up_submit));
    fireEvent.press(getByTestId(TestIds.cid_pan_pop_up_submit1));
    fireEvent.press(getByTestId(TestIds.cid_pan_pop_up_submit2));
    
    // fireEvent.press(getByTestId(TestIds.cid_re_enter_pan));
  });
  test('Test header back arrow navigation', () => {
    // const navigate = jest.fn();
    const { getByTestId } = render(<CustomerIdentificationDetails  />);
    fireEvent.press(getByTestId(TestIds.cid_header_back_arrow));
  });
  test('should select and enter fields',async () => {
    const props={navigation:{
      navigate:jest.fn()
    }}
    const { getByTestId } = render(<CustomerIdentificationDetails {...props} />);
    
    const id1 = getByTestId(TestIds.cid_pan)
    await fireEvent(id1, 'onBlur');
    await fireEvent(id1, 'onFocus');
    const id2 = getByTestId(TestIds.cid_aadhar)
    await fireEvent(id2, 'onBlur');
    await fireEvent(id2, 'onFocus');
    const id3 = getByTestId(TestIds.cid_adhar_pop_up_submit1)
    await fireEvent(id3, 'buttonPress');
    const id4 = getByTestId(TestIds.cid_pan_adhar_match_pop_up_cancel)
    await fireEvent(id4, 'cancelButtonPress',jest.fn());
    const id5 = getByTestId(TestIds.cid_resume_journey_pop_up_cancel)
    await fireEvent(id5, 'cancelButtonPress',jest.fn());
    const id6 = getByTestId(TestIds.cid_acc_already_exist_submit)
    await fireEvent(id6, 'buttonPress');
    const id7 = getByTestId(TestIds.cid_pan_pop_up_submit1)
    await fireEvent(id7, 'onchangeText',"8750332889");
    const id8=getByTestId(TestIds.cid_adhar_pop_up_submit2)
    await fireEvent(id8, 'buttonPress');

   

    // const id9=getByTestId(TestIds.cid_resume_journey_pop_up_submit)
    // await fireEvent(id9, 'buttonPress');
    
  });
  test('Should fire the function passed as prop when onpress', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<CustomerIdentificationDetails  testID_submit={TestIds.cid_popup_verification} buttonPress={navigate}/>);
    fireEvent.changeText(getByTestId(TestIds.cid_office_email), "rohit@gmail.com");
    fireEvent.press(getByTestId(TestIds.cid_popup_verification));
  });



})