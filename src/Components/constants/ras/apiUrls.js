import Config from 'config';

const depositURLs = {
  getDeposits: {
    BIB: '/business',
    RIB: '',
  },
  getODDeposits: {
    BIB: '/business',
    RIB: '',
  },
  getFDPlans: {
    BIB: '/business/plans/v2',
    RIB: '/plans/v2',
  },
  closeInquiry: {
    BIB: '/business/closure/inquiry',
    RIB: '/closure/inquiry',
  },
  getAdvice: {
    BIB: '/business/advice',
    RIB: '/advice',
  },
  getFDDetail: {
    BIB: '/business/details',
    RIB: '/details',
  },
  createDeposit: {
    BIB: '/business',
    RIB: '',
  },
  closeDeposit: {
    BIB: '/business/close',
    RIB: '/close',
  },
  addNominee: {
    BIB: '/business/nominee/add-or-replace',
    RIB: '/nominee/add-or-replace',
  },
  getFDTenurePlanDetails: {
    BIB: '/business/plan',
    RIB: '/plan',
  },
};

const DEPOSIT_SERVICE = () => `${Config.RAS_BASE_URL()}/deposit/v1`;
const ACCOUNT_SERVICE = () => `${Config.RAS_BASE_URL()}/account/v1`;

export const DEPOSIT_ADVICE_URL = activeUserProfile =>
  `${DEPOSIT_SERVICE()}${depositURLs.getAdvice[activeUserProfile.profile_type || 'RIB']}`;

export const ACCOUNT_STATEMENT_URL = () => `${ACCOUNT_SERVICE()}/statement`;

export const FETCH_DEPOSITS_URL = (activeProfile, action = '') =>
  `${DEPOSIT_SERVICE()}${depositURLs.getDeposits[activeProfile.profile_type]}?action=${action}`;

export const FETCH_ACCOUNTS_URL = (action = '') => `${ACCOUNT_SERVICE()}?action=${action}`;

export const FETCH_DEPOSIT_ACCOUNTS_URL = (depositType = '') =>
  `${DEPOSIT_SERVICE()}/plans/default?depositType=${depositType}`;

export const CREATE_FD_URL = activeProfile =>
  `${DEPOSIT_SERVICE()}${depositURLs.createDeposit[activeProfile.profile_type]}`;

export const FETCH_SA_PRODUCT_SUGGESTIONS_URL = () => `${ACCOUNT_SERVICE()}/product-suggestions`;

export const FETCH_DEPOSIT_DETAILS_URL = activeProfile =>
  `${DEPOSIT_SERVICE()}${depositURLs.getFDDetail[activeProfile.profile_type]}`;

export const FETCH_CLOSURE_INQUIRY_URL = activeProfile =>
  `${DEPOSIT_SERVICE()}${depositURLs.closeInquiry[activeProfile.profile_type]}`;

export const FETCH_PLANS = (depositType, activeProfile) =>
  `${DEPOSIT_SERVICE()}${depositURLs.getFDPlans[activeProfile.profile_type]}?depositType=${depositType}`;

export const FETCH_MATURITY_AMOUNT_AND_DATE = (
  productCode,
  subProductCode,
  amount,
  days,
  years,
  months,
  interestPayoutMethod,
  activeProfile
) =>
  `${DEPOSIT_SERVICE()}${
    depositURLs.getFDTenurePlanDetails[activeProfile.profile_type]
  }/${productCode}/${subProductCode}?amount=${amount}&days=${days}&years=${years}&months=${months}&interestPayoutMethod=${interestPayoutMethod}`;

export const CLOSE_DEPOIST_URL = activeProfile =>
  `${DEPOSIT_SERVICE()}${depositURLs.closeDeposit[activeProfile.profile_type]}`;

export const FETCH_COUNTRIES_URL = () => `${Config.RAS_BASE_URL()}/debitcard/v1/countries`;
export const FINANCIAL_YEARS_URL = () => `${Config.RAS_BASE_URL()}/deposit/v1/financial-years`;
export const INTEREST_CERTIFICATE_URL = () => `${Config.RAS_BASE_URL()}/account/v1/interest-certificate`;

export const FETCH_PIN_INFO_URL = pinCode =>
  `${Config.RAS_BASE_URL()}/rl/v1/master-data/postal-info?pincode=${pinCode}`;

export const UPDATE_DEPOSIT_NOMINEE = () => `${DEPOSIT_SERVICE()}/nominee/add-or-replace`;

export const UPDATE_ACCOUNT_NOMINEE = () => `${ACCOUNT_SERVICE()}/nominee/add-or-replace`;

export const TDS_FINANCIAL_YEARS_URL = () => `${Config.RAS_BASE_URL()}/deposit/v1/tds/financial-years`;

export const PRODUCT_KNOW_MORE_STATIC_CONTENT_URL = () =>
  `${Config.STATIC_CONTENT_BASE_PATH()}/accounts/etb/product-knowmore/knowmore.json`;

export const PRODUCT_HIGHLIGHTS_STATIC_CONTENT_URL = () =>
  `${Config.STATIC_CONTENT_BASE_PATH()}/accounts/etb/product-highlights/highlights.json`;

export const REFER_AND_EARN_BANNER_URL = () => `${Config.STATIC_CONTENT_BASE_PATH()}/refer-and-earn/Refer_Banner.svg`;

export const REFER_AND_EARN_INFO_URL = () => `${Config.STATIC_CONTENT_BASE_PATH()}/refer-and-earn/referral.json`;
export const REFER_AND_EARN_FAQ_URL = () => `${Config.STATIC_CONTENT_BASE_PATH()}/refer-and-earn/faq.html`;
export const PAYMENT_LIMITS_URL = () => `${Config.STATIC_CONTENT_BASE_PATH()}/payment-limits/paymentLimits.html`;
export const SAFE_PAY_KNOW_MORE_URL = () => `${Config.STATIC_CONTENT_BASE_PATH()}/safe-pay/know-more.html`;

export const NEW_FEATURES_URL = () => `${Config.STATIC_CONTENT_BASE_PATH()}/dashboard/newFeaturesList.json`;
