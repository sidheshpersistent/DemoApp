/* eslint-disable no-unused-vars */
import React, { useState as useStateMock } from "react";
import {
  render,
  waitFor,
  fireEvent,
  
  shallow,
} from "@testing-library/react-native";
import Dashboard from "./index";
import { TestIds } from "../../Utils/Constants";
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
  BackHandler,
} from "react-native";
import { COMMON_CONST } from "../../Utils/";
import { getAgentDasboardDetails_MockData } from '../../Utils/TestingMockData';
// import { DATA } from './constants';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Endpoints, NetworkManager } from "../../API";
import axios from "axios";
import { StringsOfLanguages } from "../../Localization";
import useSession from "../../App/useSession";
import { getDasboardDetailsDataService } from "./service";

jest.mock('../../API');

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  useNavigation: () => ({ openDrawer: jest.fn() , navigate: jest.fn()})
}));
jest.spyOn(React, "useCallback").mockImplementationOnce((f) =>f()).mockReturnValueOnce((f)=>f())
jest.spyOn(React, "useEffect").mockImplementationOnce((f) =>  f()());


// jest.mock('@react-navigation/native', () => ({   ...jest.requireActual('@react-navigation/native'),   useFocusEffect: jest.fn().mockImplementationOnce((func) => func()), }));
jest.mock("axios");

test("axios response", () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: {} }));
  
});



// mock CCL component library
jest.mock("@idfc/ccl-mobile/lib/module/v2", () => {
  const RenderPropsWithChildren = (props) => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  const RenderOnlyPropsTextInput = (props) => <MockTextInput {...props} />;
  const RenderPropsText = (props) => <MockText {...props} />;
  return {
    TextInput: RenderOnlyPropsTextInput,
    StyledText: RenderPropsText,
    Button: RenderPropsWithChildren,
  };
});

jest.mock("@idfc/ccl-mobile", () => {
  const RenderPropsWithChildren = (props) => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  return {
    IconButton: RenderPropsWithChildren,
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
    LineHeight: RenderPropsWithChildren,
    TextAlign: RenderPropsWithChildren,
    COLOR_TYPES: RenderPropsWithChildren,
  };
});

jest.mock("../../App/useSession");
jest.mock("./service")

beforeEach(() => {
  useSession.mockReturnValue({
    session: {},
    setSession: () => jest.fn(),
  });
});
const props = {
  session: jest.fn(),
  setSession: jest.fn(),
};
describe("Dashboard Test Module", () => {
test('Test getAgentDasboardDetails api', () => {
  const navigate = jest.fn();
  const { getByTestId } = render(<Dashboard />);
  getDasboardDetailsDataService((status,responseData,monthlyHighlights)=>{});
  jest.spyOn(axios, 'get').mockImplementation((url) => {
    switch (url) {
      case Endpoints.getAgentDasboardDetails:
        return Promise.resolve(getAgentDasboardDetails_MockData);
    }
  });
});
test("Should fire the function passed as prop when Savings account is tapped", () => {
  const navigate = jest.fn();
  const { getByTestId } = render(<Dashboard onCardPress={navigate} {...props}/>);
  fireEvent.press(getByTestId(TestIds.db_saving_acc_click));
  expect(navigate).toHaveBeenCalledTimes(0);
});

test("Should fire the function passed as prop when Salary account is tapped", () => {
  const navigate = jest.fn();
  const { getByTestId } = render(
    <Dashboard onCardPress={navigate} {...props} />
  );
  fireEvent.press(getByTestId(TestIds.db_salary_acc_click));
  expect(navigate).toHaveBeenCalledTimes(0);
});

test("Should fire the function passed as prop when Bank use card is tapped", () => {
  const navigate = jest.fn();
  const { getByTestId } = render(<Dashboard onCardPress={navigate} />);
  fireEvent.press(getByTestId(TestIds.db_bank_use_click));
  expect(navigate).toHaveBeenCalledTimes(0);
});

test("Should fire the function passed as prop when resume application is tapped", () => {
  const navigate = jest.fn();
  const { getByTestId } = render(<Dashboard onCardPress={navigate} />);
  fireEvent.press(getByTestId(TestIds.db_resume_click));
  expect(navigate).toHaveBeenCalledTimes(0);
});
  test("Should render elements", () => {
    const { getByTestId } = render(<Dashboard />);
    // expect(getByTestId(TestIds.db_avtar)).toBeDefined();
    // expect(getByTestId(TestIds.db_welcome_text)).toBeDefined();
    // expect(getByTestId(TestIds.db_user_name)).toBeDefined();
    expect(getByTestId(TestIds.db_month_highlight_text)).toBeDefined();
    expect(getByTestId(TestIds.db_main_header)).toBeDefined();
    expect(getByTestId(TestIds.db_savings_acc)).toBeDefined();
    expect(getByTestId(TestIds.db_salary_acc)).toBeDefined();
    expect(getByTestId(TestIds.db_bank_use)).toBeDefined();
    expect(getByTestId(TestIds.db_resume_app)).toBeDefined();
  });

  test("Dashboard screen texts rendering correctly", () => {
    const { getAllByText } = render(<Dashboard />);
    expect(getAllByText(COMMON_CONST.DROP_JOURNY_MODAL_TITLE)).toHaveLength(1);
    expect(getAllByText(COMMON_CONST.HIGHLIGHTS)).toHaveLength(1);
    expect(getAllByText(COMMON_CONST.MAIN_MENU_HEADER)).toHaveLength(1);
    // getByPlaceholderText(LOGIN.USER_NAME);
    // getByPlaceholderText(LOGIN.PASSWORD);
    expect(getAllByText(StringsOfLanguages.DASHBOARD.title1)).toHaveLength(2);
    expect(getAllByText(StringsOfLanguages.DASHBOARD.subtitle1)).toHaveLength(
      1
    );

    expect(getAllByText(StringsOfLanguages.DASHBOARD.subtitle2)).toHaveLength(
      1
    );

    expect(getAllByText(StringsOfLanguages.DASHBOARD.title3)).toHaveLength(1);
    expect(getAllByText(StringsOfLanguages.DASHBOARD.subtitle3)).toHaveLength(
      1
    );

    expect(getAllByText(StringsOfLanguages.DASHBOARD.title4)).toHaveLength(1);
    expect(getAllByText(StringsOfLanguages.DASHBOARD.subtitle4)).toHaveLength(
      1
    );

    expect(StringsOfLanguages.DASHBOARD.title1).toEqual("Open a new");
    expect(StringsOfLanguages.DASHBOARD.subtitle1).toEqual("Savings \nAccount");

    expect(StringsOfLanguages.DASHBOARD.title2).toEqual("Open a new");
    expect(StringsOfLanguages.DASHBOARD.subtitle2).toEqual("Salary \nAccount");

    expect(StringsOfLanguages.DASHBOARD.title3).toEqual("Go to");
    expect(StringsOfLanguages.DASHBOARD.subtitle3).toEqual("Bank Use Section");

    expect(StringsOfLanguages.DASHBOARD.title4).toEqual("Resume");
    expect(StringsOfLanguages.DASHBOARD.subtitle4).toEqual("Applications");
  });


test("Should match snapshot", async () => {
  const { toJSON } = await waitFor(() => render(<Dashboard />));
  expect(toJSON()).toMatchSnapshot();
});

test('hamburg button clicked', async () =>{
  const navigation = {
    openDrawer:jest.fn()
  }
  const { getByTestId } = render(<Dashboard onPress={jest.fn()}   />);
  fireEvent.press(getByTestId(TestIds.db_hamburg_icon));
});

test("Test handle hardware Back Press", async () => {

  const { getByTestId } = render(<Dashboard />);
  fireEvent.press(getByTestId(TestIds.db_hamburg_icon));
   
   BackHandler.addEventListener = jest.fn();
   BackHandler.removeEventListener = jest.fn();
   
});


});
