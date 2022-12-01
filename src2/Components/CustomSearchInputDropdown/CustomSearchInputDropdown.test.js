import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";
import CustomSearchInputDropdown from "./CustomSearchInputDropdown";

jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
jest.spyOn(React, "useCallback").mockImplementationOnce((f) => f());
// mock CCL component library
jest.mock("@idfc/ccl-mobile/lib/module/v2", () => {
  const RenderPropsWithChildren = (props) => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  const RenderOnlyPropsTextInput = props => <MockTextInput {...props} />;
  const RenderPropsText = (props) => <MockText {...props} />;
  const RenderOnlyProps = (props) => <MockView {...props} />;
  return {
    StyledText: RenderPropsText,
    Button: RenderPropsWithChildren,
    Select: RenderOnlyProps,
    TextInput: RenderOnlyPropsTextInput,
  };
});

const props={
  placeholder:"placeholder",
        
        searchList:[{displayText:"12345"},{displayText:"23456"}],
        clickHandler:jest.fn(),
        isRankListAvailable:true,
        resetRankList:jest.fn(),
        value:"value",
        onCrossPress:jest.fn(),
        onChangeText:jest.fn(),
  testID:"testID"

}


describe("CustomSearchInputDropdown Test Module", () => {
  test("Should match snapshot", async () => {
    
    const { toJSON } = await waitFor(() => render(<CustomSearchInputDropdown {...props} />));
    expect(toJSON()).toMatchSnapshot();

  });
  test('test ', async () => {
    
    const { getByTestId } = render(<CustomSearchInputDropdown {...props} />);
    const id1=getByTestId(props.testID)
    await fireEvent(id1, 'onBlur');
    await fireEvent(id1, 'onChangeText',"23456");
    await fireEvent(id1, 'onChangeText',"238765");
  });

});
