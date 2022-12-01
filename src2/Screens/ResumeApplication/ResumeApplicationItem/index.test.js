import "react-native";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { View as MockView, Text as MockText, TextInput as MockTextInput, } from "react-native";

import Item from ".";
jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
afterEach(() => {
  jest.clearAllMocks();
});

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
    item:{
        customerName:"name",
        journeyUpdatedDate:"dd-mm-yyyy",
        journeyPercentage:20
    },
    index:0,
    onNext:jest.fn(),
    onDelete:jest.fn()
}

describe("PopupTextInput Test Module", () => {
  test("Should render elements", () => {
    const { getByTestId } = render(<Item {...props}/>);
    expect(getByTestId("test1")).toBeDefined();
    expect(getByTestId("test2")).toBeDefined();
  });

  test("Should match snapshot", async () => {
    const { toJSON } = await waitFor(() => render(<Item {...props}/>));
    expect(toJSON()).toMatchSnapshot();
  });

  test("Should fire the function passed as prop when onpress",async () => {
    const { getByTestId } = render(
      <Item
      {...props}
      />
    );
    
    const id1=getByTestId("test1")
    await fireEvent(id1,'onPress')
    const id2=getByTestId("test2")
    await fireEvent(id2,'onPress')
   
    

  });
});
