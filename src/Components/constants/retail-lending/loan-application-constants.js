export const ADDRESS_FIELDS_TO_DISPLAY = ['addressLine1', 'addressLine2', 'addressLine3', 'city', 'pincode', 'state']; // landmark is not added to the list, since KYC data doesn't have landmark info

// Can be removed once we remove old HLEmploymentDetailsScreen
export const EMPLOYMENT_TYPES = {
  SALARIED: 'Salaried',
  SELF_EMPLOYED: 'SelfEmployed',
};

export const HL_EMPLOYMENT_TYPES = {
  SALARIED: 'Salaried',
  SELF_EMPLOYED: 'Self Employed',
};

export const ADDRESS_TYPES = {
  RESIDENCE_ADDRESS: 'RESIDENCE ADDRESS',
  PERMANENT_ADDRESS: 'PERMANENT ADDRESS',
  OFFICE_ADDRESS: 'OFFICE ADDRESS',
};

export const MARITAL_STATUSES = {
  SINGLE: 'Single',
  MARRIED: 'Married',
};

export const HL_EMI_DETAIL_STATUS = {
  EMPTY: '',
  ACCEPT: 'ACCEPT',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
};

export const TRACK_PROGRESS_API_STATUS_TYPES = {
  REJECT: 'REJECT',
  CANCEL: 'CANCEL',
  SUCCESS: 'SUCCESS',
  IN_PROGRESS: 'IN_PROGRESS',
  RETRY: 'RETRY',
  ERROR: 'ERROR',
};

export const REQUEST_HEADER_SOURCE = 'mobile';

export const APPLICANT_TYPES = {
  APPLICANT: 'Applicant',
  CO_APPLICANT: 'Co-Applicant',
};

export const SWITCH_SCREEN_STATUS = {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETE: 'COMPLETE',
};

export const DOCUMENT_LIST_API_STATUS = {
  HOLD: 'Hold',
  NOT_REQUIRED: 'Not Required',
  SUCCESS: 'Success',
  COMPLETED: 'Completed',
};

export const HL_RESUME_STATUS = {
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS',
  NOT_STARTED: 'NOT_STARTED',
};
