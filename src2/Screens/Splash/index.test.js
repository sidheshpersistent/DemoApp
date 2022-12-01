/* eslint-disable no-unused-vars */
import React, { useState as useStateMock } from "react";
import {
  render,
  waitFor,
  fireEvent,
  shallow,
} from "@testing-library/react-native";
import Splash from "./index";
import { TestIds } from "../../Utils/Constants";
import {
  TextInput as MockTextInput,
  View as MockView,
  Text as MockText,
  BackHandler,
} from "react-native";
import { COMMON_CONST } from "../../Utils/";
// import { DATA } from './constants';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Endpoints, NetworkManager } from "../../API";
import axios from "axios";
import { StringsOfLanguages } from "../../Localization";
import useSession from "../../App/useSession";

jest.mock('../../API');
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
beforeEach(() => {
    global.setTimeout=jest.fn(cb=>cb());
  });
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ openDrawer: jest.fn() , navigate: jest.fn()})
}));

test("Should all component rendered correctly", () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<Splash/>);
    
    expect(navigate).toHaveBeenCalledTimes(0);
  });
  describe("Dashboard Test Module", () => {
    test("Should render elements", () => {
      const { getByTestId } = render(<Splash />);
      expect(getByTestId(TestIds.spl_image)).toBeDefined();
     
    });
});

test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<Splash />));
  
    expect(toJSON()).toMatchSnapshot();
  });