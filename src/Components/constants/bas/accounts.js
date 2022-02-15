import permissions from '@idfc/ui-commons/src/authorization/permissions';
import ScreenConstants from 'constants/screen-constants';
import HAVE_ROUTES from '../routes/have';
import { allToCamelCase, toCamelCase } from '../../helpers/accountHelper';
import { CONSTANTS } from '../payments';

const {
  HAVE: {
    ACCOUNTS: { DOWNLOAD_STATEMENT, ACCOUNT_STATEMENT },
  },
} = ScreenConstants;

const addFundOtion = {
  title: 'Add Funds',
  subTitle: 'Use UPI, IMPS, NEFT or RTGS',
  IconName: 'Plus',
  permission: CONSTANTS.UPI_PERMISSION,
  displayOrder: 1,
  ignoreConditions: true,
};

const viewDownloadStatementOption = {
  title: DOWNLOAD_STATEMENT,
  IconName: 'Download',
  displayOrder: 6,
  onPress: ({ navigation, account: accountInfo }) =>
    navigation.navigate('AccountStatement', {
      headerTitle: ACCOUNT_STATEMENT,
      accountDetails: accountInfo,
    }),
};

export const manageChequeBooks = {
  title: 'Manage Chequebooks',
  subTitle: 'Track, stop, cancel cheques & more',
  IconName: 'Cheque',
  permission: permissions.ChequeBookManagement,
  onPress: ({ navigation, account: accountInfo, accountList }) =>
    navigation.navigate(HAVE_ROUTES.CHECK_BOOK_SERIES, {
      account: toCamelCase(accountInfo),
      accountList: allToCamelCase(accountList),
    }),
  displayOrder: 3,
};

export const manageOverdraft = {
  title: 'Manage Overdraft (OD) against FD',
  subTitle: 'Enhance your limit or close overdraft',
  IconName: 'Integration',
  permission: permissions.ODAgainstFD,
  onPress: ({ navigation, account: accountInfo }) => navigation.navigate(HAVE_ROUTES.MANAGE_OD_AGAINST_FD, accountInfo),
  displayOrder: 4,
};

export const createOverdraft = {
  title: 'Create Overdraft (OD) against FD',
  subTitle: 'Enhance your limit or close overdraft',
  IconName: 'Integration',
  permission: permissions.ODAgainstFD,
  onPress: ({ navigation, account: accountInfo }) => navigation.navigate(HAVE_ROUTES.OVERDRAFT_INFO, accountInfo),
  displayOrder: 4,
};

const manageNotificationSetting = {
  title: 'Manage Notification Settings',
  IconName: 'Card',
  displayOrder: 5,
};

const manageAccess = {
  title: 'Manage Access',
  subTitle: 'Manage daily limits and user permissions',
  IconName: 'Settings',
  permission: permissions.AccessManagement,
  onPress: ({ navigation }) => navigation.navigate(HAVE_ROUTES.ACCESS_MANAGEMENT),
  displayOrder: 6,
  ignoreConditions: true,
};

export const options = [viewDownloadStatementOption, addFundOtion, manageNotificationSetting, manageAccess];

export const optionsForRERACollection = [viewDownloadStatementOption, addFundOtion, manageNotificationSetting];

export const optionsForRERA = [viewDownloadStatementOption, manageNotificationSetting];

export const limitedAccountOptions = [viewDownloadStatementOption, manageNotificationSetting];

export const odAgainstFd = {
  LEARN_MORE_ABOUT_IDFC: 'Learn more about IDFC FIRST Bank’s OD facility',
  SELECTED_OD_LIMIT: 'Selected OD limit',
  MAX_ELIGIBLE_OD_LIMIT: 'Maximum eligible OD limit:',
  FD_VALUE_SELECTED: 'FD value selected',
  ELIGIBLE_OD_LIMIT: 'Eligible OD limit',
  APPLICABLE_INTEREST: 'Applicable Interest',
  NOT_APPLICABLE: 'Not applicable',
  NOT_APPLICABLE_INTEREST: 'NA',
  AVG_ROI_OF_SELECTED_FDS: 'Average ROI of selected FDs',
  AVG_ROI: 'Average ROI',
  FEE: 'Fee',
  CURRENT_ACCOUNT_LINKED_TO_OD_LIMIT: 'Current Account linked to OD Limit',
  CHOOSE_ANOTHER_ACCOUNT: 'Choose another account',
  I_CONFIRM_TO_HAVE_READ: 'I confirm to have read and agreed to the',
  RISK_DISCLOSURE_AND_TERMS_AND_CONDITION: 'Risk Disclosure and Terms & Conditions.',
  CREATE_OD_AGAINST_FD: 'Create OD against FD',
  HERE: 'here',
  MANAGE_ACCOUNT: 'Change',
  HELP_TEXT_ELIGIBLE_LIMIT_1: 'Eligible OD limit is',
  HELP_TEXT_ELIGIBLE_LIMIT_2: 'of the deposit amount in the FDs selected below',
  HELP_TEXT_MAX_ELIGIBLE_LIMIT_1: 'Maximum eligible limit is',
  HELP_TEXT_MAX_ELIGIBLE_LIMIT_2: 'of the total deposit amount in all your FDs, with auto-renewal enabled',
  FD_ADVICE: 'FD Advice',
  DOWNLOAD: 'Download',
  CONGRATULATIONS: 'Congratulations!',
  UNUSED_OD_ERROR: 'Select more FDs to be eligible for your selected OD limit, or change selected OD limit',
  ENABLE_AUTO_RENEWAL: 'All your FDs with auto-renewal enabled',
  MAX_FD_SELECTION_LIMIT_WARNING: 'You can only select upto 20 FDs to create an OD',
  OVERDRAFT_FOR: 'Your OD for',
  EMAIL: 'Email',
  SELECT_MAX_OD_LIMIT_BTN: 'Select this OD limit',
  SUCCESSFULLY_CREATED: 'has been successfully created.',
  SENT_FOR_APPROVAL: 'has been sent for approval.',
  PLEASE_ACCEPT_T_C: 'Please accept terms & conditions to proceed',
  OD_LIMIT_INFO_1: 'Selected limit is only',
  OD_LIMIT_INFO_2: 'of',
  OD_LIMIT_INFO_3: 'i.e. the OD limit you’re eligible for, based on selected FDs.',
  OD_LESS_THAN_MIN_AMOUNT_VALIDATION: 'Please select an OD limit higher than',
  OD_MORE_THAN_MAX_AMOUNT_VALIDATION: 'Maximum eligible OD limit is',
  OD_HELP_TEXT_1: 'None of your FDs are eligible for OD creation, since they do not meet the necessary criteria',
  OD_HELP_TEXT_2: 'See eligibility criteria here',
  NO_FD_SELECTED_ERROR_1: 'Please select FDs worth',
  NO_FD_SELECTED_ERROR_2: 'or more to proceed',
  OD_SELECTION_LIMIT_REACHED: 'You have reached the maximum of 20 FDs permitted for OD creation',
  MORE_THAN_MAX_FD_AMOUNT_SELECTED_1: 'Please select FDs worth a total of',
  MORE_THAN_MAX_FD_AMOUNT_SELECTED_2: 'or less to proceed',
  SELECTED_LIMIT_IS_HIGHER_THAN_ELIGIBLE_LIMIT: 'Selected OD limit is higher than Eligible OD limit',
  RISK_DISCLOSURE: 'Risk Disclosure',
};
