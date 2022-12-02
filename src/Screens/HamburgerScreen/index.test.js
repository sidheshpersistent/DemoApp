import "react-native";
import React from "react";
import { render , fireEvent} from "@testing-library/react-native";
import { TestIds } from "../../Utils/Constants";

import HamburgerScreen from ".";

const navigation = {
  closeDrawer:jest.fn()
}

describe("Hamburger Screen", () => {
  test("Should render elements", () => {
    const MockFunc = jest.fn();
    const { getByTestId } = render(<HamburgerScreen onPress={MockFunc} navigation={navigation} />);
    fireEvent.press(getByTestId(TestIds.hm_close_drawer));
    fireEvent.press(getByTestId(TestIds.hm_open_hh_acc));
    fireEvent.press(getByTestId(TestIds.hm_open_cs_acc));
    fireEvent.press(getByTestId(TestIds.hm_bank_use_section));
    fireEvent.press(getByTestId(TestIds.hm_resume_journey));
    fireEvent.press(getByTestId(TestIds.hm_transaction));
    fireEvent.press(getByTestId(TestIds.hm_logout));

});

  // test("close drawer", () => {
  //   const { wrapper } = render(<HamburgerScreen />);
  //   // closeDrawer();
  // });


});
