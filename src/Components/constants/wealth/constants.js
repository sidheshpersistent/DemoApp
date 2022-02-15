export const CURRENCY = {
  INR: '₹',
};

export const UNIT = {
  GRAM: 'g',
};

export const MUTUAL_FUND_CURRENCY_REGEX = /^((?!(\.))[0-9]{0,11})$/g;
export const REDEEM_SWITCH_AMOUNT_REGEX = /^((?!(\.))[0-9]{0,11})($|\.{1}$|\.{1}[0-9]{1,2}$)/g;

export const ALLOWED_PAN_IMAGE_FORMATS = ['image/jpeg', 'image/png', 'image/bmp', 'image/jpg'];

export const API_RESPONSE_STATUS = {
  SUCCESS: 'success',
};

export const API_RESPONSE_STATUS_CODE = {
  REQUEST_TOO_LARGE: 413,
  UNPROCESSABLE_ENTITY: 422,
  BAD_REQUEST: 400,
};

export const FILE_SIZE = {
  ONE_MB: 1000000,
};

export const MUTUAL_FUND_PURCHASE_TYPE = {
  SIP: 'SIP',
  LUMPSUM: 'Lump Sum',
  LUMPSUM_PLUS_SIP: 'Lump Sum + SIP',
};

export const MF_TRANSACTION_TYPE = {
  SIP: 'SIP',
  LUMP_SUM: ' Lump sum',
};

export const MF_PURCHASE_TYPE_VALUE_TO_KEY = {
  SIP: 'SIP',
  'Lump Sum': 'LUMPSUM',
  'Lump Sum + SIP': 'LUMPSUM_PLUS_SIP',
};

export const MUTUAL_FUND_DIVIDEND_TYPE = {
  DP: 'DP',
  DR: 'DR',
};

export const ACCOUNT_OPEN_MODE = {
  NON_EKYC: 'non ekyc',
  EKYC: 'ekyc',
};

export const IPV_STATUS = {
  YES: 'Y',
  NO: 'N',
};

export const PAN_UPLOAD_ACTIONS = {
  LAUNCH_CAMERA: 'launchCamera',
  LAUNCH_GALLERY: 'launchImageLibrary',
};

export const KYC_STATUS_FLAG = {
  NO: 'N',
  IN_PROGRESS: 'I',
};

export const NOOP = () => {};

export const DATE_FORMAT = {
  DEFAULT: 'DD MMM YY',
  DEFAULT_WITH_COMMA: 'DD MMM, YY',
  DEFAULT_WITH_HYPHEN: 'DD-MMM-YYYY',
  TIMESTAMP: 'HHmmssSSS',
  COMMON_DATE_FORMAT: 'DD MMM, YYYY',
  DATE_FORMAT_WITH_SLASH: 'DD/MM/YYYY',
  DATE_WITH_TIMESTAMP: 'YYYY-MM-DD HH:mm:ss',
  DATE_WITH_TIME: 'DD MMM, YYYY HH:ss',
  DATE_WITH_TIME_HH_MM: 'DD MMM, YYYY HH:mm',
  MONTH_WITH_YEAR: 'MMM, YYYY',
  DATE_WITH_HYPHEN: 'YYYY-MM-DD',
};

export const MF_ASSET_TYPE = {
  LIQUID: 'LIQUID',
  DEBT: 'DEBT',
  HYBRID: 'HYBRID',
  OTHERS: 'OTHERS',
};

export const SCREEN_NAMES = {
  MFFiltersScreen: 'MFFiltersScreen',
  SGB: 'SoverignGoldBondScreen',
  MFCartConfirm: 'mfcart',
  ChooseMyOwnFundsList: 'ChooseMyOwnFundsList',
  FundRecommendations: 'FundRecommendationsScreen',
  MFCartingBuy: 'MFCartingBuyScreen',
  Dashboard: 'investments',
  InsuranceDashboard: 'insurance',
  OptimizeSavings: 'OptimizeSavingsScreen',
  GoalRecommendations: 'GoalRecommendationsScreen',
  GoalTrackingListScreen: 'GoalTrackingListScreen',
  SGBApplicationHoldingsScreen: 'SGBApplicationHoldingsScreen',
  SGBApplication: 'SGBApplications',
  MFDetails: 'MutualFundDetailsScreen',
  MutualFundBuy: 'MutualFundBuy',
  Redeem: 'RedeemScreen',
  Switch: 'SwitchScreen',
  MFList: 'MFListingScreen',
  MFHoldings: 'Holdings',
  MFTransactions: 'Transactions',
  SuccessScreen: 'SuccessScreen',
  MutualFundDashboard: 'MutualFundDashboardScreen',
  SystematicPlans: 'Systematic plans',
  InsuranceSubcategory: 'InsuranceSubcategory',
  InsuranceSubcategoryMotor: 'InsuranceSubcategoryMotor',
  GetTermInsuranceQuote: 'GetTermInsuranceQuote',
  TermInsurance: 'TermInsurance',
  ZerodhaAccountReady: 'ZerodhaAccountReady',
  ZerodhaOpenAccount: 'ZerodhaOpenAccount',
  ZerodhaActivateOneClick: 'Zerodhaoneclick',
  ZerodhaOtpVerification: 'ZerodhaOtpVerification',
  ZerodhaApplicationSuccess: 'ZerodhaApplicationSuccess',
  ZerodhaApplicationReject: 'ZerodhaApplicationReject',
  ZerodhaError: 'ZerodhaError',
  ISecOpenAccount: 'ISecOpenAccount',
  ISecOtpVerification: 'ISecOtpVerification',
  GoalDashboard: 'GoalDashboard',
  GoalDetails: 'GoalDetails',
  MAIN_DASHBOARD: 'dashboard',
  GoalConfirmation: 'GoalConfirmation',
  GoalTrackingDetails: 'GoalTrackingDetails',
  GoalResultScreen: 'GoalResultScreen',
  TermPlanReimagination: 'TermPlanReimagination',
  TermInsuranceComparisonSorted: 'TermInsuranceComparisonSorted',
  ChildDetailsScreen: 'ChildDetailsScreen',
  LifeCoverExtraDetailsScreen: 'LifeCoverExtraDetails',
  LifeCoverPersonalDetailsScreen: 'LifeCoverPersonalDetails',
  HealthCoverPersonalDetailsScreen: 'HealthCoverPersonalDetailsScreen',
  HealthCoverHealthHistoryScreen: 'HealthCoverHealthHistoryScreen',
  HealthCoverExtraDetailsScreen: 'HealthCoverExtraDetailsScreen',
  MutualFundDownloadReportScreen: 'MutualFundDownloadReportScreen',
  RiskProfileCategoryScreen: 'RiskProfileCategoryScreen',
  ResumeSIPScreen: 'ResumeSIPScreen',
  ManageSIPScreen: 'ManageSIPScreen',
  SGBApplicationHoldingTabsViewAuthWrapper: 'SGBApplicationHoldingTabsViewAuthWrapper',
  SGBHoldings: 'Holdings',
  SGBApplications: 'Applications',
  NFOListingScreen: 'NfoListingScreen',
  InvestmentIdeaListScreen: 'InvestmentIdeaListScreen',
  InvestmentIdeaMFListScreen: 'InvestmentIdeaMFListScreen',
  TermsAndConditionScreen: 'TermsAndConditionScreen',
  RBISecuritiesScreen: 'RBISecuritiesScreen',
  ZerodhaOpenAccJourney: 'ZerodhaOpenAccJourney',
  ZerodhaAccReadyJourney: 'ZerodhaAccReadyJourney',
};

export const EMPTY_DATA = '-';
export const API_SOURCE = 'M';

export const SYSTEMATIC_PLANS_TYPE = {
  SIP: 'SIP',
  STP: 'STP',
  SWP: 'SWP',
};

export const MAX_BAR_TO_SHOW = 5;

export const EQUITY_HOLDING = {
  SECTOR: 'Sector',
  COMPANIES: 'Companies',
  MARKET_CAP: 'Market cap',
  OTHERS: 'others',
};

export const DEBT_HOLDING = {
  COMPANIES: 'Companies',
  CREDIT_PROFILE: 'Credit profile',
};

export const HYBRID_HOLDING = {
  ASSET_ALLOCATION: 'Asset allocation',
  SECTOR: 'Sector',
  COMPANIES: 'Companies',
  BONDS: 'Bonds',
};

export const MARKET_CAPITALS = {
  LARGE_CAP: 'large cap',
  MID_CAP: 'mid cap',
  SMALL_CAP: 'small cap',
};

export const FUND_TYPE = {
  EQUITY: 'equity',
  DEBT: 'debt',
  HYBRID: 'hybrid',
};

export const FIRST_SUB_ASSET_FILTER = {
  ALL_FUNDS: 'ALL_FUNDS',
  ALL_EQUITY_FUNDS: 'ALL_EQUITY_FUNDS',
  ALL_DEBT_FUNDS: 'ALL_DEBT_FUNDS',
  ALL_HYBRID_FUNDS: 'ALL_HYBRID_FUNDS',
  ALL_OTHER_FUNDS: 'ALL_OTHER_FUNDS',
};

export const EQUITY = 'Equity';
export const DEBT = 'Debt';
export const HYBRID = 'Hybrid';
export const OTHER = 'Other';

export const SORTBY_TYPE = {
  IsRecommended: 'Top picks',
  MorningStarRating: 'Morningstar rating (high to low)',
  PerformanceFor1Month: '1 month historical return (high to low)',
  PerformanceFor3Months: '3 month historical return (high to low)',
  PerformanceFor6Months: '6 month historical return (high to low)',
  PerformanceFor1Year: '1 year historical return (high to low)',
  PerformanceFor3Year: '3 year historical return (high to low)',
  PerformanceFor5Year: '5 year historical return (high to low)',
  YTM: 'YTM (high to low)',
};

export const ASSET_FAMILY_VALUES = {
  ULTRA_SHORT_TERM: 'ULTRA SHORT TERM FUND',
  SHORT_TERM: 'SHORT TERM FUND',
  LONG_TERM: 'LONG TERM FUND',
};

export const INVESTMENT_DISTRIBUTION = {
  PRODUCT_DISTRIBUTION: 'Product distribution',
  ASSET_ALLOCATION: 'Asset allocation',
};

export const GET_PORTFOLIO = {
  DEFAULT_AMOUNT: {
    LUMPSUM: 50000,
    SIP: 10000,
    STEPUP: 500,
  },
  MINIMUM_INV_AMOUNT: {
    LUMPSUM: 10000,
    SIP: 5000,
    STEPUP: 500,
  },

  MUTIPLES: {
    STEPUP: 500,
  },
  INVESTMENT_TYPES: {
    LUMPSUM: 'Lumpsum',
    SIP: 'SIP',
    LUMPSUM_PLUS_SIP: 'SIPWithLumpsum',
  },
};

export const MF_CART_BUY = {
  DEFAULT_AMOUNT: {
    LUMPSUM: '10000',
    SIP: '5000',
    STEPUP: '500',
  },

  MINIMUM_INV_AMOUNT: {
    STEPUP: 500,
  },

  MUTIPLES: {
    STEPUP: 500,
    SIP: 1,
    LUMPSUM: 1,
  },
};

export const LOCATE_BRANCH_URL = 'https://www.idfcfirstbank.com/reach-us.html';

export const URL_PATH = {
  RISK_PROFILE: '/riskProfile',
  PROCESS_RISK_PROFILE: '/riskProfile/process',
  RISK_PROFILE_QUESTIONS: '/master-data/questionnaire',
  ALTERNATE_HOLDINGS: '/alternate',
  PAN_ENTER: '/compliance/aadharkyc',
  FATCA_MASTER: '/wealth/content/fatca/dropdown.json',
  MF_TNC_URL: '/wealth/content/mutualFund/terms_and_conditions.html',
  SGB_TNC_URL: '/wealth/content/sgb/terms_and_conditions_for_SGB.html',
  DEMAT_TNC_URL: '/wealth/content/demat/terms_and_conditions_for_demat.html',
  DEMAT_TNC_URL_1: '/wealth/content/demat/schedule_of_charges.html',
  DEMAT_TNC_URL_2: '/wealth/content/demat/rights_and_obligations.html',
  IPO_TNC_URL: '/wealth/content/ipo/terms_and_conditions_for_ipo_app.html',
  GET_WL_INSURANCE_URL: '/insurance',
  GET_WL_INSURANCE_REDIRECTION_URL: '/insurance/urls?',
  GET_WL_TERM_INSURANCE_REDIRECTION_URL: '/insurance/term/urls?',
  GET_WL_INSURANCE_SUMMARY_V1: '/insurance/life',
  GET_WL_INSURANCE_SUMMARY_V2: '/insurance/v2/life',
  GET_WL_INSURANCE_SUMMARY: '/insurance/v3/life',
  GET_INSURANCE_SUBCATEGORIES_JSON: code => `/wealth/content/insurance/${code}_categories.json`,
  AEM_INSURANCE_PATH: '/wealth/content/insurance/insurance_categories.json',
  GET_INSURANCE_REDIRECTION_URL: '/urls?',
  GET_TERM_INSURANCE_REDIRECTION_URL: '/term/urls?',
  GET_INSURANCE_SUMMARY_V1: '/life',
  GET_INSURANCE_SUMMARY_V2: '/v2/life',
  GET_INSURANCE_SUMMARY: '/v3/life',
  MUTUAL_FUND_BUY: '/mutualFund/buy',
  MUTUAL_FUND_SWITCH: '/mutualFund/switch',
  MUTUAL_FUND_REDEEM: '/mutualFund/redeem',
  MUTUAL_FUND_ASSETS: '/mutualFund/assets',
  MUTUAL_FUND_SIP: '/mutualFund/sip',
  MUTUAL_FUND_STP: '/mutualFund/stp',
  MUTUAL_FUND_SWP: '/mutualFund/swp',
  MUTUAL_FUND_SCHEMES: '/mutualFund/schemes',
  FINANCIAL_YEARS: '/mutualFund/financialYears',
  POST_FATCA: '/compliance/fatca',
  POST_FATCA_V2: '/compliance/fatca/v2',
  MF_KYC: '/compliance/mfkyc',
  COMPLIANCE_TNC: '/compliance/tnc',
  GOAL_CATEGORIES: '/goals/categories',
  GOAL_COMPUTE_VALUE: `/goals/investmentAmount`,
  TERM_WL_INSURANCE_CONFIG: '/insurance/term/config',
  GET_WL_LIFE_COVER: '/insurance/lifeCover',
  TERM_INSURANCE_CONFIG: '/term/config',
  GET_LIFE_COVER: '/lifeCover',
  SGB_CERTIFICATES: '/certificate',
  GET_DEMAT_ACCOUNT_STATUS: '/accounts/demat',
  GET_DEMAT_ACCOUNT_SIGNUPLINK: '/accounts/demat/signupLink',
  GET_MF_TRANSACTION_DETAILS: '/mutualFund/transactionDetail?',
  GET_WL_DEFAULT_POLICY_TERM: '/insurance/term/defaultPolicyTerm',
  GET_WL_TERM_INSURANCE_QUOTE: '/insurance/term/v2/quote?',
  GET_DEFAULT_POLICY_TERM: '/term/defaultPolicyTerm',
  GET_TERM_INSURANCE_QUOTE: '/term/v2/quote?',
  GET_PERMISSIONS: '/groups/permissions',
  HEALTH_STATIC_DATA: '/wealth/content/insurance/health_calculator.json',
  MF_SUB_ASSET_CLASSES: '/wealth/content/mutualFund/mfSubAssetClasses.json',
  CHOOSE_MY_OWN_FUND_FILTERS: '/wealth/content/mutualFund/chooseMyOwnFundFilter.json',
  SGB_PERFORMANCE_PDF: '/wealth/content/sgb/The-Gold-Rush.pdf',
  GET_SGB_BUY_KNOW_MORE_JSON: '/wealth/content/sgb/sgb_buy_know_more_data.json',
  GET_DEMAT_APPLICANTS_INFO: 'Get Demat Applicants Info',
  GET_RBI_SECURITIES_CONTENT_BASE_PATH: '/wealth/content/rbiSecurities/',
  GET_RBI_SECURITIES_IMAGE_BASE_PATH: '/wealth/images/rbiSecurities/mobile/',
  GET_RBI_SECURITIES_JSON: basePath => `${basePath}rbiSecurities.json`,
};

export const REDEEM_TYPES = {
  PARTIAL: 'Partial',
  FULL: 'Full',
  SWP: 'Systematic Withdrawal',
};

export const MARITAL_STATUSES = {
  SINGLE: 'Single',
  MARRIED_WITH_KIDS: 'MarriedAndHaveKids',
  MARRIED_WITHOUT_KIDS: 'MarriedButNoKids',
  SINGLE_PARENT: 'SingleParent',
};

export const SWITCH_TYPES = {
  PARTIAL: 'Partial',
  FULL: 'Full',
  STP: 'Systematic Transfer',
};

export const MF_FILTER_TABS = {
  ASSET_CLASS: 'AssetClass',
  AMC: 'AMC',
};

export const TRANSACTION_STATUS = {
  SETTLEMENT_COMPLETED: 'Settlement Completed',
  ORDER_SUCCESSFULL: 'order successful',
};

export const FIRST_TRANSACTION = {
  TRUE: 'true',
  FALSE: 'false',
  FAILURE: 'failure',
};

export const INDIA = 'India';
export const INDIA_COUNTRY_CODE = 'IN';

export const FATCA_POLITICALLY_EXPOSED = {
  YES: 'Yes',
  NO: 'No',
};

export const ZERODHA_ACCOUNT_STATUS = {
  OPENED: 'OPENED',
  IN_PROGRESS: 'IN PROGRESS',
};

export const MUTUAL_FUND_BUY_CONSTANTS = {
  ORDER_CHANNEL: 'M',
  MODE_OF_OPERATION: 'S',
  ORDER_RISK: 'Y',
  UNIVERSAL_RISK: 'N',
};

export const KYC_PAN_SIZE_CONFIG = {
  QUALITY: 0.5,
  MAX_HEIGHT: 1000,
  MAX_WIDTH: 1000,
};

export const RECOMMENDATION_JOURNEY_TYPE = {
  RBRP: 'RISK',
  GOAL: 'GOAL',
};

export const MINIMUM_RECOMMENDATION_DEPOSIT = {
  FD: 10000,
  RD: 2500,
};
export const CUSTOM_GOAL_CODE = 'CREATE OWN GOAL';

export const TRACING = {
  GET_INSURANCE_REDIRECTION_URL: 'Get insurance redirection url',
  GET_INSURANCE_CATEGORIES: 'Get insurance categories',
  GET_INSURANCE_CATEGORIES_AEM: 'Get insurance categories AEM data',
  GET_INSURANCE_SUB_CATEGORIES_AEM: 'Get insurance sub categories AEM data',
  GET_DEFAULT_POLICY_TERM: 'Get default policy term based on customer age',
  GET_TERM_PLAN_QUOTE: 'Get quote for term plan from each vendor',
  TERMS_AND_CONDITIONS: 'Get terms and condition for wealth journy',
  DEMAT_TERMS_AND_CONDITIONS: 'Get terms and condition for demat journey',
  DEMAT_TERMS_AND_CONDITIONS_1: 'Get terms and condition for Demat Schedule of Charges',
  DEMAT_TERMS_AND_CONDITIONS_2:
    'Get terms and condition for Demat Rights and Obligations of Beneficial Owner and Depository Participant as prescribed by SEBI and Depositories',
  ALTERNATE_HOLDINGS: 'Get Alternates Holdings',
  GET_INVESTMENT_ACCOUNTS: 'Get Investment accounts',
  GET_BANK_ACCOUNTS: 'Get Bank accounts',
  SUBMIT_PAN_NUMBER: 'Submit Pan Number',
  SUBMIT_FATCA: 'Submit FATCA',
  GET_FATCA_TNC: 'Get FATCA TNC',
  POST_FATCA_TNC: 'Post FATCA TNC',
  GET_FATCA_COUNTRIES: 'Get FATCA Countries',
  GET_FATCA_MASTER: 'Get FATCA Master',
  GET_RISK_PROFILE: 'Get Risk Profile',
  GET_RISK_PROFILE_CATEGORIES: 'Get Risk Profile Categories',
  SUBMIT_RISK_PROFILE: 'Submit Risk Profile',
  GET_MUTUAL_FUNDS: 'Get Mutual Funds',
  GET_MUTUAL_FUND_MAX_AMOUNT_CONFIG: 'Get Mutual Fund Maximum Amount configuration',
  GET_MUTUAL_FUND_AMC: 'Get Mutual Fund AMCs',
  GET_MUTUAL_FUND_ASSETS: 'Get Mutual Fund Asset class filters',
  GET_KYC_DETAILS: 'Get KYC details',
  GET_FUND_PERFORMANCE: 'Get Fund Performance',
  GET_FUND_HOLDING_PATTER: 'Get Fund Holding pattern',
  GET_SCHEME_RISK_PROFILE: 'Get Scheme Riks Profile',
  GET_SCHEME_DETAILS: 'Get Scheme Details',
  GET_MF_REPORT_FIN_YEARS: 'Get Mutual fund report financial years',
  GET_CUSTOMER_CURRENT_ASSETS: 'Get Customer Holding Current Assets',
  GET_CUSTOMER_HOLDINGS: 'Get Mutual Fund Holdings',
  GET_MF_PORTFOLIOGRAPH: 'Get Mutual Fund Portfoliograph',
  GET_SYS_PLANS: 'Get systematic plan',
  GET_TRANSACTION_DETAIL: 'Get MF Transaction details',
  GET_MF_TRANSACTIONS: 'Get Mutual Fund Transactions',
  UPLOAD_PAN: 'Upload PAN Card',
  GET_SGB_TRANSACTION: 'Get SGB Transactions',
  GET_SGB_BUY_DETAILS: 'Get account,demat Details to buy SGB',
  HOLDING_ASSET_ALLOCATION: 'Get Asset allocation',
  HOLDING_PRODUCT_ALLOCATION: 'Get Product allocation',
  HOLDING_SUMMARY: 'Get Holding Summary',
  GET_RISK_PROFILE_QUESTIONS: 'Get Risk Profile Questions',
  GET_DEMAT: 'Get Demat Details',
  SGB_ACTIVE_TRANCH: 'Get SGB Active Tranch',
  GET_DEMAT_SINGUP_LINK: 'Get Demat Signup Link',
  GET_GOAL_CATEGORY: 'Get Goal Categories',
  GET_GOAL_CATEGORY_DETAILS: 'Get Goal Category details',
  GET_COMPUTED_DATA_FOR_GOAL_CATEGORY_DETAILS: 'Get computed data for Goal Category details',
  GET_RISK_PROFILE_DETAILS_FOR_GOALS: 'Get Customer Risk Profile and Categories',
  GET_MONTHLY_SAVINGS: 'Get monthly savings',
  GET_INSURANCE_SUMMARY: 'Get summary for insurance dashboard',
  LOAD_WEALTH_DASHBOARD: 'Load Wealth Dashboard',
  BUY_SINGLE_SIP: 'Buy single mutual fund with sip',
  BUY_SINGLE_LUMPSUM: 'Buy single mutual fund with lumpsum',
  BUY_SINGLE_LUMPSUM_PLUS_SIP: 'Buy single mutual fund with sip and lumpsum',
  FETCH_BANK_INV_ACCOUNT: 'Get Bank & Investment accounts',
  BUY_MUTUAL_FUND_CART: 'Buy Mutual Fund Cart',
  BUY_RECOMMENDED_MUTUAL_FUND: 'Buy Recommended Mutual Fund',
  EDIT_SIP: 'Edit Existing SIP',
  PAUSE_SIP: 'Pause Existing SIP',
  PARTIAL_FUND_REDEEM: 'MF Partial Redeem',
  FULL_FUND_REDEEM: 'MF Full Redeem',
  SYS_FUND_REDEEM: 'MF Systematic Redeem',
  FULL_FUND_SWITCH: 'Full switch MF',
  PARTIAL_FUND_SWITCH: 'Partial switch MF',
  SYS_FUND_SWITCH: 'Start STP',
  STOP_SWP: 'Stop SWP',
  STOP_STP: 'Stop STP',
  PLACE_SGB_ORDER: 'Buy Sovereign Gold Bond',
  RESUME_SIP: 'Resume SIP',
  DOWNLOAD_SGB_CERT: 'Download SGB Certificate',
  SHARE_SGB_CERT: 'Share SGB Certificate',
  GOAL_RECOMMENDED_FUND: 'Goal Recommended funds',
  GET_COMPUTED_FUTURE_VALUE: 'Get computed future value for goal recommendatio',
  GET_DEMAT_ENTRY_POINT_DETAILS: 'Get Demat Entry Point Details',
  GET_DEMAT_ACCOUNT_DETAILS: 'Get Demat Account Details',
  GET_DEMAT_NSDL_REDIRECTION_DETAILS: 'Get Demat NSDL Redirection Details',
  GET_GOAL_INVESTMENT_DETAILS: 'Get investment details of a goal',
  GOAL_BUY: 'Buy Goals',
  GET_RECOMMENDATION_CONFIG: 'Get Recommendation Config',
  GET_TERM_CONFIG: 'Get Term Insurance Config',
  GET_CURRENT_AVAILABLE_IPO_LIST: 'Get Current Available IPO List',
  GET_SELECTED_AVAILABLE_IPO_LIST: 'Get Selected Available IPO List',
  INVEST_INTO_IPO: 'IPO Place order',
  IPO_SEND_EMAIL: 'IPO Send Email',
  IPO_DOWNLOAD_PDF: 'IPO Download Pdf',
  IPO_MODIFY_IPO: 'IPO Modify IPO',
  IPO_APPLICANTS_INFO: 'IPO Applicants info',
  IPO_CREATE_APPLICANTS: 'IPO Create Applicant',
  GET_USER_DETAILS: 'Get User Details',
  GET_HEALTH_INSURANCE_STATIC_DATA: 'Get Health Insurance Static Data',
  GET_HEALTH_INSURANCE_COVER_AMOUNT: 'Get Health Insurance Cover Amount',
  GET_MF_SUB_ASSET_CLASSES_STATIC_DATA: 'Get Mutual Fund Sub Asset Classes Static Data',
  GET_ZERODHA_ACTIVE: 'Get Zerodha Active Status',
  GET_ZERODHA_ACCOUNT_LIST: 'Get Zerodha Account List',
  GET_ZRODHA_OTP_DETAILS: 'Get zerodha send otp details',
  GET_ZRODHA_RESEND_OTP_DETAILS: 'Get zerodha resend otp details',
  GET_ZERODHA_ACCESS_DETAILS: 'Get zerodha access details',
  GET_NEW_FUND_OFFERS: 'Get new fund offers',
  GET_ISEC_OTP_DETAILS: 'Get ICICI Securities send otp details',
  GET_ISEC_RESEND_OTP_DETAILS: 'Get ICICI Securities resend otp details',
  GET_ISEC_DETAILS: 'Get ICICI Securities details',
  GET_CUSTOMER_SIGNATURE: 'Get customer signature',
  MF_SWITCH_REDEEM_SIGNATURE_CHECK: 'MF Switch/Redeem signature check',
  GET_MF_SELLABLE_QUANTITY: 'Get mutual fund sellable quantity',
  GOAL_TRACKING: 'Get goal tracking list',
  GET_ISEC_ACCESS_DETAILS: 'Get Isec Access Details',
  GET_PIS_ACCOUNTS_DEATILS: 'Get PIS Accounts Details',
  PIS_HOLDING_STATEMENT_SEND_EMAIL: 'PIS holding statement send email',
  WITHDRAW_IPO: 'Withdraw IPO',
  PIS_PERMISSION_LETTER_SEND_EMAIL: 'PIS permission letter send email',
  PIS_CAPITAL_GAIN_SEND_EMAIL: 'PIS capital gain send email',
  GET_DEMAT_ACCOUNT_DEBITS: 'Get demat account debits',
  DEMAT_CRM_DETAILS: 'Demat CRM Details',
  DEMAT_DIS_DETAILS: 'Demat DIS Details',
  GET_RBI_SECURITIES: 'Get RBI Securities Content',
};

export const NO_COMP = () => null;
export const BALANCED_RISK_PROFILE_CODE = '02';

export const GOAL_PRODUCT_NAME = {
  FD: 'FD',
  RD: 'RD',
  MF: 'Mutual Funds',
};

export const TERM_INSURANCE_CODE = {
  HDFC: 'TERM_HDFC',
  ICICI: 'TERM_ICICI',
  BALIC: 'TERM_BAJAJ',
};

export const INSURANCE_TYPES = {
  VEHICLE: 'VEHICLE',
  TERM: 'TERM',
  HEALTH: 'HEALTH',
  ULIP: 'ULIP',
};

export const FUND_RISK_PROFILES = new Map([
  ['low', 0],
  ['low to moderate', 1],
  ['moderate', 2],
  ['moderately high', 3],
  ['high', 4],
  ['very high', 5],
]);

export const WEALTH_ERROR_CODE = {
  ERR_WEAL_EMAIL_NOT_REGISTERED: 'ERR_WEAL_EMAIL_NOT_REGISTERED',
  ERR_WEAL_USER_KYC_NOT_DONE: 'ERR_WEAL_USER_KYC_NOT_DONE',
  ERR_WEA_COMPOSITE_UNIQUE: 'ERR_WEA_COMPOSITE_UNIQUE',
};

export const DEMAT_HOLDINGS_SORT = {
  COMPANY_NAME_ASCENDING: 'Company name (A-Z)',
  COMPANY_NAME_DESCENDING: 'Company name (Z-A)',
  QUANTITY_ASCENDING: 'Quantity (low to high)',
  QUANTITY_DESCENDING: 'Quantity (high to low)',
  VALUATION_ASCENDING: 'Valuation (low to high)',
  VALUATION_DESCENDING: 'Valuation (high to low)',
  LTP_ASCENDING: 'LTP (low to high)',
  LTP_DESCENDING: 'LTP (high to low)',
};

export const APP_RATING_CONSTATNS = {
  BUY_SINGLE_SIP: 'Buy Mutual Fund Single SIP',
  BUY_SINGLE_LUMPSUM: 'Buy Mutual Fund Single Lumpsum',
  BUY_CART_SIP: 'Buy Mutual Fund Cart',
};

export const RESIDENCY_TYPES = {
  NRO: 'NRO',
  NRE: 'NRE',
  RI: 'RI',
};

export const NAV_STACK_WITH_INVESTMENT_DASHBOARD_AND_MF_TRANSACTION = {
  routes: [
    {
      name: 'home',
      state: {
        routes: [
          {
            name: 'have',
            state: {
              routes: [{ name: 'TabNavigatorForHaveScreen', params: { screen: SCREEN_NAMES.Dashboard } }],
            },
          },
        ],
      },
    },
    {
      name: SCREEN_NAMES.MutualFundDashboard,
      params: {
        screen: SCREEN_NAMES.MFTransactions,
      },
    },
  ],
};
