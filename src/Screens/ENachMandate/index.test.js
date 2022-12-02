import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";

import useSession from "../../App/useSession";
import ENachMandate from ".";



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
      Icon:RenderOnlyProps,
    };
  });
  jest.mock('@idfc/ccl-mobile', () => {
    const RenderPropsWithChildren = props => {
      const { children } = props;
      return <MockView {...props}>{children}</MockView>;
    };
    return {
      IconButton: RenderPropsWithChildren,
      Icon: RenderPropsWithChildren,
      SearchResult: RenderPropsWithChildren
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




  const props={
    route:{
        params:{
            cardID:"12"
        }
    },
    session: jest.fn(),
    setSession: jest.fn(),


  }

  jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({ openDrawer: jest.fn() , navigate: jest.fn()}),
    useIsFocused: () => ({ isFocused: jest.fn() })
  }));





jest.mock("../../App/useSession");

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



describe("ENachMandate Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<ENachMandate {...props}/>));
    expect(toJSON()).toMatchSnapshot();
  });

});
