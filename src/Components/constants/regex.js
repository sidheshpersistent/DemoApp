const regex = {
  ADDRESS: /^[a-zA-Z0-9\s.:,-/()#']*$/,
  NUMERIC: /^[0-9]{0,}$/,
  PINCODE: /^[0-9]{3}\s[0-9]{3}$/,
  PAN: /^[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z]$/,
  INTEGER_VALIDATION_REGEX: /^((?!(0|\.))[0-9]{0,8})$/g,
  EMAILVALIDATIONREGEX:
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  NAMEVALIDATIONREGEX: /^[A-Za-z0-9'.\s]*$/,
  NAME_VALIDATION: /^[A-Za-z'.\s]*$/,
  TEXT_VALIDATION: /^[A-Za-z\s]*$/,
  ACCOUNT_HOLDER_NAME: /^[A-Za-z\s]+$/,
  ACCOUNT_NUMBER: /^\d{9,18}$/,
  IFSC_CODE: /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/,
  GOAL_NAME_REGEX: /^[A-Za-z0-9-'\s]*$/,
  ALPHANUMERIC: /^[a-z0-9]+$/i,
  GSTIN_VALIDATION:
    /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/,
  MOBILE_NUMBER_VALIDATION: /^\+(\d){9,14}$/,
};

export const CONTRACT_MATCHERS = {
  STRING: '[\\w\\s]{1,255}',
  NUMBER: '^\\d+$',
};

export default regex;
