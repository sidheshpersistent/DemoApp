import StringConstants from 'constants/string-constants';

const { SCREEN_NAME } = StringConstants;

export const OTP_MEDIUM = 'SMS';
export const OTP_VOICE_MEDIUM = 'VOICE';
export const OTP_TYPE = 'LOANOTP';
export const EMAIL = 'EMAIL';
export const NAME_MATCH_THRESHOLD = 65;
export const DATA_CAPTURE_WAIT_THRESHOLD = 30;
export const DATA_CAPTURE_DELAY = 30000;
export const SELF_EMPLOYED = 'Self Employed';
export const SALARIED = 'Salaried';
export const SOURCE_OF_INCOME = {
  NETBANKING: 'Perfios_Net banking',
  ACCOUNT_AGGREGATOR: 'Account Aggregator',
  STATEMENT_UPLOAD: 'Perfios_Statement Upload',
};
export const MASTER_DATA_INSTITUTION_CATEGORIES = {
  NETBANKING: 'netbankingFetch',
  STATEMENT_UPLOAD: 'statement',
  ACCOUNT_AGGREGATOR: 'accountAggregator',
};
export const APPLY_LOAN_V2 = `/api/applyloan/v2`;

export const TRACING = {
  SUBMIT_MOBILE_NUMBER: 'LOANS - Submit mobile number',
  GET_CD_PRODUCT: 'LOANS - Get Consumer Durable product',
  PINCODE_SERVICEABLITY: 'LOANS - Pincode serviceability',
  USEDCAR_CAR_DETAILS: 'LOANS - Selected car details',
  CLEAR_LOAN_DETAILS: 'LOANS - Clear loan data from asyncStorage',
  CREATE_PERSONAL_LOAN: 'LOANS - Create Personal Loan',
  SUBMIT_OTHER_DETAILS: 'LOANS - Submit other details for Personal Loan',
  SUBMIT_EMPLOYMENT_DETAILS: 'LOANS - Submit employment details',
  FETCH_PINCODE_DETAILS: 'LOANS - Fetch details for pincode',
  EMAIL_OTP_VERIFICATION: 'LOANS - Send OTP for email verification',
  FETCH_BANKING_DETAILS: 'LOANS - Fetch banking details',
  DEVICE_SYNC_TOKEN: 'LOANS - Get DeviceSyncToken',
  EMPLOYMENT_MASTER_DATA: 'LOANS - Get Employment Master Data',
  TENURES_MASTER_DATA: 'LOANS - Get Tenures Master Data',
  EASY_LOGIN: 'LOANS - Easy login',
  NAME_MATCH: 'LOANS - Name match',
  PINCODE_SERVICEABLITY_SKYC: 'LOANS - Pincode serviceability for determining SKYC status',
  SEPL_MASTER_DATA: 'LOANS - Get SEPL Master Data',
};

export const TRACING_LOGS_MESSAGES = {
  PERFIOS_DETAILS_CLEARED: 'Loan perfios details cleared from asyncStorage Loan Application Number -',
  LOAN_DATA_CLEARED: 'Loan data cleared from asyncStorage Loan Application Number -',
  DEVICE_SYNC_TOKEN: {
    START: 'Calling DeviceSyncToken API, retries left -',
    SUCCESS: 'Success DeviceSyncToken API, retries left -',
    RETRY: 'Retrying DeviceSyncToken API, retries left -',
    RETRY_EXHAUSTED: 'Exceeded maximum retries for DeviceSyncToken API',
  },
  EASY_LOGIN_ERROR: 'Error during easy login: ',
  CHECKING_NAME_MATCH: 'Checking karza name match for: ',
  ERROR_NAME_MATCH: 'Error while checking karza name match: ',
  ERROR_PINCODE_SERVICEABLITY: 'Error while checking pincode serviceability for determining SKYC status: ',
};

export const DATE_FORMAT = {
  DISPLAY_FORMAT: 'DD MMM YYYY',
  DISPLAY_FORMAT_FOR_DATE_FNS: 'dd MMM yyyy',
  DAY_MONTH_YEAR_WITH_SLASH: 'dd/MM/yyyy',
  YEAR_MONTH_DAY_WITH_HYPHEN: 'yyyy-MM-dd',
};

export const PL_BANKING_DETAILS_LIMITS = {
  APPROVED_LOAN_AMT: 500000,
  LOAN_TENURE_MONTHS: 60,
};

export const KEYCHAIN_KEYS = {
  EBC_RESUME_TOKEN: 'ebc_resume_token',
  DATA_CAPTURE_VALUES: 'data_capture_values',
  DATA_CAPTURE_UPLOAD_TIMESTAMP: 'data_capture_upload_timestamp',
};

export const IMPS_VALIDATION_STATUS = {
  SUCCESS: 'Success',
  SKIPPED: 'Skipped',
  FAILURE: 'Failure',
};

export const IMPS_VALIDATION_ERROR_CODES = {
  ERR_APPLY_LOAN_IMPS_FRAUD_CHECK_BANK_ACCOUNT_LIMIT_REACHED:
    'ERR_APPLY_LOAN_IMPS_FRAUD_CHECK_BANK_ACCOUNT_LIMIT_REACHED',
  ERR_APPLY_LOAN_IMPS_FRAUD_CHECK_FAILED_DUE_TO_POLICY: 'ERR_APPLY_LOAN_IMPS_FRAUD_CHECK_FAILED_DUE_TO_POLICY',
  ERR_APPLY_LOAN_IMPS_DOWNSTREAM_FAILURE: 'ERR_APPLY_LOAN_IMPS_DOWNSTREAM_FAILURE',
};

export const WORKFLOW = {
  PL_DIRECT: 'PL Direct',
  D2C_STP: 'D2C_STP',
};

export const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
};

export const KYC_MODES = {
  CKYC_MODE: 'CKYC',
  OKYC_MODE: 'OKYC',
  SKYC_MODE: 'single_KYC',
  NONE_MODE: 'NONE',
};

export const LOAN_AMOUNT_DECISION = {
  PROCEED: 'Proceed',
  UPDATE: 'Update',
};

export const TA_OFFER_STATUS = {
  ACCEPTED: 'Accepted',
  REJECTED: 'Rejected',
};

export const EPFO_ERROR_CODES = {
  ERR_APPLY_PL_EPFO_DOWNSTREAM_FAILED: 'ERR_APPLY_PL_EPFO_DOWNSTREAM_FAILED',
};

export const PERFIOS_FLOW_TYPES = {
  NETBANKING: 'Netbanking',
  STATEMENT_UPLOAD: 'StatementUpload',
  ACCOUNT_AGGREGATOR: 'AccountAggregator',
};

export const PROFESSION = {
  DOCTOR: 'Doctor',
  CA: 'CA',
  OTHERS: 'Others',
};

export const SEPL_APP_DROP_SCREENS = {
  [SCREEN_NAME.SEPL_PINCODE_SERVICEABILITY_FAILURE]: 'Pin Servicability Failure',
  [SCREEN_NAME.SEPL_BASIC_DETAILS]: 'Basic Details',
  [SCREEN_NAME.SEPL_PROFESSIONAL_DETAILS]: 'Professional Details',
  [SCREEN_NAME.SEPL_REGISTRATION_DETAILS + PROFESSION.DOCTOR]: 'Professional Details Doctor',
  [SCREEN_NAME.SEPL_REGISTRATION_DETAILS + PROFESSION.CA]: 'Professional Details CA',
  [SCREEN_NAME.CKYC_PERSONAL_DETAILS]: 'CKYC Personal Details',
  [SCREEN_NAME.ADDRESS_PROOF]: 'Address Details',
  [SCREEN_NAME.PAN_ENTRY]: 'Pan Details',
  [SCREEN_NAME.SEPL_PAN_MANUAL_ENTRY]: 'Pan Manual Entry',
  [SCREEN_NAME.SEPL_VERIFY_OCR_PAN]: 'Pan OCR Verify Details',
  [SCREEN_NAME.SEPL_APPLICANT_DETAILS_SCREEN]: 'Applicant Details',
  [SCREEN_NAME.SEPL_OTHER_DETAILS_SCREEN]: 'Other Details',
  [SCREEN_NAME.SEPL_ADDITIONAL_DETAILS_DOCTOR]: 'Additional Details Doctor',
  [SCREEN_NAME.SEPL_ADDITIONAL_DETAILS_CA]: 'Additional Details CA',
  [SCREEN_NAME.VERIFY_OTP]: 'OTP',
  [SCREEN_NAME.SEPL_VERIFY_DOB]: 'Verify DOB',
  [SCREEN_NAME.CKYC_CURRENT_ADDRESS]: 'CKYC Current Address',
  [SCREEN_NAME.CKYC_PERMANENT_ADDRESS]: 'CKYC Permanent Address',
  [SCREEN_NAME.LOAN_OFFER_IN_PROGRESS]: 'Offer Timer',
  [SCREEN_NAME.SEPL_OFFER_DISPLAY]: 'Congratulations',
  [SCREEN_NAME.SEPL_UPDATED_OFFER_DISPLAY]: 'Revised Offer',
  [SCREEN_NAME.SEPL_REQUEST_REVISED_LOAN_OFFER]: 'Revised Offer',
  [SCREEN_NAME.SEPL_APPLICATION_STATUS]: 'Application Status',
  [SCREEN_NAME.SEPL_REFERENCE_DETAILS]: 'Additional Information Reference',
  [SCREEN_NAME.SEPL_RELIGION_DETAILS]: 'Additional Information',
  [SCREEN_NAME.SEPL_OFFICE_DETAILS]: 'Additional Information  Office Address',
  [SCREEN_NAME.SEPL_SELF_DECLARATION]: 'Additional Information Self Declaration',
  [SCREEN_NAME.SUPPORTING_DOCUMENTS_SCREEN]: 'Document Upload',
};

export const SEPL_REJECTION_REASONS = {
  PINCODE_UNSERVICEABLE: 'PINCODE_UNSERVICEABLE',
  PROFESSION_MISMATCH: 'PROFESSIONAL_DETAILS_MISMATCH',
  SELF_DECLARATION_FAILURE: 'SELF_DECLARATION_FAILURE',
};

export const SEPL_OFFER_DECISION = {
  PROCEED: 'Proceed',
  UPDATE: 'Update',
  REJECT: 'Reject',
};

export const SEPL_ADDITIONAL_DETAILS = {
  PERCENT_0: '0',
  PERCENT_25: '25',
  PERCENT_50: '50',
  PERCENT_75: '75',
  PERCENT_100: '100',
};

export const IDFC_RELATIONS = {
  DIRECTOR: 'Director of IDFC Bank',
  MANAGER: 'Manager of IDFC bank',
  SENIOR_OFFICIAL: 'Senior official of IDFC Bank',
};

export const EMPLOYMENT_TYPE = {
  SELF_EMPLOYED,
  SALARIED,
};

export const APPLICATION_TYPE = {
  INDIVIDUAL: 'Individual',
  NON_INDIVIDUAL: 'Non Individual',
};

export const ICON_NAME = {
  BRAND_HAPPY: 'BRAND_HAPPY',
  BRAND_SAD: 'BRAND_SAD',
};

export const PAN_STATUS = {
  FAKE: 'FAKE',
  INVALID: 'INVALID',
};

export const PROGRESS_BAR_CONSTANTS = {
  HL: {
    PRIMARY_MULTI_APPLICANT_FLOW: 'PRIMARY_MULTI_APPLICANT_FLOW',
    CO_APPLICANT_MULTI_APPLICANT_FLOW: 'CO_APPLICANT_MULTI_APPLICANT_FLOW',
    SINGLE_APPLICANT_FLOW: 'SINGLE_APPLICANT_FLOW',
  },
};

export const UPLOAD_DOCUMENT_API_ERROR_STATUS = {
  ERR_APPLY_LOAN_AADHAAR_NOT_CLEAR: 'ERR_APPLY_LOAN_AADHAAR_NOT_CLEAR',
  ERR_APPLY_LOAN_AADHAAR_FRONT_NOT_UPLOADED: 'ERR_APPLY_LOAN_AADHAAR_FRONT_NOT_UPLOADED',
  ERR_APPLY_LOAN_AADHAAR_BACK_NOT_UPLOADED: 'ERR_APPLY_LOAN_AADHAAR_BACK_NOT_UPLOADED',
  ERR_APPLY_LOAN_AADHAAR_BOTH_SIDES_NOT_CLEAR: 'ERR_APPLY_LOAN_AADHAAR_BOTH_SIDES_NOT_CLEAR',
};

export const BANK_STATEMENT_UPLOAD_LIMIT = 3;

export default {};
