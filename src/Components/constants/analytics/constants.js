export const PAGE_EVENT_STATUS = {
  ONGOING: 'ongoing',
  CLOSE: 'close',
  SUCCESS: 'success',
  ERROR: 'error',
  REJECT: 'reject',
};

export const PAGE_EVENT_TRACK = {
  CREATE_FD: {
    PAGE_NAME: 'createfd',
    LINK_NAME: {
      CLOSE: 'createfd_close',
      SUBMIT: 'createfd_submit',
    },
    PRODUCT_NAME: 'fixed deposit',
  },
  CREATE_RD: {
    PAGE_NAME: 'createrd',
    LINK_NAME: {
      CLOSE: 'createrd_close',
      SUBMIT: 'createrd_submit',
    },
    PRODUCT_NAME: 'recurring deposit',
  },
  ACCOUNT_LIST: {
    PAGE_NAME: 'accounts',
    LINK_NAME: {
      ADD_OR_CHANGE_NOMINEE: 'add_or_change_nominee',
      ACCOUNT_DETAILS: 'account_details',
      VIEW_TRANSACTIONS: 'view_transactions',
      ADD_FUNDS: 'add_funds',
      VIEW_STATEMENT: 'view_statement',
      REQUEST_CHEQUE_BOOK: 'request_cheque_book',
      MANAGE_CHEQUE_BOOK: 'manage_cheque_book',
      DOWNLOAD_STATEMENT: 'download_statement',
    },
  },
  ACCOUNT_DETAILS: {
    PAGE_NAME: 'AccountDetails',
    LINK_NAME: {
      ADD_OR_CHANGE_NOMINEE: 'add_or_change_nominee',
      VIEW_TRANSACTIONS: 'view_transactions',
      ADD_FUNDS: 'add_funds',
      VIEW_STATEMENT: 'view_statement',
      REQUEST_CHEQUE_BOOK: 'request_cheque_book',
      MANAGE_CHEQUE_BOOK: 'manage_cheque_book',
      CREATE_OD_AGAINST_FD: 'create_od_against_fd',
      MANAGE_OD_AGAINST_FD: 'manage_od_against_fd',
      DOWNLOAD_STATEMENT: 'download_statement',
    },
  },
  DEPOSITS: {
    PAGE_NAME: 'deposits',
    LINK_NAME: {
      DEPOSIT_DETAILS: 'deposit_details',
      CREATE_FD: 'create_fd',
      CREATE_RD: 'create_rd',
      CLOSE_FD: 'close_fd',
      CLOSE_RD: 'close_rd',
      ADD_OR_CHANGE_NOMINEE: 'add_or_change_nominee',
      DOWNLOAD_FD_ADVICE: 'download_fd_advice',
      DOWNLOAD_RD_ADVICE: 'download_rd_advice',
      EMAIL_FD_ADVICE: 'email_fd_advice',
      EMAIL_RD_ADVICE: 'email_rd_advice',
    },
  },
  DEPOSIT_DETAILS: {
    PAGE_NAME: 'DepositDetails',
    LINK_NAME: {
      CLOSE_FD: 'close_fd',
      CLOSE_RD: 'close_rd',
      ADD_OR_CHANGE_NOMINEE: 'add_or_change_nominee',
      DOWNLOAD_FD_ADVICE: 'download_fd_advice',
      DOWNLOAD_RD_ADVICE: 'download_rd_advice',
      EMAIL_FD_ADVICE: 'email_fd_advice',
      EMAIL_RD_ADVICE: 'email_rd_advice',
      CREATE_OD_AGAINST_FD: 'create_od_against_fd',
      MANAGE_OD_AGAINST_FD: 'manage_od_against_fd',
    },
  },
  DEBIT_CARD_LIST: {
    PAGE_NAME: 'cards',
    LINK_NAME: {
      DEBIT_CARD_DETAIL: 'debit_card_details',
      CHANGE_PIN: 'change_pin',
      GENERATE_PIN: 'generate_pin',
      TEMPORARY_BLOCK: 'temporary_block',
      PERMANENT_BLOCK: 'permanent_block',
      UNBLOCK: 'unblock',
      RE_ISSUE_CARD: 're_issue_card',
      REQUEST_VIRTUAL_CARD: 'request_virtual_card',
    },
  },
  DEBIT_CARD_DETAIL: {
    PAGE_NAME: 'DEBIT_CARD_DETAIL',
    LINK_NAME: {
      CHANGE_PIN: 'change_pin',
      GENERATE_PIN: 'generate_pin',
      TEMPORARY_BLOCK: 'temporary_block',
      PERMANENT_BLOCK: 'permanent_block',
      UNBLOCK: 'unblock',
      RE_ISSUE_CARD: 're_issue_card',
      CONVERT_TO_PHYSICAL_CARD: 'convert_to_physical_card',
      MANAGE_ATM_LIMIT: 'manage_atm_limit',
      MANAGE_PURCHASE_LIMIT: 'manage_purchase_limit',
      DEBITCARD_MANDATE: 'debitcard_mandate',
    },
  },
  INSURANCE_REDIRECTION_DISCLAIMER: {
    PAGE_NAME: code => `Wealth_Insurance_Redirection_Disclaimer_${code}_Proceed`,
    LINK_NAME: 'Proceed',
  },
  PAY_ABROAD: {
    LINK_NAME: {
      PAY_ABROAD_ACCOUNT_SELECT: 'pay_abroad_account_select',
    },
  },
};

export const CLICK_STREAM_TRACK = {
  OPEN_SAVINGS_ACCOUNT_LINK: 'open_savings_account_link',
  PROFILE_SWITCHING: 'profile_switching',
  REFER_AND_EARN_LINK: 'refer_and_earn_link',
  REFER_NOW_LINK: 'refer_now_explore_tab',
};
