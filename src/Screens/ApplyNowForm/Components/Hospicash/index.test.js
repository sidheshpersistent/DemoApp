import 'react-native';
import React from 'react';
import { fireEvent, render,waitFor} from '@testing-library/react-native';


// import { TestIds, LOGIN } from '../../Utils/Constants';
import { TextInput as MockTextInput, View as MockView, Text as MockText, ImageBackground as MockImageBackground } from 'react-native';


import Hospicash from './index';
import useSession from '../../../../App/useSession';
import { background2, hospicashOffer1, hospicashOffer2, hospicashOffer3 } from '../../../../Assets/Images';
import { TestIds } from '../../../../Utils';

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
    Checkbox:RenderOnlyProps,
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
jest.mock("../../../../App/useSession");

beforeEach(() => {
  useSession.mockReturnValue({
    session: {
        availedCardFlag:"hospicash"
      },
    
    setSession: () => jest.fn(),
  });
});

const props = {

  session: jest.fn(),
  setSession: jest.fn(),
  isNomineAddressSame:false,
  response:{
    CardId: 2,
    cardFlag: "Hospicash",
    backgroundImage: background2,
    title: "Apply for Group Safeguard Insuarance",
    terms:"https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/Declaration-and-T_C-for-AEM-Journey.html?alt=media&token=ed1fa250-2481-4613-9025-06adc853c200",
    declaration:"https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/Annexure-3_Policy-Wordings-Group-Safeguard-Insurance.html?alt=media&token=0fa66900-ca51-4cd2-81b1-2835f762ed4b",
    subTitle:
      "Please review all the application details carefully before proceeding to apply for the product",
    warning:
      "Please fund your ABC account within 24 hours to avoid any rejection to your Group Safeguard insuarance application",
    CardData: {
      cardName: "Group Safegaurd Insuarance",
      cardSubtitle_1:
        "hospitalisation cover of upto ₹3,60,000**  at just ₹2200*",
      cardSubtitle_2: " * inclusive of taxes",
      cardSubtitle_3:
        "** in case of ICU hospitalisation due to accident for 30 days",

      Offers: [
        {
          id: 1,
          offerImg: hospicashOffer1,
          offerData:
            "₹4,000 per day for up to 30 days on completion of 24 hours of hospitalisation",
        },
        {
          id: 2,
          offerImg: hospicashOffer2,
          offerData: "All pre-existing are covered after 30 days",
        },
        {
          id: 3,
          offerImg: hospicashOffer3,
          offerData: "No medical check-up required",
        },
      ],
    },
  },
};

describe('Hospicash test module', () => {
  
  test('Should match snapshot', async () => {
    const { toJSON } = await waitFor(() => render(<Hospicash {...props} />));
    expect(toJSON()).toMatchSnapshot();
  });

  test("Should click on fields", async () => {
    const { getByTestId } = render(
      <Hospicash {...props}  />
    );
    const id = getByTestId(TestIds.hc_nominee_name);
    id.props.textInputProps.onChangeText("nominee name")
    //await fireEvent(id, 'onPress');
    const id2 = getByTestId(TestIds.hc_insured_relation);
    await fireEvent(id2, 'onChange');
    const id3 = getByTestId(TestIds.hc_nomineeDOB);
    id3.props.datePickerProps.onSetDatePress("October 13, 2020- 11:13:00")
    await fireEvent(id3, 'selectedDate',"October 13, 2020 11:13:00");
    render(
        <Hospicash {...props}  />
      );
    const id4 = getByTestId(TestIds.hc_is_nomineeAddressSame);
    await fireEvent(id4, 'onChange',false);
  
   render(
        <Hospicash {...props}  />
      );
    const id5 = getByTestId(TestIds.hc_nominee_pincode);
    id5.props.textInputProps.onChangeText("231217")
    const id6 = getByTestId(TestIds.hc_nominee_state);
    await fireEvent(id6, 'onChange');
    const id7 = getByTestId(TestIds.hc_nominee_city);
    await fireEvent(id7, 'onChange');
    const id8 = getByTestId(TestIds.hc_nominee_address1);
    id8.props.textInputProps.onChangeText("231217")
    const id9 = getByTestId(TestIds.hc_nominee_address2);
    id9.props.textInputProps.onChangeText("231217")
    const id10 = getByTestId(TestIds.hc_nominee_address_3);
    id10.props.textInputProps.onChangeText("231217")
    const id11 = getByTestId(TestIds.hc_terms_checkbox);
    await fireEvent(id11, 'onChange');
    const id12 = getByTestId(TestIds.hc_terms_text);
    await fireEvent(id12, 'onPress');
    const id13 = getByTestId(TestIds.hc_declaration_checkbox);
    await fireEvent(id13, 'onChange');
    const id14 = getByTestId(TestIds.hc_declaration_text);
    await fireEvent(id14, 'onPress');
    const id15 = getByTestId(TestIds.hc_apply_now_button);
    await fireEvent(id15, 'buttonPress');
    
  });

});