import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";
import useSession from "../../../../App/useSession";
import CreditCard from ".";
import { applyNow_api_Data } from "../../constants";
import { TestIds } from "../../../../Utils";



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
        Icon: RenderOnlyProps,
        Checkbox: RenderOnlyProps
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




const props = {
    response: applyNow_api_Data[0],
    session: jest.fn(),
    setSession: jest.fn(),


}

jest.mock("react-native-popup-menu", () => {
    const RenderPropsWithChildren = (props) => {
        const { children } = props;
        return <MockView {...props}>{children}</MockView>;
    };
    return {
        MenuOptions: RenderPropsWithChildren,
        MenuOption: RenderPropsWithChildren,
        MenuTrigger: RenderPropsWithChildren,
        Menu: RenderPropsWithChildren,
        renderers: { Popover: jest.fn() }
    };
});

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());


jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({ openDrawer: jest.fn(), navigate: jest.fn() }),
    useIsFocused: () => ({ isFocused: jest.fn() })
}));




jest.mock("../../../../App/useSession");

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



) => {
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
                    form60Visible: form60Visible, //false
                    panApplied: true,
                    selValue: selValue,  //"Radio 1"
                    nomineeAddressRadio: nomineeAddressRadio, // "Radio 1"
                    guardianAddressRadio: guardianAddressRadio, //"Radio 1"
                    customerOtherAddress: customerOtherAddress,//null
                    guardianOtherAddress: guardianOtherAddress, //null
                    nomineeDob: "",
                    isNomineeMinor: isNomineeMinor, //false
                    showCompanyName: showCompanyName,//false
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
                    nomineeOtherAddress: nomineeOtherAddress, //null
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



describe("Credit Card Test Module", () => {
    test("Should match snapshot", async () => {
        const { toJSON } = await waitFor(() => render(<CreditCard {...props} />));
        expect(toJSON()).toMatchSnapshot();
    });

    test("Should click on fields", async () => {
        const { getByTestId } = render(
            <CreditCard {...props} />
        );
        const id = getByTestId(TestIds.crc_search_company);
        id.props.onChangeText("company name")
        const id01 = getByTestId(TestIds.crc_work_email);
        id01.props.onChangeText("email address")
        const id03 = getByTestId(TestIds.crc_complete_address);
        id03.props.onChangeText("complete address")
        const id2 = getByTestId(TestIds.crc_residence_address);
        await fireEvent(id2, 'onChange');
        const id05 = getByTestId(TestIds.crc_pincode);
        id05.props.onChangeText("231217")
        const id02 = getByTestId(TestIds.crc_office_address);
        await fireEvent(id02, 'onChange');
        const id5 = getByTestId(TestIds.crc_search_company2);
        id5.props.onChangeText("231217")
        const id07 = getByTestId(TestIds.crc_work_email2);
        id07.props.onChangeText("email address")
        const id08 = getByTestId(TestIds.crc_complete_address2);
        id08.props.onChangeText("complete address")
        const id09 = getByTestId(TestIds.crc_pincode2);
        id09.props.onChangeText("231217")
        const id012 = getByTestId(TestIds.crc_send_otp);
        await fireEvent(id012, 'buttonPress');
        const id011 = getByTestId(TestIds.crc_verify_otp_button);
        await fireEvent(id011, 'buttonPress');
        const id014 = getByTestId(TestIds.crc_applynow_creditCard_yes);
        await fireEvent(id014, 'onChange');
        const id015 = getByTestId(TestIds.crc_applynow_creditCard_no);
        await fireEvent(id015, 'onChange');
        // const id3 = getByTestId(TestIds.crc_filtered_result);
        // await fireEvent(id3, 'onClick');
        // const id05 = getByTestId(TestIds.crc_pincode);
        // id05.props.onChangeText("231217")
        // const id06 = getByTestId(TestIds.crc_filtered_result2);
        // await fireEvent(id06, 'onClick');
        // const id013 = getByTestId(TestIds.crc_altrenate_number);
        // id013.props.onChangeText("9839132878")
        // const id010 = getByTestId(TestIds.crc_set_otp);
        // id010.props.onChangeText("231217")
        // const id016 = getByTestId(TestIds.crc_full_name);
        // id016.props.onChangeText("name")
        // const id017 = getByTestId(TestIds.crc_relationship_with_customer);
        // await fireEvent(id017, 'onChange');





    });


});
