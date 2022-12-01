import React from 'react';
import {render} from '@testing-library/react-native';
import MonthlyHighlights from './index';
import {TestIds} from '../../../../Utils/Constants';
import { View as MockView, } from 'react-native';

// mock CCL component library
jest.mock('@idfc/ccl-mobile/lib/module/v2', () => {
  const RenderPropsWithChildren = props => {
    const { children } = props;
    return <MockView {...props}>{children}</MockView>;
  };
  return {
    StyledText: RenderPropsWithChildren
  };
});

const props =[
    {id: 1, flag: 'total', value: 100, title: 'Total Applications'},
    {id: 2, flag: 'success', value: 80, title: 'Successful Applications'},
    {id: 3, flag: 'pending', value: 200, title: 'Application In Progress'},
  ]
test('Should render elements', () => {
    const {queryByTestId} = render(<MonthlyHighlights monthlyHighlights={props}/>);
    expect(queryByTestId(TestIds.db_total_app)).toBeDefined();
    expect(queryByTestId(TestIds.db_successful_app)).toBeDefined();
    expect(queryByTestId(TestIds.db_app_in_progress)).toBeDefined();
  });
  
 