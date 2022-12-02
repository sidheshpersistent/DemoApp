
export const AppConstant = {
  qaAutomationUI: true,
};
export const timeoutConst = {
  VALUE_8000: 8000,
  VALUE_5000: 5000
};

export const PREAPPROVED_FLAG_TYPE = {
  HOSPICASH: "hospicash",
}

export const NetworkCallExecutionStatus = {
  fetching: "fetching",
  succeed: "succeed",
  failed: "failed",
};

export const CARDTYPE = {
  CLASSIC: { name: "CLASSIC", amount: 10000 },
  SIGNATURE: { name: "SIGNATURE", amount: 25000 },
};

export const COMMON_CONST = {
  HIGHLIGHTS: "THIS MONTH'S HIGHLIGHTS",
  FAMILY_DETAILS: "Family Details",
  DROP_JOURNY_MODAL_TITLE: "Welcome back, ",
  DROP_JOURNY_MODAL_DESCRIPTION:
    "As you are our existing user, we have saved your previous inputs. Please continue your savings account journey where you last left off.",
  MAIN_MENU_HEADER: "What do you want to do today?",
};

export const LOGIN = {
  LOGIN: `Login `,
  TO_YOUR_ACCOUNT: `to your account`,
  USER_NAME: "User Name",
  AGENT_ID: "Agent ID",
  PASSWORD: "Password",
  FORGOT_PASSWORD: `Forgot password?`,
  INVALID_USER: `Incorrect Agent ID or Password`,
  INVALID_PASSWORD: `invalid password`,
};

export const CUSTOMERDETAILS = {
  CID_FORM_HEADING: "Enter your customer details to proceed",
  CID_LABEL_CUSTOMER_DETAILS: "Customer Details",
  CID_LABEL_PAN_MANDATORY: "When is it mandatory to enter PAN?",
  CID_FIELD_MOBILE: "Mobile Number*",
  CID_FIELD_EMAIL: "Email Address",
  CID_FIELD_PAN: "Permanent Account Number (PAN)",
  CID_FIELD_AADHAAR: "Aadhaar or virtual ID*",
  CID_FIELD_COMPANY: "Company Name",
  CID_FIELD_RANK: "Rank*",
  CID_LABEL_FOOTER:
    "By proceeding, I am willing to give access to my identity, address, mobile number and email ID from Aadhaar database, for opening tablet-based account with IDFC FIRST Bank.",
};

export const NEWCOMMUNICATIONADDRESS = {
  NCA_FORM_HEADING: {
    Customer: "New communication address",
    Nominee: "Nominee address",
    Guardian: "Guardian address",
  },
  NCA_SUB_HEADING: {
    Customer:
      "Please enter the address where you resides and wants all your communications to be done",
    Nominee: "Please enter the address where customer’s nominee resides",
    Guardian: "Please enter the address where nominee’s guardian resides",
  },

  NCA_PINCODE: "Pincode*",
  NCA_ADDRESS1: "Address Line 1*",
  NCA_ADDRESS2: "Address Line 2",
};

export const EDITBRANCH = {
  EB_FORM_HEADING: "Edit fetched branch",
  EB_SUB_HEADING: "Please select your preferred branch from the options below",
  EB_BRANCH_LOCATION: "Preferred branch location",
};

export const CPD_CONSTANTS = {
  CPD_SERVICES_REQUIRED: "SERVICES REQUIRED",
};

export const AOH_CONSTANTS = {
  AOH_YOUR_ACCOUNT: "Your account creation",
  AOH_IS_ON_HOLD: "is on hold!",
  AOH_INTRO:
    "Our team is validating the PAN image uploaded by you. Once done, you will receive a notification confirming that your account has been created.",
  AOH_CONTENT_HEADER: "Application Reference Number",
  AOH_CONTENT_BODY: "# 123456",
  AOH_NAVIGATE_BUTTON_TEXT: "Go To Dashboard",
};

export const PAO_CONSTANTS = {
  PAO_INTRO: "Explore exciting pre-approved offers for your customer",
  PAO_NAVIGATE_BUTTON_TEXT: "Go To Dashboard",
};

export const AS_CONSTANTS = {
  AS_HEADER: "Please verify account details basis kit selected",
  AS_ACCOUNT_TYPE_HEADER: "ACCOUNT TYPE",
  AS_ACCOUNT_NUMBER_HEADER: "ACCOUNT NUMBER",
  AS_UCIC_HEADER: "UCIC",
  AS_FETCHED_BRANCH_HEADER: "FETCHED BRANCH",
  AS_ACCOUNT_TYPE: "Insta-Savings + Signature Card",
  AS_ACCOUNT_NUMBER: "100345678030",
  AS_UCIC: "1000401288",
  AS_FETCHED_BRANCH: "BKC - Naman",
};

export const Customer_Profile = {
  banking: "banking",
  consent: "consent"
}
export const Account_Type = {
  ASSISTED_SA: "ASSISTED_SA",
  ASSISTED_CS: "ASSISTED_CS"
}
export const Customer_Dedupe = {
  ACC_TYPE_ETB: "ETB",
  SA_CATEGORY: "SA",
  CS_CATEGORY: "CS",
}
export const Customer_Type = {
  NTB_CUSTOMER: "NTB_CUSTOMER",
  PRATHAMBANK_CUSTOMER: "PRATHAMBANK_CUSTOMER",
  ETB_WITH_SA_CUSTOMER: "ETB_WITH_SA_CUSTOMER",
  ETB_WITHOUT_SA_CUSTOMER: "ETB_WITHOUT_SA_CUSTOMER",
  ETB_WITH_CS_CUSTOMER_CORPORATE: "ETB_WITH_CS_CUSTOMER_CORPORATE",
  ETB_WITH_SA_CUSTOMER_CORPORATE: "ETB_WITH_SA_CUSTOMER_CORPORATE"
}
export const Save_Status = {
  finish: "finish",
  save: "save"
}
export const banking_Type = {
  Personalized: "Personalized",
  Instant: "Instant"
}
export const Milestone = {
  CID_AADHAR_DETAILS: "CID_AADHAR_DETAILS",
  PERSONAL_DETAILS: "PERSONAL_DETAILS",
  BANKING_DETAILS: "BANKING_DETAILS",
  CUST_CONSENT_DETAILS: "CUST_CONSENT_DETAILS"
}
export const CommonConstant = {
  AGENTID: "agent@idfc.com",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  NODATA: "NODATA",
  BADREQUEST: "BADREQUEST",
  NOTFOUND: "NOTFOUND",
  INTERNALSERVERERROR: "INTERNALSERVERERROR",
  UNAUTHORISED: "UNAUTHORISED",
  SAVING_REGULAR_25K: "Savings Regular 25K"
}

export const ResponseCD = {
  MD2: "MD2"
}
export const CustomerProfileData = {
  PERSONALDETAIL: "personalDetail",
  SOURCE: "source",
  PERSONALDETAILS: "Personal Details",
  BANKING: "banking",
  BANKINGPREFERENCE: "Banking Preference",
  CONSENT: "consent",
  CUSTOMERCONSENT: "Customer Consent"
}
export const CustomerProfileStepper = {
  PERSONALDETAILS: 0,
  BANKINGPREFERENCES: 1,
  CUSTOMERCONSENT: 2
}
export const NavigationStrings = {
  SA: "SA",
  CS: "CS",
  BUS: "BUS",
  RJ: "RJ",
  TR: "TR",
  LOGOUT: "LOGOUT"
}
export const HamburgerName = {
  OPEN_SAVINGS_ACCOUNT: "Open Savings Account",
  OPEN_CORPORATE_SALARY_ACCOUNT: "Open Corporate Salary Account",
  BANK_USE_SECTION: "Bank Use Section",
  RESUME_APPLICATION: "Resume Application",
  TRANSACTIONS: "Transactions",
  AADHAAR_SEEDING: "Aadhaar seeding",
  AADHAAR_LINKING: "Aadhaar linking",
  LOGOUT: "Logout"

}
export const RadioButtonConstants = {
  RADIO0: "Radio 0",
  RADIO1: "Radio 1",
  RADIO2: "Radio 2",
  RADIO3: "Radio 3",
  RADIO4: "Radio 4"
}
export const PersonalDetailsConstants = {
  POPUP1: "popup1",
  POPUP2: "popup2",
  POPUP3: "popup3",
  DUMMYNUMBER: "123456789122",
  NTB_CUSTOMER: "NTB_customer",
  INDIA: "INDIA",
  POPUPTYPE: {
    PAN: "pan",
    COMMUNICATION_ADDRESS: "communication_address"
  }
}
export const InputStyleError = "error";
export const WebViewURL = {
  TERMSANDCONDITIONS: "https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/termsAndCondition.html?alt=media&token=2e638c7f-e66b-46d5-ae0e-a3b69a2889b0",
  TRANSUNIONCIVIL: "https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/transUnionCivil.html?alt=media&token=70e896a2-7962-44c5-9f17-003d79a9cbaf"
}
export const ImageCaptureType = {
  SIGNATURE: "SIGNATURE",
  PAN: "PAN",
  EMPLOYEEMENTPROOF: "EMPLOYEEMENTPROOF"
}
export const KeyboardType = {
  EMAILADDRESS: "email-address"
}
export const IconName = {
  CROSSSMALL: "CrossSmall"
}
export const Text_Variant = {
  H1: "H1",
  H2: "H2",
  H3: "H3",
  H4: "H4",
  H5: "H5",
  H6: "H6",
  B1: "B1",
  B2: "B2",
  B3: "B3",
  B4: "B4",
  B5: "B5",
  B6: "B6",
};


export const LetterSpacing = {
  MINUS_ZERO_POINT_TWO: -0.2,
  MINUS_ONE: -1,
  MINUS_ZERO_POINT_FIVE: -0.5,
  ZERO: 0,
  ZERO_POINT_FIVE: 0.5,
  ONE: 1,
  MINUS_ZERO_POINT_THREE: -0.3,
  MINUS_ZERO_POINT_SIX: -0.6,
  MINUS_ZERO_POINT_ONE: -0.1,
  ZERO_POINT_TWO: 0.2,
  ZERO_POINT_ONE: 0.1,
};


export const FontWeight = {
  WEIGHT_400: 400,
  WEIGHT_500: 500,
  WEIGHT_700: 700,
  BOLD: "bold",
};
export const TestIds = {
  //Hamburger Menu
  hm_close_drawer: "hm_close_drawer",
  hm_open_hh_acc: "hm_open_hh_acc",
  hm_open_cs_acc: "hm_open_cs_acc",
  hm_bank_use_section: "hm_bank_use_section",
  hm_resume_journey: "hm_resume_journey",
  hm_transaction: "hm_transaction",
  hm_logout: "hm_logout",
  hm_aadhar_linking: "hm_aadhar_linking",

  //Dashboard Screen
  db_avtar: "db_avtar",
  db_welcome_text: "db_welcome_text",
  db_user_name: "db_user_name",
  db_month_highlight_text: "db_month_highlight_text",
  db_total_app: "db_total_app",
  db_successful_app: "db_successful_app",
  db_app_in_progress: "db_app_in_progress",
  db_main_header: "db_main_header",
  db_savings_acc: "db_savings_acc",
  db_salary_acc: "db_salary_acc",
  db_bank_use: "db_bank_use",
  db_resume_app: "db_resume_app",
  db_hamburg_icon: "db_hamburg_icon",

  //splash
  spl_image: "spl_image",

  //fireEvents
  db_saving_acc_click: "db_saving_acc_click",
  db_salary_acc_click: "db_salary_acc_click",
  db_bank_use_click: "db_bank_use_click",
  db_resume_click: "db_resume_click",

  // Login Screen
  lg_title: "lg_title",
  lg_forgot_password: "lg_forgot_password",
  lg_user_name_input: "lg_user_name_input",
  lg_password_input: "lg_password_input",
  lg_login_button: "lg_login_button",
  lg_validation_error_user_name: "lg_validation_error_user_name",
  lg_validation_error_password: "lg_validation_error_password",

  cnp_title: "cnp_title",
  cnp_user_name_input: "cnp_user_name_input",
  cnp_password_input: "cnp_password_input",
  cnp_confirm_password_input: "cnp_confirm_password_input",
  cnp_send_otp_button: "cnp_send_otp_button",
  cnp_cancel_button: "cnp_cancel_button",

  // Verify OTP

  vo_title: "vo_title",
  vo_otp_input: "vo_otp_input",
  vo_verify_otp_button: "vo_verify_otp_button",
  vo_cancel_button: "vo_cancel_button",
  vo_resend_otp: "vo_resend_otp",

  //communication address
  nca_popuInfo: "nca_popuInfo",
  nca_pincode: "nca_pincode",
  nca_address1: "nca_address1",
  nca_address2: "nca_address2",
  nca_address3: "nca_address3",
  nca_citytext: "nca_citytext",
  nca_popup_submit: "nca_popup_submit",
  nca_popup_cancel: "nca_popup_cancel",

  //common
  popup_confirm: "popup_confirm",
  popup_cancel: "popup_cancel",

  // PopupTextInput
  pti_popup_info_text: "pti_popup_info_text",
  pti_popup_text_input: "pti_popup_text_input",
  pti_popup_submit: "pti_popup_submit",
  pti_popup_cancel: "pti_popup_cancel",

  //PopupExistingCustomer
  pec_popup_icon: "pec_popup_icon",
  pec_heading: "pec_heading",
  pec_sub_text: "pec_sub_text",
  pec_customer_mobile: "pec_customer_mobile",
  pec_customer_mobile_number: "pec_customer_mobile_number",
  pec_use_for_account_opening: "pec_use_for_account_opening",
  pec_select_reason: "pec_select_reason",
  pec_select_dropdown: "pec_select_dropdown",
  pec_submit_button: "pec_submit_button",
  pec_cancel_button: "pec_cancel_button",
  pec_flatlist: "pec_flatlist",

  // Popup Edit Branch
  peb_popup_info: "peb_popup_info",
  peb_popup_submit: "peb_popup_submit",
  peb_popup_cancel: "peb_popup_cancel",

  //  CID
  cid_header_back_arrow: "cid_header_back_arrow",
  cid_header: "cid_header",
  cid_cs_cust_details: "cid_cs_cust_details",
  cid_cs_company_name: "cid_cs_company_name",
  cid_cs_company_rank: "cid_cs_company_rank",
  cid_cust_details: "cid_cust_details",
  cid_mobile_number: "cid_mobile_number",
  cid_email: "cid_email",
  cid_office_email: "cid_office_email",
  cid_personal_email: "cid_personal_email",
  cid_pan: "cid_pan",
  cid_mandatory_pan: "cid_mandatory_pan",
  cid_aadhar: "cid_aadhar",
  cid_note: "cid_note",
  cid_proceed_button: "cid_proceed_button",
  cid_pan_tooltip: "cid_pan_tooltip",
  cid_submit_button: "cid_submit_button",
  cid_emp_pop_up_submit: "cid_emp_pop_up_submit",
  cid_office_verification_pop_up_submit: "cid_office_verification_pop_up_submit",
  cid_popup_verification: "cid_popup_verification",

  //CID_POP_UPS
  cid_adhar_pop_up_submit: "cid_adhar_pop_up_submit",
  cid_adhar_pop_up_cancel: "cid_adhar_pop_up_cancel",
  cid_adhar_pop_up_submit1: "cid_adhar_pop_up_submit1",
  cid_adhar_pop_up_cancel1: "cid_adhar_pop_up_cancel1",
  cid_adhar_pop_up_submit2: "cid_adhar_pop_up_submit2",
  cid_adhar_pop_up_cancel2: "cid_adhar_pop_up_cancel2",
  cid_pan_pop_up_submit: "cid_pan_pop_up_submit",
  cid_pan_pop_up_cancel: "cid_pan_pop_up_cancel",
  cid_pan_pop_up_submit1: "cid_pan_pop_up_submit1",
  cid_pan_pop_up_cancel1: "cid_pan_pop_up_cancel1",
  cid_pan_pop_up_submit2: "cid_pan_pop_up_submit2",
  cid_pan_pop_up_cancel2: "cid_pan_pop_up_cancel2",
  cid_pan_check_submit: "cid_pan_check_submit",
  cid_re_enter_pan: "cid_re_enter_pan",
  cid_re_enter_pan_validate: "cid_re_enter_pan_validate",
  cid_pan_adhar_match_pop_up_submit: "cid_pan_adhar_match_pop_up_submit",
  cid_pan_adhar_match_pop_up_cancel: "cid_pan_adhar_match_pop_up_cancel",
  cid_resume_journey_pop_up_submit: "cid_resume_journey_pop_up_submit",
  cid_resume_journey_pop_up_cancel: "cid_resume_journey_pop_up_cancel",
  cid_acc_already_exist_submit: "cid_acc_already_exist_submit",
  cid_acc_already_exist_cancel: "cid_acc_already_exist_cancel",


  // Pre-Approved Screen

  pa_availed_title: "pa_availed_title",
  pa_availed_intro_1: "pa_availed_intro_1",
  pa_availed_application_status: "pa_availed_application_status",
  pa_availed_applicationDetail_title_1: "pa_availed_applicationDetail_title_1",
  pa_availed_applicationDetail_refNumber:
    "pa_availed_applicationDetail_refNumber",
  pa_availed_applicationDetail_title_2: "pa_availed_applicationDetail_title_2",
  pa_availed_applicationDetail_time: "pa_availed_applicationDetail_time",
  pa_availed_processingInfo: "pa_availed_processingInfo",
  pa_title: "pa_title",
  pa_intro_1: "pa_intro_1",
  pa_intro_2: "pa_intro_2",
  pa_knowMore_button: "pa_knowMore_button",
  pa_AvailOffer_button: "pa_AvailOffer_button",
  pa_terms_checkbox: "pa_terms_checkbox",
  pa_terms_text: "pa_terms_text",
  pa_declartion_checkbox: "pa_declartion_checkbox",
  pa_declation_text: "pa_declation_text",
  //OutLineButton
  OutlineButton: "OutlineButton",

  //BUS
  bus_account_head_id: "bus_account_head_id",
  bus_produ_head_id: "bus_produ_head_id",
  bus_cust_head_id: "bus_cust_head_id",
  //CustomerProfile
  cp_gross_annual_income: "cp_gross_annual_income",
  cp_occupation_type: "cp_occupation_type",
  cp_source_of_income: "cp_source_of_income",
  cp_search_company: "cp_search_company",
  cp_mothers_full_name: "cp_mothers_full_name",
  cp_country_of_birth: "cp_country_of_birth",
  cp_city_of_birth: "cp_city_of_birth",
  cp_cutomer_address: "cp_cutomer_address",
  cp_fathers_name: "cp_fathers_name",
  cp_have_you_applied_pan: "cp_have_you_applied_pan",
  cp_date_of_application: "cp_date_of_application",
  cp_acknowledgement_no: "cp_acknowledgement_no",
  cp_cutomer_address_radio1: "cp_cutomer_address_radio1",
  cp_cutomer_address_radio2: "cp_cutomer_address_radio2",
  cp_edit_other_address: "cp_edit_other_address",
  cp_toogle_nominee: "cp_toogle_nominee",
  cp_communication_address: "cp_communication_address",
  cp_communication_address_radio3: "cp_communication_address_radio3",
  cp_communication_address_radio4: "cp_communication_address_radio4",
  cp_communication_address_radio5: "cp_communication_address_radio5",
  cp_communication_address_radio6: "cp_communication_address_radio6",
  cp_communication_address_radio7: "cp_communication_address_radio7",
  cp_communication_address_radio8: "cp_communication_address_radio8",
  cp_communication_address_radio9: "cp_communication_address_radio9",
  cp_edit_communication2: "cp_edit_communication2",
  cp_new_address_label: "cp_new_address_label",
  cp_full_address_label: "cp_full_address_label",
  cp_nominee_details_label: "cp_nominee_details_label",
  cp_nominee_name: "cp_nominee_name",
  cp_relationship_with_customer: "cp_relationship_with_customer",
  cp_nominees_dob: "cp_nominees_dob",
  cp_nominees_address: "cp_nominees_address",
  cp_since_nominee: "cp_since_nominee",
  cp_guardian_name: "cp_guardian_name",
  cp_guardian_address: "cp_guardian_address",
  cp_button_guardian_comm_address: "cp_button_guardian_comm_address",
  cp_submit_button: "cp_submit_button",

  // personalized section
  ps_recommended_product: "ps_recommended_product",
  ps_select_a_product: "ps_select_a_product",
  ps_select_product_dropdown: "ps_select_product_dropdown",
  ps_recommended: "ps_recommended",
  ps_card_img_cs: "ps_card_img_cs",
  ps_card_title_cs: "ps_card_title",
  ps_card_name_cs: "ps_card_card_name",
  ps_benifit_title: "ps_benifit_title",
  ps_view_all_benifit: "ps_view_all_benifit",
  ps_employee_reimbursement: "ps_employee_reimbursement",
  ps_employee_reimbursement_yes: "ps_employee_reimbursement_yes",
  ps_employee_reimbursement_no: "ps_employee_reimbursement_no",
  ps_Preferred_branch: "ps_Preferred_branch",
  ps_Preferred_branch_dropdown: "ps_Preferred_branch_dropdown",
  ps_services_required: "ps_services_required",
  ps_checkbook: "ps_checkbook",
  ps_debitcard: "ps_debitcard",
  ps_product_radio: "ps_product_radio",
  ps_employee_reimbursement_switch: "ps_employee_reimbursement_switch",
  ps_checkbook_checkbox: "ps_checkbook_checkbox",
  ps_debitcard_checkbox: "ps_debitcard_checkbox",

  // Banking Preference
  bp_personalized_button: "bp_personalized_button",
  bp_verify_account_details: "bp_verify_account_details",
  bp_account_type_heading: "bp_account_type_heading",
  bp_account_type: "bp_account_type",
  bp_account_number_heading: "bp_account_number_heading",
  bp_account_number: "bp_account_number",
  bp_ucic_heading: "ucic_heading",
  bp_ucic: "ucic",
  bp_fetched_branch_heading: "fetched_branch_heading",
  bp_branch_selected: "bp_branch_selected",
  bp_opt_for: "bp_opt_for",
  bp_yes: "bp_yes",
  bp_opt_for_switch: "bp_opt_for_switch",
  bp_no: "bp_no",
  bp_terms_aggreed_checkbox: "bp_terms_aggreed_checkbox",
  bp_i_agree: "bp_i_agree",
  bp_inactive_forex: "bp_inactive_forex",
  bp_active_forex: "bp_active_forex",
  bp_active_debit_card: "bp_active_debit_card",
  bp_is_edit_branch: "bp_is_edit_branch",
  bp_booster_account_checkbox: "bp_booster_account_checkbox",
  bp_back_arrow: "bp_back_arrow",
  bp_right_arrow: "bp_right_arrow",
  bp_popup_submit: "bp_popup_submit",
  bp_popup_cancel: "bp_popup_cancel",
  bp_test: "test",

  //instant banking

  ib_please_assign: "ib_please_assign",
  ib_scan_qr: "ib_scan_qr",
  ib_scan_button: "ib_scan_button",
  ib_scan_now: "ib_scan_now",
  ib_or: "ib_or",
  ib_account_number_input: "ib_account_number_input",

  //Customer consent
  cc_customer_signature: "cc_customer_signature",
  cc_recapture_signature: "cc_recapture_signature",
  cc_signature_container: "cc_signature_container",
  cc_customer_pan_card: "cc_customer_pan_card",
  cc_recapture_pan: "cc_recapture_pan",
  cc_pan_container: "cc_pan_container",
  cc_indian_citizen_checkbox: "cc_indian_citizen_checkbox",
  cc_indian_citizen_text: "cc_indian_citizen_text",
  cc_tax_country_select: "cc_tax_country_select",
  cc_foreign_TIN: "cc_foreign_TIN",
  cc_TIN_issuing_country: "cc_TIN_issuing_country",
  cc_politically_exposed_checbox: "cc_politically_exposed_checbox",
  cc_politically_exposed_text: "cc_politically_exposed_text",
  cc_terms_and_conditions_checkbox: "cc_terms_and_conditions_checkbox",
  cc_i_agree_text: "cc_i_agree_text",
  cc_terms_and_conditions_text: "cc_terms_and_conditions_text",
  cc_CIBIL_text: "cc_CIBIL_text",
  cc_consent_checkbox: "cc_consent_checkbox",
  cc_consent_text: "cc_consent_text",
  cc_back_button: "cc_back_button",
  cc_active_button: "cc_active_button",
  cc_inactive_button: "cc_inactive_button",
  pop_up_camera_signature: "pop_up_camera_signature",
  pop_up_library_signature: "pop_up_library_signature",
  pop_up_camera_pan: "pop_up_camera_pan",
  pop_up_library_pan: "pop_up_library_pan",
  pop_up_politically_exposed_person: "pop_up_politically_exposed_person",
  pop_up_politically_exposed_person_text: "pop_up_politically_exposed_person_text",

  //Know more
  km_exit_button: "km_exit_button",
  km_text_title: "km_text_title",
  km_text_subtitle: "km_text_subtitle",
  km_webview: "km_webview",
  km_done_button: "km_done_button",

  //Hospicash

  hc_nominee_name: "hc_nominee_name",
  hc_insured_relation: "hc_insured_relation",
  hc_nomineeDOB: "hc_nomineeDOB",
  hc_is_nomineeAddressSame: "hc_is_nomineeAddressSame",
  hc_nominee_pincode: "hc_nominee_pincode",
  hc_nominee_state: "hc_nominee_state",
  hc_nominee_city: "hc_nominee_city",
  hc_nominee_address1: "hc_nominee_address1",
  hc_nominee_address2: "hc_nominee_address2",
  hc_nominee_address_3: "hc_nominee_address_3",
  hc_guardian_name: "hc_guardian_name",
  hc_is_guardian_address: "hc_is_guardian_address",
  hc_guardian_pincode: "hc_guardian_pincode",
  hc_guardian_state: "hc_guardian_state",
  hc_guardian_city: "hc_guardian_city",
  hc_guardian_address1: "hc_guardian_address1",
  hc_guardian_address2: "hc_guardian_address2",
  hc_guardian_address3: "hc_guardian_address3",
  hc_terms_checkbox: "hc_terms_checkbox",
  hc_terms_text: "hc_terms_text",
  hc_declaration_checkbox: "hc_declaration_checkbox",
  hc_declaration_text: "hc_declaration_text",
  hc_apply_now_button: "hc_apply_now_button",

  // CreditCard

  crc_residence_address: "crc_residence_address",
  crc_office_address: "crc_office_address",
  crc_search_company: "crc_search_company",
  crc_filtered_result: "crc_filtered_result",
  crc_work_email: "crc_work_email",
  crc_complete_address: "crc_complete_address",
  crc_pincode: "crc_pincode",
  crc_search_company2: "crc_search_company2",
  crc_filtered_result2: "crc_filtered_result2",
  crc_work_email2: "crc_work_email2",
  crc_complete_address2: "crc_complete_address2",
  crc_pincode2: "crc_pincode2",
  crc_otp_placeholder: "crc_otp_placeholder",
  crc_set_otp: "crc_set_otp",
  crc_resend_otp: "crc_resend_otp",
  crc_verify_otp_button: "crc_verify_otp_button",
  crc_send_otp: "crc_send_otp",
  crc_altrenate_number: "crc_altrenate_number",
  crc_applynow_creditCard_yes: "crc_applynow_creditCard_yes",
  crc_applynow_creditCard_no: "crc_applynow_creditCard_no",
  crc_full_name: "crc_full_name",
  crc_relationship_with_customer: "crc_relationship_with_customer",
  crc_terms_and_conditions_checkbox: "crc_terms_and_conditions_checkbox",
  crc_ApplyNow_button: "crc_ApplyNow_button",

  // Resume Application
  rap_back_arrow_button: "rap_back_arrow_button",
  rap_search_by: "rap_search_by",
  rap_delete_popup: "rap_delete_popup",
  rap_selsect_resason: "rap_selsect_resason",
  rap_error_popup: "rap_error_popup",
  rap_delete_yes: "rap_delete_yes",
  rap_delete_no: "rap_delete_no",
  rap_all_application_list: "rap_all_application_list",
  rap_single_item: "rap_single_item",
  // webview Component
  custom_web_page: "custom_web_page",
  // BankUseSection Form 
  bus_close_and_save: "bus_close_and_save",
  bus_initial_funding: "bus_initial_funding",
  bus_ip_amount: "bus_ip_amount",
  bus_mode_of_payment: "bus_mode_of_payment",
  bus_cheque_details: "bus_cheque_details",
  bus_bank_name: "bus_bank_name",
  bus_branch_name: "bus_branch_name",
  bus_lead_code: "bus_lead_code",
  bus_lead_warmer_code: "bus_lead_warmer_code",
  bus_lead_converter_code: "bus_lead_converter_code",
  bus_campaign_code: "bus_campaign_code",
  bus_met_customer_at: "bus_met_customer_at",
  bus_is_customer_sign: "bus_is_customer_sign",
  bus_save_button: "bus_save_button",
  bus_error_popup: "bus_error_popup",
  bus_success_message_popup: "bus_success_message_popup",

  //BankuseSection list
  bsl_save_and_close: "bsl_save_and_close"
};
export const FontFamily = {
  INTER_BOLD: "Inter-Bold",
  Inter_SemiBold: "Inter-SemiBold",
  Inter_REGULAR: "Inter-Regular",
  Inter_Light: "Inter-Light",
};

export const LocalDB = {
  agentInfo: "Agent_Info",
  headerInfo: "Header_Info",
  userInteraction: "User_Interaction",
  companyDetails: "Company_Details",
  rankDetails: "Rank_Details"
};

export const getDOBMinDate = () => {
  var date = new Date();
  date.setFullYear(date.getFullYear() - 100);
  return date;
}

export const AdharPanMatch = {
  COMPLETE_MATCHED: "Complete Matched",
  PARTIAL_MATCHED: "Partial MissMatched",
  // MISSMATCHED:"Complete MissMatched", //missmatch condition for future reference
  BAD_REQUEST: "Bad Request"
}
export const oAuth = {
  clientId: 'assisted-sa',
  redirectUrl: 'com.assistedsa:/oauthredirect',
}
export const Api_Error_Code = {
  ERROR_402: "402"
}


export const customerProfileReset = {
  personalDetail: {
    annualIncome: "",
    mothersName: "",
    countryOfBirth: PersonalDetailsConstants.INDIA,
    countryOfBirthObj: { id: 1, value: "IN", displayText: PersonalDetailsConstants.INDIA },
    nomineeVisible: true,
    communicationAddress: false,
    nomineeCommunicationAddress: false,
    guardianCommunicationAddress: false,
    form60Visible: false,
    panApplied: false,
    selValue: RadioButtonConstants.RADIO1,
    nomineeAddressRadio: RadioButtonConstants.RADIO1,
    guardianAddressRadio: RadioButtonConstants.RADIO1,
    customerOtherAddress: null,
    guardianOtherAddress: null,
    nomineeDob: "",
    isNomineeMinor: false,
    showCompanyName: false,
    occupationType: null,
    sourceOfIncome: null,
    sourceOfIncomeDetails: [],
    nomineeName: "",
    customerRelation: null,
    guardianName: "",
    customerPincode: "",
    customerAddress1: "",
    customerAddress2: "",
    customerAddress3: "",
    nomineeOtherAddress: null,
    nomineePincode: "",
    nomineeAddress1: "",
    nomineeAddress2: "",
    nomineeAddress3: "",
    guardianPincode: "",
    guardianAddress1: "",
    guardianAddress2: "",
    guardianAddress3: "",
    cityOfBirth: "",
    cityOfBirthObj: null,
    CompanyValue: "",
    CompanyValueObj: null,
    popupType: false,
    occupationDetails: "",
    companyDetails: "",
    cityDetails: "",
    countryDetails: "",
    panNumber: "",
    isPanPopupShow: false,
    panAdharInvalid: false,
    isPanAdharMatchPopup: false,
    isErrorPan: false,
    isNTBUser: false,
    customerData: "",
    isPrathamBankUser: false,
    isETBUser: false,
    popupTypeInfo: "",
    fathersName: "",
    acknowledgeNumb: "",
    applicationDob: "",
    hideSearchResult: false,
    hideCountrySearch: false,
    isCountrySelectedFromList: true,
    hideCitySearch: false,
    isCitySelectedFromList: false,
    isCompanySelectedFromList: false,
    companyName: null,
    nomineeRelationData: [],
    allCountryListData: []
  },
  bankingPreference: {
    inputAccountNumber: "",
    Success: false,
    verifyKitData: {
      data: {
        accountNumber: "",
        ucic: "",
        accountType: ""
      }
    },
    activeIndex: 0,
    istermsAggreed: true,
    boosterAccount: true,
    checkbookOpted: true,
    debitOpted: true,
    productRadio: RadioButtonConstants.RADIO0,
    productSelected: "",
    branchSelected: "",
    reimburseAccount: false,
    services: "",
    isEditBranch: false,
    SAProductList: [],
    branchSelectedValue: "",
    isBranchSelectedFromList: false,
    personalizedTerms: true,
    instaKitTerms: true
  },
  customerConsent: {
    isIndianCitizen: true,
    isEmploymentProofNeeded: true, // Todo : this response is come from api call
    isPanImageNeeded: true, // Todo : this response is come from api call
    country: "",
    foreignTin: "",
    tinCountry: "",
    isTermsAgreed: true,
    isConsentGiven: true,
    isPoliticalyExposed: false,
    signatureImage: "",
    panImage: "",
    employmentProofImage: "",
    isOpenImagePicker: false,
    isOpenImagePickerPan: false,
    isErrorForeignTIN: false
  }
}
