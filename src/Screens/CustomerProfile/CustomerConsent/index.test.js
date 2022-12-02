import "react-native";
import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react-native";
import {  Account_Type, AdharPanMatch } from "../../../Utils/Constants";
// import { TestIds, LOGIN } from '../../Utils/Constants';
import {
    TextInput as MockTextInput,
    View as MockView,
    Text as MockText,
} from "react-native";

//import useSession from "../../../../App/useSession";
import CustomerConsent from ".";
import useSession from "../../../App/useSession";
import { TestIds } from "../../../Utils";

afterEach(() => {
    jest.clearAllMocks();
});

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
//mock react native image crop picker
const result ={"cropRect": {"height": 1920, "width": 1440, "x": 0, "y": 0}, "height": 1920, "mime": "image/jpeg", "modificationDate": "1656398544000", "path": "file:///data/user/0/com.cajourney/cache/react-native-image-crop-picker/c50a4253-67d6-48e3-9195-a9d0ca9716ca.jpg", "size": 45130, "width": 1440}
jest.mock("react-native-image-crop-picker", () => ({ openCamera: jest.fn().mockImplementation(() => Promise.resolve(result))}));

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

const useSessionFunc = (signatureImage = "base64ImageString", panImage = "base64ImageString", isIndianCitizen = false ,isPoliticalyExposed=false,isOpenImagePicker=false) => {
    useSession.mockReturnValue({
        session: {
            panDetails:{
                panNumber:"",
                name:"",
                pnSts:"",
                panTitle:"",
                lastUpdatedDate:"",
                panAadharLinkSts:"",
                panAdharStatus:undefined
              },
            agentDetails: {
                email: 'sagar@idfcbanktest.com',
                userId: ''
              },
            customerProfile: {
                customerConsent: {
                    isIndianCitizen: isIndianCitizen,
                    isPanImageNeeded: false,
                    country: "andora",
                    foreignTin: "23121212121",
                    tinCountry: "andora",
                    isTermsAgreed: true,
                    isConsentGiven: true,
                    isPoliticalyExposed: isPoliticalyExposed,
                    signatureImage: signatureImage,
                    panImage: panImage,
                    isOpenImagePicker: isOpenImagePicker,
                    isOpenImagePickerPan: false,
                    isEmploymentProofNeeded: true,
                    employmentProofImage:"base64ImageString"
                }
            },
        },
        setSession: () => jest.fn(),
    });
};

beforeEach(() => {
    useSessionFunc();
});

const props = {
    resetFunc:{
        current:""
      },
      childFunc:{
        current:""
      },
    loading:jest.fn(),
    prev: jest.fn(),
    next: jest.fn(),
    bankingPreferenceContext: jest.fn(),
    session: jest.fn(),
    setSession: jest.fn(),
    navigation:{
        navigate:jest.fn()
    }
};

describe("Personalized Test Module", () => {
    test("Should match snapshot", async () => {
        const { toJSON } = await waitFor(() =>
            render(<CustomerConsent {...props} />)
        );
        expect(toJSON()).toMatchSnapshot();
    });

    test("Should render elements for Customer consent", async () => {
        const { getByTestId } = render(
            <CustomerConsent {...props} />
        );
        expect(getByTestId(TestIds.cc_customer_signature)).toBeDefined();
        // expect(getByTestId(TestIds.cc_signature_container)).toBeDefined();
        // expect(getByTestId(TestIds.cc_customer_pan_card)).toBeDefined();
        // expect(getByTestId(TestIds.cc_pan_container)).toBeDefined();
        expect(getByTestId(TestIds.cc_indian_citizen_checkbox)).toBeDefined();
        expect(getByTestId(TestIds.cc_indian_citizen_text)).toBeDefined();
        expect(getByTestId(TestIds.cc_politically_exposed_checbox)).toBeDefined();
        expect(getByTestId(TestIds.cc_politically_exposed_text)).toBeDefined();
        expect(getByTestId(TestIds.cc_terms_and_conditions_checkbox)).toBeDefined();
        expect(getByTestId(TestIds.cc_i_agree_text)).toBeDefined();
        expect(getByTestId(TestIds.cc_terms_and_conditions_text)).toBeDefined();
        expect(getByTestId(TestIds.cc_CIBIL_text)).toBeDefined();
        expect(getByTestId(TestIds.cc_consent_checkbox)).toBeDefined();
        expect(getByTestId(TestIds.cc_consent_text)).toBeDefined();
        expect(getByTestId(TestIds.cc_back_button)).toBeDefined();
        //expect(getByTestId(TestIds.cc_active_button)).toBeDefined();
        //expect(getByTestId(TestIds.cc_inactive_button)).toBeDefined();
     
        //expect(getByTestId(TestIds.pop_up_camera_pan)).toBeDefined();
       

    });

    test("Should render elements for Customer consent with signature image", async () => {
        useSessionFunc('signature image is already picked', "");
        const { getByTestId } = render(
            <CustomerConsent {...props} />
        );

       expect(getByTestId(TestIds.cc_recapture_signature)).toBeDefined();

    });

    test("Should render elements for Customer consent for tax country select", async () => {
        useSessionFunc("", "", false);
        const { getByTestId } = render(
            <CustomerConsent {...props} />
        );
        expect(getByTestId(TestIds.cc_tax_country_select)).toBeDefined();
        expect(getByTestId(TestIds.cc_foreign_TIN)).toBeDefined();
        expect(getByTestId(TestIds.cc_TIN_issuing_country)).toBeDefined();

    });

    test("Should render elements for Customer consent for poitiacally exposed person", async () => {
        useSessionFunc("", "", false ,true);
        const { getByTestId } = render(
            <CustomerConsent {...props} />
        );
        expect(getByTestId(TestIds.pop_up_politically_exposed_person)).toBeDefined();
        expect(getByTestId(TestIds.pop_up_politically_exposed_person_text)).toBeDefined();
    });

    // test("Should render elements for Customer consent for poitiacally exposed person", async () => {
    //     useSessionFunc("", "", false ,true,true);
    //     const { getByTestId } = render(
    //         <CustomerConsent {...props} navigation={jest.fn()} />
    //     );
    //     // expect(getByTestId(TestIds.pop_up_camera_signature)).toBeDefined(); //not used in screen
    //     // expect(getByTestId(TestIds.pop_up_library_signature)).toBeDefined();
        
    // });

    test("Should work all checkboxes ",async () => {
    
        const { getByTestId } = render(
          <CustomerConsent
          
          
            onChange={jest.fn()}
           {...props} />
        );
        const id = getByTestId(TestIds.cc_indian_citizen_checkbox);
        await fireEvent(id, 'onChange');
        const id2 = getByTestId(TestIds.cc_politically_exposed_checbox);
        await fireEvent(id2, 'onChange');
        const id3 = getByTestId(TestIds.cc_terms_and_conditions_checkbox);
        await fireEvent(id3, 'onChange');
        const id4 = getByTestId(TestIds.cc_consent_checkbox);
        await fireEvent(id4, 'onChange');
        const id5 = getByTestId(TestIds.cc_back_button);
        await fireEvent(id5, 'onPress');
        // const id6 = getByTestId(TestIds.cc_active_button);
        // await fireEvent(id6, 'onPress');
        const id7 = getByTestId(TestIds.cc_recapture_signature);
        await fireEvent(id7, 'onPress');
        useSessionFunc("");
       render(
            <CustomerConsent {...props} />
        );
        const id9 = getByTestId(TestIds.pop_up_politically_exposed_person);
        await fireEvent(id9, 'buttonPress');
        const id10 = getByTestId("TestCancel1");
        await fireEvent(id10, 'cancelButtonPress');

        const id12 = getByTestId(TestIds.cc_CIBIL_text);
        await fireEvent(id12, 'onPress');
        const id13 = getByTestId(TestIds.cc_terms_and_conditions_text);
        await fireEvent(id13, 'onPress');
        const id16 = getByTestId(TestIds.cc_indian_citizen_checkbox);
        await fireEvent(id16, 'onChange');
        const id14 = getByTestId(TestIds.cc_foreign_TIN);
        await fireEvent(id14, 'onChangeText',23232323);
        const id15 = getByTestId(TestIds.cc_tax_country_select);
        await fireEvent(id15, 'onChange',{displayText:"Andora"});
        const id11 = getByTestId(TestIds.cc_active_button);
        await fireEvent(id11, 'onPress');
      });
});