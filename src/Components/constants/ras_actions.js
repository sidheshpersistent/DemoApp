export const RAS_ACTIONS = {
  DEPOSIT_ADVICE: 'DEPOSIT_ADVICE',
  FUND_TRANSFER: 'FUND_TRANSFER',
  REQUEST_VIRTUAL_CARD: 'REQUEST_VIRTUAL_CARD',
  ADD_OR_CHANGE_NOMINEE: 'ADD_OR_CHANGE_NOMINEE',
  CLOSE_DEPOSIT: 'CLOSE_DEPOSIT',
  CREATE_DEPOSIT: 'CREATE_DEPOSIT',
  ACCOUNT_STATEMENT: 'ACCOUNT_STATEMENT',
  VIEW_ACCOUNT: 'VIEW_ACCOUNT',

  REQUEST_CHEQUEBOOK: 'REQUEST_CHEQUEBOOK',
  CHEQUE_BOOK_LIST: 'CHEQUE_BOOK_LIST',
  GET_UNUSED_CHEQUE_NUMBERS: 'GET_UNUSED_CHEQUE_NUMBERS',
  GET_CHEQUES: 'GET_CHEQUES',
  ADD_CHEQUE: 'ADD_CHEQUE',
  UPDATE_CHEQUE: 'UPDATE_CHEQUE',
  STOP_CHEQUE: 'STOP_CHEQUE',
  STOP_CANCEL_CHEQUE: 'STOP_CANCEL_CHEQUE',
  SIGNATURE_UPLOAD: 'SIGNATURE_UPLOAD',
};

export const getRetailChequebookActions = () => {
  return [
    RAS_ACTIONS.REQUEST_CHEQUEBOOK,
    RAS_ACTIONS.CHEQUE_BOOK_LIST,
    RAS_ACTIONS.GET_UNUSED_CHEQUE_NUMBERS,
    RAS_ACTIONS.GET_CHEQUES,
    RAS_ACTIONS.ADD_CHEQUE,
    RAS_ACTIONS.UPDATE_CHEQUE,
    RAS_ACTIONS.STOP_CHEQUE,
    RAS_ACTIONS.STOP_CANCEL_CHEQUE,
  ];
};

export const getManageChequebookActions = () => {
  return [
    RAS_ACTIONS.CHEQUE_BOOK_LIST,
    RAS_ACTIONS.GET_UNUSED_CHEQUE_NUMBERS,
    RAS_ACTIONS.GET_CHEQUES,
    RAS_ACTIONS.ADD_CHEQUE,
    RAS_ACTIONS.UPDATE_CHEQUE,
    RAS_ACTIONS.STOP_CHEQUE,
    RAS_ACTIONS.STOP_CANCEL_CHEQUE,
  ];
};

export const getRetailChequebookActionsWithActionContext = () => {
  let permissionObjectWithContext = [];

  getRetailChequebookActions().forEach(action => {
    permissionObjectWithContext = [
      ...permissionObjectWithContext,
      {
        action,
        actionContext: {},
        ignoreConditions: true,
        filters: ['account'],
        checkRetailPermission: true,
      },
    ];
  });

  return permissionObjectWithContext;
};
