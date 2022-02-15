import ScreenConstants from './screen-constants';

const constants = ScreenConstants.HAVE.CARDS;

export const CARD_STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  TEMPORARILY_BLOCKED: 'TemporarilyBlocked',
  PERMANENTLY_BLOCKED: 'PermanentlyBlocked',
  CLOSED: 'Closed',
  EXPIRED: 'Expired',
};

export const CARD_ACTION = {
  BLOCK: { label: constants.BLOCK, httpStatus: 'BLOCKED' },
  UNBLOCK: { label: constants.UNBLOCK, httpStatus: 'UNBLOCKED' },
  CANCEL: { label: constants.CANCEL },
  PERMANENTLY_BLOCKED: { label: constants.PERMANENTLY_BLOCKED, httpStatus: 'PERMANENTLY_BLOCKED' },
  CHANGE_PIN: { label: constants.CHANGE_PIN },
  GENERATE_PIN: { label: constants.GENERATE_PIN },
  GENERATE_PHYSICAL_CARD: { label: constants.GENERATE_PHYSICAL_CARD },
  DEBITCARD_MANDATE: { label: constants.DEBITCARD_MANDATE },
};

export const BLOCK_CARD_TITLE = constants.BLOCK_PERMANENTLY;
export const REISSUE_CARD_TITLE = constants.REISSUE_CARD;

export const BLOCK_REASONS = [
  { value: 'LOST_OR_STOLEN', label: constants.LOST_OR_STOLEN },
  { value: 'DAMAGED', label: constants.DAMAGED },
];

// Currently cbs can not reissue damaged card, as a temp fix we only show lost as option
export const TEMP_BLOCK_REASONS = [{ value: 'LOST_OR_STOLEN', label: constants.LOST_OR_STOLEN }];

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
  SELECT: 'Infinite Select',
  PRIVATE: 'Infinite Private',
  WEALTH: 'Infinite Wealth',
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

export const PERMANENTLY_BLOCKED_LOOKING_CARDS = [CARD_STATUS.PERMANENTLY_BLOCKED, CARD_STATUS.CLOSED];

export const DISABLED_CARDS = [
  CARD_STATUS.CLOSED,
  CARD_STATUS.EXPIRED,
  CARD_STATUS.PERMANENTLY_BLOCKED,
  CARD_STATUS.INACTIVE,
];

export const DETAILS_BLOCKED_CARDS = [CARD_STATUS.EXPIRED, CARD_STATUS.PERMANENTLY_BLOCKED, CARD_STATUS.CLOSED];

export const TOGGLE = {
  ON: constants.ON,
  OFF: constants.OFF,
  NA: constants.NA,
};

export const { DAILY_WITHDRAWLS } = constants;
export const { INTERNATIONAL_USAGE } = constants;
export const { DAILY_PURCHASE } = constants;

export const LIMIT = {
  PURCHASE: 'PURCHASE',
  ATM_WITHDRAWAL: 'ATM_WITHDRAWAL',
};
