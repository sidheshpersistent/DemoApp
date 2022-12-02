import 'react-native';
import React from 'react';
import { render,waitFor} from '@testing-library/react-native';

// import { TestIds, LOGIN } from '../../Utils/Constants';
import { TextInput as MockTextInput, View as MockView, Text as MockText, ImageBackground as MockImageBackground } from 'react-native';
// import { customerDataService } from "./personalDetail/services";

import AadhaarSuccess from './index';

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
      Icon: RenderPropsWithChildren,
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

  const props = {
    route : {
        params:{
            option:{
                type : "linking"
            }
        }
    },
    session: jest.fn(),
    setSession: jest.fn(),
  };

  describe('AadhaarSuccess Test Module', () => {
    test('Should match snapshot', async () => {
      const { toJSON } = await waitFor(() => render(<AadhaarSuccess {...props} />));
      expect(toJSON()).toMatchSnapshot();
    });
  });