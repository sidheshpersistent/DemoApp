import 'react-native';
import React from 'react';
import { render,waitFor} from '@testing-library/react-native';

import CustomerProfile from './index';
// import { TestIds, LOGIN } from '../../Utils/Constants';
import { TextInput as MockTextInput, View as MockView, Text as MockText, ImageBackground as MockImageBackground } from 'react-native';
// import { customerDataService } from "./personalDetail/services";

import { CustomerProfile_MockData } from '../../Utils/TestingMockData';
import { Endpoints } from '../../API';
import axios from 'axios';
import useSession from '../../App/useSession';
import { TestIds } from '../../Utils';

afterEach(() => {
  jest.clearAllMocks();
})

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
// mock react native image crop picker 
jest.mock("react-native-image-crop-picker",()=>({openCamera:jest.fn()}));

// mock CCL component library
jest.mock('@idfc/ccl-mobile/lib/module/v2', () => {
  const RenderPropsWithChildren = props => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  const RenderOnlyPropsTextInput = props => <MockTextInput {...props} />;
  const RenderPropsText = props => <MockText {...props} />
  const RenderOnlyProps = props => <MockView {...props} />;
  const RenderImageBackground = props => <MockImageBackground {...props} />;
  return {
    PasswordInput: RenderOnlyProps,
    TextInput: RenderOnlyPropsTextInput,
    StyledText: RenderPropsText,
    Button: RenderPropsWithChildren,
    Select: RenderOnlyProps,
    RadioButton: RenderOnlyProps,
    DateInput: RenderOnlyProps,
    ImageBackground:RenderImageBackground
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
    ColorType: RenderPropsWithChildren,
    LineHeight: RenderPropsWithChildren,
    TextAlign: RenderPropsWithChildren,
    COLOR_TYPES: RenderPropsWithChildren,
  };
});
jest.mock("../../App/useSession");

beforeEach(() => {
  useSession.mockReturnValue({
    session: {
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
      customerProfile:{
      bankingPreference:{Success:{},
      verifyKitData:{
        data:{
          accountNumber:"",
          ucic:"",
          accountType:""
        }
      },
        activeIndex:{},
        istermsAggreed:{},
        branchSelected:{},
        inputAccountNumber:{},
        isEditBranch:{},
        reimburseAccount:{}
      },
      personalDetail: {
        annualIncome: "",
        mothersName: "",
        countryOfBirth: { displayText: "India" },
        nomineeVisible: true,
        communicationAddress: false,
        nomineeCommunicationAddress: false,
        guardianCommunicationAddress: false,
        form60Visible: false,
        panApplied: true,
        selValue: "Radio 1",
        nomineeAddressRadio: "Radio 1",
        guardianAddressRadio: "Radio 1",
        customerOtherAddress: null,
        guardianOtherAddress: null,
        nomineeDob: "",
        isNomineeMinor: false,
        showCompanyName: false,
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
        nomineeOtherAddress: null,
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
    }},
    setSession: () => jest.fn(),
  });
});

const props = {
  resetFunc:{
    current:""
  },
  session: jest.fn(),
  setSession: jest.fn(),
};

describe('Customer Profile Test Module', () => {
  test('Test Personal Details api call', async () => {
    // customerDataService();
    jest.spyOn(axios, 'get').mockImplementation((url) => {
      console.log("url 22:", url);
      switch (url) {
        case Endpoints.getPersonalData:
          return Promise.resolve(CustomerProfile_MockData.userDetails);
      }
    });
  });
  test('Should match snapshot', async () => {
    const { toJSON } = await waitFor(() => render(<CustomerProfile {...props} />));
    expect(toJSON()).toMatchSnapshot();
   
   
  });

  test('Should match snapshot', async () => {
    const { getByTestId } = render(
      <CustomerProfile {...props} />
    );
    
   
  });

  


});