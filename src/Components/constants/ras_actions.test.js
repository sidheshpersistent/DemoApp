import {
  getRetailChequebookActions,
  getManageChequebookActions,
  getRetailChequebookActionsWithActionContext,
} from './ras_actions';

describe('RAS_ACTIONS', () => {
  it('should return Retail Cheque book Actions', () => {
    expect(getRetailChequebookActions()).toStrictEqual([
      'REQUEST_CHEQUEBOOK',
      'CHEQUE_BOOK_LIST',
      'GET_UNUSED_CHEQUE_NUMBERS',
      'GET_CHEQUES',
      'ADD_CHEQUE',
      'UPDATE_CHEQUE',
      'STOP_CHEQUE',
      'STOP_CANCEL_CHEQUE',
    ]);
  });

  it('should test Manage Cheque book Actions', () => {
    expect(getManageChequebookActions()).toStrictEqual([
      'CHEQUE_BOOK_LIST',
      'GET_UNUSED_CHEQUE_NUMBERS',
      'GET_CHEQUES',
      'ADD_CHEQUE',
      'UPDATE_CHEQUE',
      'STOP_CHEQUE',
      'STOP_CANCEL_CHEQUE',
    ]);
  });

  it('should test retail Cheque book Actions with empty actionContext and ignoreConditions as true', () => {
    expect(getRetailChequebookActionsWithActionContext()).toStrictEqual([
      {
        action: 'REQUEST_CHEQUEBOOK',
        actionContext: {},
        checkRetailPermission: true,
        ignoreConditions: true,
        filters: ['account'],
      },
      {
        action: 'CHEQUE_BOOK_LIST',
        actionContext: {},
        checkRetailPermission: true,
        ignoreConditions: true,
        filters: ['account'],
      },
      {
        action: 'GET_UNUSED_CHEQUE_NUMBERS',
        actionContext: {},
        checkRetailPermission: true,
        ignoreConditions: true,
        filters: ['account'],
      },
      {
        action: 'GET_CHEQUES',
        actionContext: {},
        checkRetailPermission: true,
        ignoreConditions: true,
        filters: ['account'],
      },
      {
        action: 'ADD_CHEQUE',
        actionContext: {},
        checkRetailPermission: true,
        ignoreConditions: true,
        filters: ['account'],
      },
      {
        action: 'UPDATE_CHEQUE',
        actionContext: {},
        checkRetailPermission: true,
        ignoreConditions: true,
        filters: ['account'],
      },
      {
        action: 'STOP_CHEQUE',
        actionContext: {},
        checkRetailPermission: true,
        ignoreConditions: true,
        filters: ['account'],
      },
      {
        action: 'STOP_CANCEL_CHEQUE',
        actionContext: {},
        checkRetailPermission: true,
        ignoreConditions: true,
        filters: ['account'],
      },
    ]);
  });
});
