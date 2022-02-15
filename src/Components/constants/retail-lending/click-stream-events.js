export default {
  LOAN_DETAILS: {
    START_LOAN_JOURNEY: 'loan_application_journey_start',
    RESUME_LOAN_JOURNEY: 'loan_application_journey_resume',
  },
  REQUIRED_DOCUMENTS_SCREEN: {
    NEXT_CLICK: 'required_documents_next',
  },
  SMS_CONTACT_POPUP: {
    CONTINUE_CLICK: 'sms_contact_popup_continue',
    SMS_PERMISSION_GRANTED: 'sms_permission_granted',
    SMS_PERMISSION_DENIED: 'sms_permission_denied',
    CONTACT_PERMISSION_GRANTED: 'contact_permission_granted',
    CONTACT_PERMISSION_DENIED: 'contact_permission_denied',
  },
  TERMS_AND_CONDITIONS_POPUP: {
    AGREE_CLICK: 'terms_and_conditions_popup_agree',
  },
  PINCODE_VERIFICATION: {
    LOCATION_ACCESS_GRANTED: 'location_access_granted',
    LOCATION_ACCESS_DENIED: 'location_access_denied',
    SERVICEABILITY_SUCCESS: 'pincode_serviceability_success',
  },
  CONFIRM_MOBILE_NUMBER: {
    CORRECT_CLICK: 'confirm_mobile_number_correct',
    INCORRECT_CLICK: 'confirm_mobile_number_incorrect',
  },
  GET_OTP: {
    NEXT_CLICK: 'get_mobile_number_next',
  },
  OTP_VERIFICATION: {
    VALID_OTP: 'otp_verification_valid_otp',
    INVALID_OTP: 'otp_verification_invalid_otp',
    RESEND_OTP: 'otp_verification_resend_otp',
    ONCALL_OTP: 'otp_verification_oncall_otp',
  },
  EASY_LOGIN: {
    CONTINUE_CLICK: 'easy_login_continue',
    DETAILS_FOUND: 'easy_login_details_found',
    DETAILS_NOT_FOUND: 'easy_login_details_not_found',
  },
  SKYC_DETAILS: {
    CORRECT_CLICK: 'confirm_skyc_details_correct',
    INCORRECT_CLICK: 'confirm_skyc_details_incorrect',
  },
  PAN_VERIFICATION: {
    UPLOAD: 'pan_ocr_upload',
    MANUAL_ENTRY_VERIFY: 'pan_manual_entry_verify',
    NSDL_ERROR: 'nsdl_error_silent_proceed',
    NSDL_SUCCESS_STATUS: 'nsdl_completed_status_',
  },
  CKYC_DETAILS: {
    CORRECT_CLICK: 'confirm_ckyc_details_correct',
    INCORRECT_CLICK: 'confirm_ckyc_details_incorrect',
  },
  CKYC_LANDMARK: {
    SUBMIT_CLICK: 'ckyc_landmark_submit',
  },
  OKYC_LANDMARK: {
    SUBMIT_CLICK: 'okyc_landmark_submit',
  },
  SKYC_LANDMARK: {
    SUBMIT_CLICK: 'skyc_landmark_submit',
  },
  OKYC_PROCESS: {
    CONTINUE_CLICK: 'okyc_process_continue',
    SKIP_CLICK: 'okyc_process_skip',
    PERSONAL_AND_CURRENT_DETAILS_CONFIRM_CLICK: 'okyc_confirm_personal_and_current_details',
    PERSONAL_AND_CURRENT_DETAILS_EDIT_CLICK: 'okyc_edit_personal_and_current_details',
  },
  OKYC_DETAILS: {
    CORRECT_CLICK: 'confirm_okyc_details_correct',
    INCORRECT_CLICK: 'confirm_okyc_details_incorrect',
  },
  ADDRESS_PROOF: {
    UPLOAD: 'address_proof_upload',
    SKIP_CLICK: 'address_proof_skip',
  },
  PERSONAL_DETAILS_SCREEN: {
    SUBMIT_CLICK: 'applicant_details_and_current_address_submit',
  },
  OTHER_DETAILS_SCREEN: {
    SUBMIT_CLICK: 'permanent_address_submit',
  },
  EMPLOYMENT_DETAILS_SCREEN: {
    SUBMIT_CLICK: 'employment_details_submit',
    ON_COMPANY_SELECT: 'employment_details_on_company_name_select',
    SALARIED_NEXT_CLICK: 'salaried_employment_details_next',
    SELF_EMPLOYED_NEXT_CLICK: 'self_employed_employment_details_next',
  },
  CONGRATS_SCREEN: {
    GO_HOME_CLICK: 'congratulations_go_home_select',
    SETUP_AUTO_REPAYMENT_MANDATE_CLICK: 'congratulations_auto_repayment_mandate_select',
  },
  AUTO_REPAYMENT_MANDATE_REGISTRATION: {
    CONTINUE_CLICK: 'auto_repayment_mandate_registration_continue',
  },
  AUTO_REPAYMENT_MANDATE_CONGRATULATION: {
    VIEW_EBC_CARD_CLICK: 'view_easy_buy_card_submit',
  },
  JOURNEY_SELECTION_SCREEN: {
    PROCEED_WITH_JOURNEY_TYPE: 'journey_selection_',
  },
  LOAN_TENURE: {
    CONTINUE_CLICK: 'loan_details_requested',
    NORMAL_OFFER_ACCEPTED: 'loan_offer_accepted',
    STP_OFFER_ACCEPTED: 'stp_loan_offer_accepted',
  },
  PF_DETAILS: {
    NEXT_CLICK: 'mobile_number_or_pf_submit',
    SKIP_CLICK: 'mobile_number_or_pf_skip',
  },
  UMANG_OTP_VERIFICATION: {
    VALID_OTP: 'umang_otp_verification_valid',
    INVALID_OTP: 'umang_otp_verification_invalid',
    RESEND_OTP: 'umang_otp_verification_resend',
    SKIP_CLICK: 'umang_otp_verification_skip',
  },
  INCOME_DETAILS: {
    LOGIN_VIA_NET_BANKING: 'login_via_net_banking',
    UPLOAD_BANK_STATEMENTS: 'upload_bank_statements',
    ACCOUNT_AGGREGATOR: 'account_aggregator',
    SUBMIT_CLICK: 'income_details_submit',
  },
  FAMILY_DETAILS: {
    PROCEED_CLICK: 'family_details_proceed',
    REDIRECT_TO_SFDC: 'redirect_to_sfdc_url',
  },
  BANK_DETAILS: {
    SEARCH_IFSC: 'bank_details_search_ifsc',
    SUBMIT_SUCCESS: 'bank_details_submit_success',
    SUBMIT_FAILURE: 'bank_details_submit_failure',
    SKIP_CLICK: 'bank_details_skip',
    SELECT_IFSC: 'bank_details_ifsc_select',
    IMPS_VERIFICATION_FAILS_WITHOUT_ERROR_CODE: 'bank_details_imps_verification_fails_without_error_code',
    IMPS_VERIFICATION_FAILS: 'bank_details_imps_verification_fails',
    IMPS_DOWNSTREAM_ERROR: 'bank_details_imps_downstream_fails',
    IMPS_SINGLE_ACCOUNT_RETRY_ERROR: 'bank_details_imps_account_no_fails',
    IMPS_TWO_ACCOUNT_RETRY_ERROR: 'bank_details_imps_policy_fails',
    BANK_DETAILS_VERIFICATION_SUCCESS: 'bank_details_verification_success',
    PROCEED_CLICK: 'bank_details_proceed',
    IFSC_VERIFICATION_FAILS: 'ifsc_verification_fails',
  },
  UPLOAD_DOCUMENTS: {
    UPLOAD_CLICK: 'document_file_upload_click',
    UPLOAD_SUCCESS: 'document_file_upload_success',
    SUBMIT_CLICK: 'documents_submit',
  },
  UPDATE_LOAN_AMOUNT: {
    PROCEED_CLICK: 'update_loan_amount_proceed',
  },
  CONGRATS_DIALER: {
    PROCEED_CLICK: 'congrats_dialer_screen_proceed',
  },
  MY_LOANS: {
    PRODUCT_CARD_CLICK: 'product_card_click',
  },
  MY_LOAN_DETAILS: {
    PAY_EMI_CLICK: 'pay_emi',
    HELP_CENTER_CLICK: 'help_center',
    E_MANDATE_PENDING_CLICK: 'register_e_mandate_pending',
    NAVIGATE_TO_ACCOUNT_STATEMENT_CLICK: 'navigate_to_account_statement_screen',
  },
  ACCOUNT_STATEMENT: {
    DOWNLOAD_CLICK: 'download_statement_of_account',
    EMAIL_CLICK: 'email_statement_of_account',
  },
  MISSED_EMI: {
    PAY_NOW_CLICK: 'missed_emi_pay_now',
  },
  APPLY_FOR_LOAN: {
    EMI_CALCULATOR_CLICK: 'emi_calculator',
  },
  OFFERS: {
    CALLBACK_OFFER_CARD_CLICK: 'callback_offer_card',
    REDIRECTION_OFFER_CARD_CLICK: 'redirection_offer_card',
  },
  CUSTOMER_SERVICE: {
    PAY_EMI: 'loan_service_request_pay_emi',
    LOAN_CHARGES_AND_EMI_DETAILS: 'loan_service_request_loan_charges_and_emi_details',
    DOWNLOAD_LOAN_DOCUMENTS: 'loan_service_request_download_loan_documents',
    EASY_BUY_CARD_DETAILS: 'loan_service_request_easy_buy_card_details',
    TRACK_LOAN_APPLICATION: 'loan_service_request_track_loan_application',
  },
};
