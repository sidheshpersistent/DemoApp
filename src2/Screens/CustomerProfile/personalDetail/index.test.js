import "react-native";
import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import PersonalDetail from "./index";
import { TestIds, Account_Type } from "../../../Utils/Constants";
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
} from "react-native";
import { CustomerProfile_MockData } from "../../../Utils/TestingMockData";
import useSession from "../../../App/useSession";

// import {Endpoints } from '../../API';
// import axios from 'axios';

afterEach(() => {
  jest.clearAllMocks();
});

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
const focus = jest.fn();
const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { focus } });
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
jest.mock("../../../App/useSession");

// here context variables will be written to pass test cases

const useSessionFunc = (
  showCompanyName = false,
  form60Visible = false,
  selValue = "Radio 1",
  customerOtherAddress = null,
  nomineeAddressRadio = "Radio 1",
  nomineeOtherAddress = null,
  isNomineeMinor = false,
  guardianAddressRadio = "Radio 1",
  guardianOtherAddress = null,
  countryOfBirth = "NOINDIA" ,
age=27

) => {
  useSession.mockReturnValue({
    session: {
      accountType: Account_Type.ASSISTED_SA,
      adharDetails: {
        age:age,
        adharNumber: "",
        name: "",
        avator: "",
        gender: "",
        state: "",
        pincode: "",
        location: "",
        dob: "",
        addressLn1: "",
        addressLn2: "",

      },
      panDetails:{
        panNumber:""
      },
      customerProfile: {
        personalDetail: {
          annualIncome: "1321",
          mothersName: "mother",
          countryOfBirth: countryOfBirth,
          nomineeVisible: true,
          communicationAddress: false,
          nomineeCommunicationAddress: false,
          guardianCommunicationAddress: false,
          form60Visible: form60Visible, //false
          panApplied: true,
          selValue: selValue,  //"Radio 1"
          nomineeAddressRadio: nomineeAddressRadio, // "Radio 1"
          guardianAddressRadio: guardianAddressRadio, //"Radio 1"
          customerOtherAddress: customerOtherAddress,//null
          guardianOtherAddress: guardianOtherAddress, //null
          nomineeDob: "dd-mm-yyyy",
          isNomineeMinor: isNomineeMinor, //false
          showCompanyName: showCompanyName,//false
          occupationType: {displayText:"salary",id:1},
          sourceOfIncome: {displayText:"salary"},
          sourceOfIncomeDetails: [],
          nomineeName: "Nominee",
          customerRelation: {displayText:"relation"},
          guardianName: "Guardian",
          customerPincode: "",
          customerAddress1: "",
          customerAddress2: "",
          customerAddress3: "",
          nomineeOtherAddress: nomineeOtherAddress, //null
          nomineePincode: "",
          nomineeAddress1: "",
          nomineeAddress2: "",
          nomineeAddress3: "",
          guardianPincode: "",
          guardianAddress1: "",
          guardianAddress2: "",
          guardianAddress3: "",
          cityOfBirth: "INDIA",
          countryNamesList:["NOINDIA"],
          countryValue:"NOINDIA",
          cityNamesList:["CITY"],
          cityValue:"CITY",
          CompanyValue: "",
          popupType: false,
          occupationDetails: "",
          companyDetails: "",
          countryDetails: "",
          panNumber: "DXHPM0805E",
          isPanPopupShow: false,
          panAdharInvalid: false,
          isPanAdharMatchPopup: false,
          isErrorPan: false,
          isNTBUser: false,
          customerData: "",
          isPrathamBankUser: false,
          isETBUser: false,
          popupTypeInfo: "",
          fathersName: "father",
          acknowledgeNumb: "132443546",
          applicationDob: "dd-mm-yy",
        },
      },
    },
    setSession: () => jest.fn(),
  });
}
beforeEach(() => {

  useSessionFunc()
  
});

jest.spyOn(global, 'setTimeout').mockImplementationOnce(f=>f())
jest.spyOn(global, 'setTimeout').mockImplementationOnce(f=>f())
jest.spyOn(global, 'setTimeout').mockImplementationOnce(f=>f())
jest.spyOn(global, 'setTimeout').mockImplementationOnce(f=>f())
jest.spyOn(global, 'setTimeout').mockImplementationOnce(f=>f())
jest.spyOn(global, 'setTimeout').mockImplementationOnce(f=>f())



const props = {

  bankingPreferenceContext: jest.fn(),
  session: jest.fn(),
  setSession: jest.fn(),
  loading:jest.fn()
};

describe("Customer Profile personal details Test Module", () => {
  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() =>
      render(
        <PersonalDetail
          {...props}
          userData={CustomerProfile_MockData.userDetails.data[2]}
          childFunc={useRefSpy}
          resetFunc={useRefSpy}
        />
      )
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test("Should render elements", async() => {
    const { getByTestId } = render(
      <PersonalDetail 
      {...props}
      userData={CustomerProfile_MockData.userDetails.data[2]}
        childFunc={useRefSpy}
        resetFunc={useRefSpy}
      />
    );
    expect(getByTestId(TestIds.cp_gross_annual_income)).toBeDefined();
    expect(getByTestId(TestIds.cp_occupation_type)).toBeDefined();
    expect(getByTestId(TestIds.cp_source_of_income)).toBeDefined();
    expect(getByTestId(TestIds.cp_nominees_address)).toBeDefined();
    expect(getByTestId(TestIds.cp_mothers_full_name)).toBeDefined();
    expect(getByTestId(TestIds.cp_country_of_birth)).toBeDefined();
    expect(getByTestId(TestIds.cp_communication_address)).toBeDefined();
    expect(getByTestId(TestIds.cp_nominee_details_label)).toBeDefined();
    expect(getByTestId(TestIds.cp_nominee_name)).toBeDefined();
    expect(getByTestId(TestIds.cp_relationship_with_customer)).toBeDefined();
    const id47 = getByTestId(TestIds.cp_relationship_with_customer)
    await fireEvent(id47, 'onChange',{displayText:"relation"});
    expect(getByTestId(TestIds.cp_nominees_dob)).toBeDefined();
    expect(getByTestId(TestIds.cp_submit_button)).toBeDefined();
    const id50 = getByTestId(TestIds.cp_submit_button)
    await fireEvent(id50, 'onPress');
  });
  test("Should render other fields", () => {
    useSessionFunc(true, true, "Radio 2", true, "Radio 2", true, true, "Radio 2", true)
    const { getByTestId } = render(
      <PersonalDetail userData={CustomerProfile_MockData.userDetails.data[2]}
        childFunc={useRefSpy}
        resetFunc={useRefSpy}
        {...props}
      />
    );

    expect(getByTestId(TestIds.cp_new_address_label)).toBeDefined();
    expect(getByTestId(TestIds.cp_full_address_label)).toBeDefined();
    expect(getByTestId(TestIds.cp_since_nominee)).toBeDefined();
    expect(getByTestId(TestIds.cp_search_company)).toBeDefined();
    expect(getByTestId(TestIds.cp_fathers_name)).toBeDefined();
    expect(getByTestId(TestIds.cp_have_you_applied_pan)).toBeDefined();
    expect(getByTestId(TestIds.cp_date_of_application)).toBeDefined();
    expect(getByTestId(TestIds.cp_acknowledgement_no)).toBeDefined();
    expect(getByTestId(TestIds.cp_guardian_name)).toBeDefined();
    expect(getByTestId(TestIds.cp_guardian_address)).toBeDefined();
    expect(getByTestId(TestIds.cp_button_guardian_comm_address)).toBeDefined();
    expect(getByTestId(TestIds.cp_cutomer_address_radio1)).toBeDefined();
  });


  test("Should pass the events in screen", async () => {
    useSessionFunc(true, true, "Radio 2", true, "Radio 2", true, true, "Radio 2", true)
    const { getByTestId } = render(
      <PersonalDetail userData={CustomerProfile_MockData.userDetails.data[2]}
        childFunc={useRefSpy}
        resetFunc={useRefSpy}
        {...props}
      />
    );
   
    const id = getByTestId(TestIds.cp_gross_annual_income);
    await fireEvent(id, 'onBlur');
    id.props.textInputProps.onChangeText("1234")
    const id2 = getByTestId(TestIds.cp_occupation_type);
    id2.props.value="salary"
    await fireEvent(id2, 'onChange', {sourceOfIncome:[{id: "1", source: "Salaried"},{id: "2", source: "Salaried"}], incomeSource: "Salaried"  });
    const id3 = getByTestId(TestIds.cp_source_of_income);
    await fireEvent(id3, 'onChange', { id: "1", displayText: "Salaried", value: "1" });
    const id4 = getByTestId(TestIds.cp_search_company);
    await fireEvent(id4, 'setSearchValue', { id: "1", displayText: "Salaried", value: "1" });
    const id5 = getByTestId(TestIds.cp_mothers_full_name);
    id5.props.textInputProps.onChangeText("mother")
    await fireEvent(id5, 'onBlur');
    const id6 = getByTestId(TestIds.cp_search_company);
    await fireEvent(id6, 'getSerachResult',"value" );
    await fireEvent(id6, 'setSearchValue', { id: "1", displayText: "Salaried", value: "1" });
    await fireEvent(id6, 'setIsCompanySelectedFromList', true);
    await fireEvent(id6, 'sethideSearchResult', true);
    await fireEvent(id6, 'clickHandler', { displayText: "value" });
    await fireEvent(id6, 'resetRankList', { displayText: "" });


    const id7 = getByTestId(TestIds.cp_country_of_birth);
    await fireEvent(id7, 'clickHandler', { displayText: "NOINDIA" });
 
    await fireEvent(id7, 'onChangeText', "");
    await fireEvent(id7, 'onCrossPress');
    await fireEvent(id7, 'onChangeText', "NOINDIA");


    const id8 = getByTestId(TestIds.cp_fathers_name);
    id8.props.textInputProps.onChangeText("father")
    await fireEvent(id8, 'onBlur');

    const id9 = getByTestId(TestIds.cp_have_you_applied_pan);
    await fireEvent(id9, 'onValueChange');
    const id10 = getByTestId(TestIds.cp_date_of_application);
    await fireEvent(id10, 'datePickerProps');
    id10.props.datePickerProps.onSetDatePress("DOB")
   
    useSessionFunc(true, true, "Radio 2", true, "Radio 2", true, true, "Radio 2", true, countryOfBirth = "NOINDIA")
    render(
      <PersonalDetail userData={CustomerProfile_MockData.userDetails.data[2]}
        childFunc={useRefSpy}
        resetFunc={useRefSpy}
        {...props}
      />
    );
    const id11 = getByTestId(TestIds.cp_city_of_birth);
    await fireEvent(id11, 'clickHandler', { displayText: "value" });
    await fireEvent(id11, 'onChangeText', "text");
    await fireEvent(id11, 'onChangeText', "");
    await fireEvent(id11, 'onCrossPress');
    const id12 = getByTestId(TestIds.cp_acknowledgement_no)
    id12.props.textInputProps.onChangeText("2312312")
    await fireEvent(id12, 'onBlur');
    const id13 = getByTestId(TestIds.cp_cutomer_address_radio1)
    
    await fireEvent(id13, 'onChange');
    const id14 = getByTestId(TestIds.cp_cutomer_address_radio2)
    
    await fireEvent(id14, 'onChange');
    const id15 = getByTestId(TestIds.cp_edit_other_address)
    await fireEvent(id15, 'onPress');
    const id16 = getByTestId(TestIds.cp_edit_other_address)
    await fireEvent(id16, 'onPress');
    const id17 = getByTestId(TestIds.cp_toogle_nominee)
    await fireEvent(id17, 'onValueChange');
    const id18 = getByTestId(TestIds.cp_nominee_name)
    id18.props.textInputProps.onChangeText("name")
    await fireEvent(id18, 'onBlur');
    const id19 = getByTestId(TestIds.cp_nominees_dob)
    id19.props.datePickerProps.onSetDatePress("name")
    
    const id20 = getByTestId(TestIds.cp_communication_address_radio3)
    await fireEvent(id20, 'onChange');
    const id21 = getByTestId(TestIds.cp_communication_address_radio4)
    await fireEvent(id21, 'onChange');
    const id22 = getByTestId(TestIds.cp_communication_address_radio5)
    await fireEvent(id22, 'onChange');
    
    const id23= getByTestId(TestIds.cp_edit_communication2)
    await fireEvent(id23, 'onPress');
    const id24 = getByTestId(TestIds.cp_guardian_name)
    id24.props.textInputProps.onChangeText("name")
    await fireEvent(id24, 'onBlur');
    const id25 = getByTestId(TestIds.cp_communication_address_radio6)
    await fireEvent(id25, 'onChange');
    const id26 = getByTestId(TestIds.cp_communication_address_radio7)
    await fireEvent(id26, 'onChange');
    const id27 = getByTestId(TestIds.cp_communication_address_radio8)
    await fireEvent(id27, 'onChange');
    const id28 = getByTestId(TestIds.cp_communication_address_radio9)
    await fireEvent(id28, 'onChange');
    const id29= getByTestId(TestIds.cp_button_guardian_comm_address)
    await fireEvent(id29, 'onPress');
    const id30= getByTestId("testCancel1")
    await fireEvent(id30, 'cancelBtnPressed');
    const id31= getByTestId("testSubmit1")
    await fireEvent(id31, 'buttonPress');
    const id32= getByTestId("testCancel2")
    await fireEvent(id32, 'cancelButtonPress');
    const id33= getByTestId("testSubmit2")
    await fireEvent(id33, 'buttonPress');
    const id34= getByTestId("testSubmit3")
    await fireEvent(id34, 'buttonPress');
    const id35= getByTestId("testSubmit4")
    await fireEvent(id35, 'buttonPress');
    
    const id36= getByTestId("testSubmit5")
    await fireEvent(id36, 'buttonPress');
    const id37= getByTestId("testCancel5")
    await fireEvent(id37, 'cancelButtonPress');

    const id38= getByTestId("testSubmit6")
    await fireEvent(id38, 'buttonPress');
    const id39= getByTestId("testCancel6")
    await fireEvent(id39, 'cancelButtonPress');

    const id40= getByTestId("testSubmit7")
    await fireEvent(id40, 'buttonPress');
    const id41= getByTestId("testCancel7")
    await fireEvent(id41, 'cancelButtonPress');

    const id42= getByTestId("testSubmit8")
    await fireEvent(id42, 'buttonPress');
    
    
    await fireEvent(id42, 'buttonPress');
    const id43= getByTestId("testCancel8")
    await fireEvent(id43, 'cancelButtonPress');
    
   

      const id44 = getByTestId(TestIds.cp_toogle_nominee)
    await fireEvent(id44, 'onValueChange');

    const id45= getByTestId(TestIds.cid_pan_adhar_match_pop_up_submit)
    await fireEvent(id45, 'buttonPress');
    const id46= getByTestId(TestIds.pti_popup_text_input)
    await fireEvent(id46, 'onchangeText',"DXHPM0805E");
    const id53 = getByTestId(TestIds.cp_gross_annual_income);
    id53.props.textInputProps.onChangeText("12346465764")
    await fireEvent(id53, 'onBlur');
   
  });


});
