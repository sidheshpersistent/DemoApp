import ScreenConstants from '../screens-view-en.json';
import { translate } from '../../l10n';

const constants = ScreenConstants.HAVE.CARDS;
const apiConstants = ScreenConstants.CREDIT_CARD;

export const CARD_STATUS = {
  ACTIVE: 'NORM',
  TEMPORARILY_BLOCKED: 'FSFT',
  PERMANENTLY_BLOCKED: 'FHRD',
};
export const CARD_STGEN = {
  ACTIVE: 'NEW',
  TEMPORARILY_BLOCKED: 'NEW',
  PERMANENTLY_BLOCKED: 'FHRD',
};

export const RUPEE_SYMBOL = '\u20B9';

export const CARD_ACTION = {
  INCREASE_CREDIT_LIMIT: { label: constants.INCREASE_CREDIT_LIMIT, httpStatus: 'INCREASE_CREDIT_LIMIT' },
  PAY_CREDIT_BILL: { label: constants.PAY_CREDIT_BILL, httpStatus: 'PAY_CREDIT_BILL' },
  BLOCK: { label: translate('CREDIT_CARD.CC_TEMPORARY'), httpStatus: 'BLOCKED' },
  UNBLOCK: { label: constants.UNBLOCK, httpStatus: 'UNBLOCKED' },
  CANCEL: { label: constants.CANCEL },
  PERMANENTLY_BLOCKED: { label: translate('CREDIT_CARD.CC_PERMANENTBLOCK'), httpStatus: 'PERMANENTLY_BLOCKED' },
  REPLACE_CARD: { label: constants.REPLACE_CARD, httpStatus: 'REPLACE_CARD' },
  CHANGE_PIN: { label: constants.CHANGE_PIN },
  SET_PIN: { label: translate('CREDIT_CARD.CC_SETPIN'), httpStatus: 'SET_PIN' },
  UNMASK_CREDIT_CARD_NUMBER: { label: constants.UNMASK_CREDIT_CARD_NUMBER, httpStatus: 'UNMASK_CREDIT_CARD_NUMBER' },
  GENERATE_PIN: { label: constants.GENERATE_PIN },
  GENERATE_PHYSICAL_CARD: { label: constants.GENERATE_PHYSICAL_CARD },
  TEMP_BLOCKED: { label: constants.TEMP_BLOCKED, httpStatus: 'TEMP_BLOCKED' },
  // SHOW_HISTORY: { label: constants.SHOW_HISTORY, httpStatus: 'SHOW_HISTORY' },
  PAY_OUTSTANDING: { label: constants.PAY_OUTSTANDING, httpStatus: 'PAY_OUTSTANDING' },
  CONVERT_TO_EMI: { label: constants.CONVERT_TO_EMI, httpStatus: 'CONVERT_TO_EMI' },
  FOR_CLOSE_EMI_CANCEL: { label: constants.FOR_CLOSE_EMI_CANCEL, httpStatus: 'FOR_CLOSE_EMI_CANCEL' },
  CREDIT_CARD_EMI: { label: constants.CREDIT_CARD_EMI, httpStatus: 'CREDIT_CARD_EMI' },
  DOWNLOAD_E_STATEMENT: { label: constants.DOWNLOAD_E_STATEMENT, httpStatus: 'DOWNLOAD_E_STATEMENT' },
  CREDIT_CARD_APPLY: { label: constants.CREDIT_CARD_APPLY, httpStatus: 'CREDIT_CARD_APPLY' },
  POSHVINE: { label: constants.POSHVINE, httpStatus: 'POSHVINE' },
  CREDIT_CARD_TRANSACTION: { label: constants.CREDIT_CARD_TRANSACTION, httpStatus: 'CREDIT_CARD_TRANSACTION' },
  IMAGE_CARD: { label: translate('CREDIT_CARD.CC_IMAGECARD_CTA_TITLE'), httpStatus: 'CC_IMAGECARD_CTA_TITLE' },
  BALANCE_TRANSFER: { label: translate('CREDIT_CARD.CC_BT_CTA_TITLE'), httpStatus: 'CC_BT_CTA_TITLE' },
  APPLY_ADDON: { label: translate('CREDIT_CARD.CC_APPLY_ADDON'), httpStatus: 'CC_APPLY_ADDON_CTA_TITLE' },
};

export const BLOCK_CARD_TITLE = constants.BLOCK_PERMANENTLY;
export const REISSUE_CARD_TITLE = constants.REISSUE_CARD;
export const SYSTEM_ID = apiConstants.OPTIMUS;
export const ORIGIN = apiConstants.EXTERNAL;
export const DATA_VERSION = 0;
export const REQUEST_TYPE = apiConstants.CARD_STATUS;
export const REFERENCE_VALUE_C = apiConstants.REFERENCE_C;
export const REFERENCE_VALUE_U = apiConstants.REFERENCE_U;

export const BLOCK_REASONS = [
  { key: 'LOST_OR_STOLEN', value: constants.LOST_OR_STOLEN },
  { key: 'DAMAGED', value: constants.DAMAGED },
];

export const REQUEST_HEADER = {
  Header: {
    MessageID: '9d634eff-4695-46e0-95be-1eedee5afa42',
    SystemID: SYSTEM_ID,
    Origin: ORIGIN,
  },
};
export const PROVIDERS = {
  VISA: constants.VISA,
  RUPAY: constants.RUPAY,
  MASTER: constants.MASTER,
};

export const CARD_VARIANT = {
  PLATINUM: 'Platinum',
  SIGNATURE: 'Signature',
  BUSINESS: 'SignatureBusiness',
  CLASSIC: 'Classic',
};

export const WARNINGS = {
  BLOCK_REASON: constants.BLOCK_REASON,
  REISSUE_REASON: constants.REISSUE_REASON,
};

export const LESS_OPACITY_TEXT_CARDS = [
  CARD_STATUS.EXPIRED,
  CARD_STATUS.TEMPORARILY_BLOCKED,
  CARD_STATUS.PERMANENTLY_BLOCKED,
  CARD_STATUS.CLOSED,
];

export const LOCKED_CARD = [
  CARD_STATUS.EXPIRED,
  CARD_STATUS.TEMPORARILY_BLOCKED,
  CARD_STATUS.PERMANENTLY_BLOCKED,
  CARD_STATUS.CLOSED,
  CARD_STATUS.INACTIVE,
];

export const DISABLED_CARDS = [
  CARD_STATUS.CLOSED,
  CARD_STATUS.EXPIRED,
  CARD_STATUS.PERMANENTLY_BLOCKED,
  CARD_STATUS.INACTIVE,
];

export const TOGGLE = {
  ON: constants.ON,
  OFF: constants.OFF,
  NA: constants.NA,
};

export const { DAILY_WITHDRAWLS } = constants;
export const { INTERNATIONAL_USAGE } = constants;
export const { DAILY_PURCHASE } = constants;
export const POSHVINE_ENCRYPTION_KEY = '8e990516e545ba4103dcb32a3462c54b';
export const POSHVINE_ENCRYPTION_IV = '39d0a599ea7c1761';

export const LIMIT = {
  PURCHASE: 'PURCHASE',
  ATM_WITHDRAWAL: 'ATM_WITHDRAWAL',
};

export const API_CONST = {
  REFERENCE_VALUE_C: 'C',
  REQUEST_TYPE: 'CardStatus',
  DATA_VERSION: 0,
};

export const STATUS = {
  PAY_BILL: [
    'CLSB',
    'CLSC',
    'CLSD',
    'CLSS',
    'DCSD',
    'DECL',
    'DELD',
    'UACC',
    'AOWO',
    'BLCK',
    'CHOF',
    'CRWO',
    'MOCB',
    'PCLS',
  ],
  ACTIVE_STATUS: ['NORM', 'NEW ', 'NEW'],
  TEMP_BLOCK_STATUS: ['FSFT'],
  TEMP_BLOCK: ['NORM', 'NEW ', 'NEW'],
  SET_PIN: ['DO00', 'DO99', 'NEW', 'NEW ', 'NORM'],
  REPLACE_CARD: ['DO00', 'DO99', 'NEW', 'NORM', 'LOCH', 'LOST', 'DOM1', 'DOM2', 'LOBK', 'FSFT', 'FHRD'],
  CLOSED_CARD: ['AOWO', 'CHOF', 'CLSB', 'CLSC', 'CLSD', 'CLSS', 'CRWO', 'DCSD', 'DELD', 'MOCB', 'UACC'],
};

export const ACTIVATION = {
  ACTIVE: 'A',
  INACTIVE: 'I',
};

export const BILL_DESK_URL = 'https://pgi.billdesk.com/pgidsk/pgmerc/idfccard/IDFCCARD.jsp';

export const PayementMode = {
  Nach: 'NACH Payments',
  nach: 'NACH Payments',
  Sipm: 'Standing Instruction',
  sipm: 'Standing Instruction',
  Imps: 'IMPS Payments',
  imps: 'IMPS Payments',
  neft: 'NEFT Payments',
  pupi: 'UPI Payments',
  bdsk: 'Payment Gateway',
  chqu: 'Clearing Cheque',
  pift: 'Internal Fund Transfer',
  cash: 'Cash Payments',
};
export const CC_ERROR_CODE = {
  ERR_CC_MULE: 'ERR_MULE_NULL_RESPONSE',
  ERR_MULE_SERVICE_DOWN: 'ERR_MULE_SERVICE_DOWN',
  ERR_MULE_POST_API: 'ERR_MULE_POST_API',
  ERR_MULE_RESPONSE_VALIDATION_FAILED: 'ERR_MULE_RESPONSE_VALIDATION_FAILED',
  MANDATORY_FIELD_MISSING: 'MANDATORY_FIELD_MISSING',
  ERR_USER_DETAILED_NOT_FOUND_IN_CONTEXT: 'ERR_USER_DETAILED_NOT_FOUND_IN_CONTEXT',
  ERR_CONVERTING_STRUCT_TO_MAP: 'ERR_CONVERTING_STRUCT_TO_MAP',
  ERR_INTERNAL_SERVER: 'ERR_INTERNAL_SERVER',
  ERR_DATA_TYPE_CONVERSION: 'ERR_DATA_TYPE_CONVERSION',
  ERR_CC_BAD_REQUEST: 'ERR_CC_BAD_REQUEST',
  ERR_JSON_UNMARSHAL: 'ERR_JSON_UNMARSHAL',
};
