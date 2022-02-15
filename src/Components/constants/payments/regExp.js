export default {
  IGNORE_SPECIAL_CHAR: /[^a-zA-Z0-9\s]/g,
  PAYEMENT_SEARCH: /[^a-zA-Z0-9 @\-/_.\s]/g,
  ONLY_ALPHABETS: /[^A-Za-z]/g,
  AMOUNT_VALIDATION: /^((?!(0|\.))[0-9]{0,})($|\.{1}$|\.{1}[0-9]{1,2}$)/g,
  ACCOUNT_VALIDATION: /^[A-Za-z0-9]{3,60}$/,
  // eslint-disable-next-line no-useless-escape
  UPI_VALIDATION: /^[\w\.\-_]{1,}@[a-zA-Z0-9-.]{1,}$/,
  UPI_CHAR: /[^A-Za-z0-9@.-]/g,
  VALID_INPUT_FOR_ACCOUNT_HOLDER_NAME: /^\s+|[^A-Za-z ]/g,
  VALID_UPI_LINK: /^upi:\/\//,
  VALID_UPI_LINK_PAY: /upi?:\/\/(pay)?/g,
  VALID_QR_AMOUNT: /^-?\d+(?:[.,]\d*?)?$/,
  ONLY_NUMERALS: /[^0-9]/g,
  VALID_ALPHANUMERIC: /[^a-zA-Z0-9]/g,
  VALID_BHARAT_PAY: /^000201/,
  ALPHANUMERIC_WITH_SPACE: /[^A-Za-z0-9 ]/g,
};
