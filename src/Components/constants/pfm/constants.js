import Labels from 'translations/transaction/labels';
import { MONTHLY } from 'components/MonthYearPicker/MonthYearPicker.constants';

const HISTORY_CONTAINER = {
  GROUP_HEADER_HEIGHT: 79.7,
  ITEM_HEIGHT: 55.3,
  NOTCH_HEIGHT: 35,
  ACCOUNT_HEADER_HEIGHT: 60,
  DASHBOARD_TAB_BAR_HIEGHT: 48,
  BOTTOM_TAB_BAR_HEIGHT: 84,
  VIEW_FULL_HISTORY_HEIGHT: 50.7,
  MINIMUM_HISTORY_HEIGHT: 130,
};

export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

export const DOWNLOAD_TRANSACTIONS_SKIP = 0;

export const ERR_PFM_NO_AUTHORIZED_ACCOUNT = 'ERR_PFM_NO_AUTHORIZED_ACCOUNT';

export const OPEN_SAVINGS_ACC_URL =
  'https://www.idfcfirstbank.com/content/idfcsecure/en/open-savings-account-online.html';

export const ACCOUNT_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DORMANT: 'DORMANT',
  CLOSED: 'CLOSED',
  PRECREATED: 'PRECREATED',
};

export const SUB_CATEGORY_TYPES = {
  INCOME: 'Income',
  SAVINGS: 'Savings',
  EXPENSES: 'Expenses',
  EXCLUDE: 'Exclude',
};

export const API_STATUS = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  IN_PROGRESS: 'IN_PROGRESS',
  DISMISS: 'DISMISS',
};

export const API_CALLS = {
  MENIGA_ACCOUNTS: 'MENIGA_ACC',
  TRANSACTIONS: 'TRANSACTIONS',
  CASHFLOW_SERIES: 'CASHFLOW_SERIES',
  CASHFLOW_ANALYSIS: 'CASHFLOW_ANALYSIS',
  UNCERTAIN_TRANSACTIONS_COUNT: 'UNCERTAIN_TRANSACTIONS_COUNT',
  CASHFLOW_TRACKERS: 'CASHFLOW_TRACKERS',
  INVESTMENT_DETAILS: 'INVESTMENT_DETAILS',
  PERMISSIONS: 'PERMISSIONS',
};

export const UPI_STATUS = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  TIMEOUT: 'TIMEOUT',
};

export const upiStatusMappings = {
  [UPI_STATUS.SUCCESS]: Labels.TRANSACTION_TYPE_FILTERS_UPI_SUCCESS,
  [UPI_STATUS.FAILURE]: Labels.TRANSACTION_TYPE_FILTERS_UPI_FAILURE,
  [UPI_STATUS.TIMEOUT]: Labels.TRANSACTION_TYPE_FILTERS_UPI_TIMEOUT,
};

export const EMI_STATUS = {
  ELIGIBLE_FOR_EMI: 'ELIGIBLE_FOR_EMI',
  CONVERTED_TO_EMI: 'CONVERTED_TO_EMI',
};

export const emiStatusMappings = {
  [EMI_STATUS.ELIGIBLE_FOR_EMI]: Labels.TRANSACTION_TYPE_FILTERS_ELIGIBLE_FOR_EMI,
  [EMI_STATUS.CONVERTED_TO_EMI]: Labels.TRANSACTION_TYPE_FILTERS_CONVERTED_TO_EMI,
};

export const MENIGA_ACCOUNT_CATEGORIES = {
  EXTERNAL_UPI: 'ExternalUPI',
  CREDIT: 'Credit',
  SAVINGS: 'Savings',
};

export const INITIAL_STATE = 'INITIAL_STATE';

export default HISTORY_CONTAINER;

export const MONEY_IN = 'MoneyIn';
export const MONEY_OUT = 'MoneyOut';
export const EXPENSES = 'Expenses';
export const MONEY_INVESTED = 'MoneyInvested';

export const PFM_SCREEN_NAMES = {
  transactions: 'transactions',
  CASH_FLOW_SUMMARY_DETAILS: 'CashflowSummaryDetails',
  CASH_FLOW_MONEY_IN: MONEY_IN,
  CASH_FLOW_MONEY_OUT: MONEY_OUT,
  CASH_FLOW_MONEY_INVESTED: 'MoneyInvested',
  MY_FINANCES: 'MyFinances',
  CASH_FLOW_CATEGORY_DETAILS_SCREEN: 'cashflowCategoryDetailsScreen',
  CASH_FLOW_SUB_CATEGORY_DETAILS_SCREEN: 'cashflowSubCategoryDetailsScreen',
};

export const EARNING_CARDS_WEB_VIEW_URLS = {
  CREDIT_CARD: 'https://www.idfcfirstbank.com/credit-card',
  OPEN_SAVINGS_ACCOUNT: 'https://www.idfcfirstbank.com/content/idfcsecure/en/open-savings-account-online.html',
  BUSINESS_BANKING_OFFERS: 'https://www.idfcfirstbank.com/business-banking/business-banking-offers.html',
};

export const CASH_FLOW_ANALYSIS_TYPE_CATEGORY = 'Category';
export const CASH_FLOW_ANALYSIS_TYPE_SUB_CATEGORY = 'SubCategory';
export const CASH_FLOW_ANALYSIS_GROUP_BY = [EXPENSES, MONEY_IN, MONEY_OUT, MONEY_INVESTED];

export const CANCEL_TOKEN_ERROR = 'CANCEL_TOKEN_ERROR';

export const TRANSACTION_CATEGORY_TYPE_MAP = {
  Expenses: MONEY_OUT,
  Income: MONEY_IN,
  Savings: MONEY_INVESTED,
};

export const CALENDAR_MONTHLY_MODE = MONTHLY;

export const NOOP = () => {};

export const GOAL_CATAGORIES = {
  CHILDE_EDUCATION: "CHILD'S EDUCATION",
  RETIREMENT: 'RETIREMENT',
};
