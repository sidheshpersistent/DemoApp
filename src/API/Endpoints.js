import {NativeModules} from 'react-native';
import {ConsoleLogHelper} from '../Utils';
const {AppConstantModule} = NativeModules;
var obj = AppConstantModule?.getConstants();
ConsoleLogHelper.log('obj >>', JSON.stringify(obj));

var BASE_URL = '';
var AUTH_URL = '';
var AUTH_PLATFORM_URL = '';
var AUTH_USER_URL = '';
var GOOGLE_API_KEY = '';
var env = 'qa';
let DEPLOY_ENV = obj?.FLAVOR;
if (
  obj !== null &&
  DEPLOY_ENV !== 'null' &&
  (DEPLOY_ENV === 'qa' || DEPLOY_ENV === 'uat' || DEPLOY_ENV === 'preprod')
) {
  /* TODO BASE_URL = obj?.BASE_URL;
  AUTH_PLATFORM_URL = obj?.AUTH_PLATFORM_URL;
  AUTH_URL = obj?.AUTH_PLATFORM_URL;
  AUTH_USER_URL = obj?.AUTH_PLATFORM_URL;
  GOOGLE_API_KEY = obj?.GOOGLE_API_KEY;
   */
  env = obj?.FLAVOR;
  DEPLOY_ENV = obj?.DEPLOY_ENV;
}
if (env === 'preprod') {
  BASE_URL = 'https://app.uat-opt.idfcfirstbank.com/api/ntb-assisted/v1/';
  // TODO update when URL AUTH_URL
  AUTH_URL = 'https://app.uat-entauth.idfcfirstbank.com/api/';
  AUTH_PLATFORM_URL = 'https://app.uat-opt.idfcfirstbank.com/platform/';
  AUTH_USER_URL = 'https://internal-app.uat-entauth.idfcfirstbank.com/api/';
  GOOGLE_API_KEY = 'AIzaSyCR3YkB0vBbndsp2szDKI9WH_HC6prRW3Y';
  DEPLOY_ENV = 'pt';
} else if (env === 'uat') {
  BASE_URL = 'https://app.uat-opt.idfcfirstbank.com/api/ntb-assisted/v1/';
  AUTH_URL = 'https://app.uat-entauth.idfcfirstbank.com/api/';
  AUTH_PLATFORM_URL = 'https://app.uat-opt.idfcfirstbank.com/platform/';
  AUTH_USER_URL = 'https://internal-app.uat-entauth.idfcfirstbank.com/api/';
  GOOGLE_API_KEY = 'AIzaSyCR3YkB0vBbndsp2szDKI9WH_HC6prRW3Y';
  DEPLOY_ENV = 'uat';
} else if (env === 'qa') {
  BASE_URL = 'https://app.qa-opt.idfcfirstbank.com/api/ntb-assisted/v1/';
  // TODO update when URL AUTH_URL
  AUTH_URL = 'https://app.qa-entauth.idfcfirstbank.com/api/';
  AUTH_PLATFORM_URL = 'https://app.qa-opt.idfcfirstbank.com/platform/';
  AUTH_USER_URL = 'https://internal-app.qa-entauth.idfcfirstbank.com/api/';
  GOOGLE_API_KEY = 'AIzaSyCR3YkB0vBbndsp2szDKI9WH_HC6prRW3Y';
  DEPLOY_ENV = 'qa';
} else {
  BASE_URL = 'https://api.dev-opt.idfcfirstbank.com/api/ntb-assisted/v1/';
  AUTH_URL = 'https://app.dev-entauth.idfcfirstbank.com/api/';
  AUTH_PLATFORM_URL = 'https://api.dev-opt.idfcfirstbank.com/platform/';
  AUTH_USER_URL = 'https://internal-app.dev-entauth.idfcfirstbank.com/api/';
  GOOGLE_API_KEY = 'AIzaSyCR3YkB0vBbndsp2szDKI9WH_HC6prRW3Y';
  DEPLOY_ENV = 'dev';
}
// var qaUrl = 'https://app.qa-opt.idfcfirstbank.com/api/ntb-assisted/v1/';
// var uatUrl = 'https://app.uat-opt.idfcfirstbank.com/api/ntb-assisted/v1/';
//  var actualUrl = 'https://api.dev-opt.idfcfirstbank.com/api/ntb-assisted/v1/';
var firebaseUrl =
  'https://matmdemotest-default-rtdb.firebaseio.com/mATMApi/DevTeam';

// var url = actualUrl;
const Endpoints = {
  getResumeApplicationsList: `getJourneyList`,
  getCompanyList: `getCompanyList`,
  getCompanyRank: `getCompanyRank`,
  saveCustomerDetails: `saveCustomerDetails`,
  getNomineeRelation: `getNomineeRelation`,
  getOccupationDetails: `getOccupationDetails`,

  getAgentDasboardDetails: `getAgentDashboardDetails`,
  getPanValidationData: `pan/verify`,
  getPersonalData: `${firebaseUrl}/PersonalDetails/userDetails.json`,
  getLoginDetails: `${firebaseUrl}/AgentLogin.json`,
  getDasboardDetails: `${firebaseUrl}/Dashboard.json`,
  changePassword: `${firebaseUrl}/AgentLogin.json`, // {"password":"anypassword"}
  getBranchList: `branchList/`,
  deleteResumeApplicationsData: `deleteJourney?userId=`,
  checkPanAdharMatch: `/aadharPanMatch/`,
  getBankUseSectionList: `/getBankUseSectionList`,

  customerDedupe1: `${firebaseUrl}/CID/customerDedupe/`, //>>> for 123 isPrathamBankCustomer: true <<>> for 122 isPrathamBankCustomer: false
  customerDedupe: `validate/user`,
  checkMobileDedupe: `mobile/dedupe`,
  checkEmailDedupe: `${firebaseUrl}/CID/emailDedupe/`,
  getCityStateByPin: `cityAndStateByPin/`,
  getProduct: `product`,
  getCountryDetails: `${firebaseUrl}/PersonalDetails/countryList.json`,
  saveFeedback: `user/saveFeedBack`,
  getCountryList: `country`,
  getCityList: `getCity/`,
  getBankList: `bank`,
  getCampaignCodeList: `getCampaignList`,
  ///
  deploy_env: DEPLOY_ENV,
  google_api_key: GOOGLE_API_KEY,
  keepAlive: `${AUTH_URL}session-management/v1/session/keepalive`,
  accessToken: `${AUTH_URL}auth-service/v1/token/exchange`,
  accessTokenValidation: `${AUTH_URL}session-management/v1/session/isvalid`,
  accessTokenLogout: `${AUTH_URL}session-management/v1/session/logout`,
  userInfo: `${AUTH_USER_URL}internal/session-management/v1/session/userinfo`,
  authorizationEndpoint: `${AUTH_PLATFORM_URL}oauth/oauth2/auth`,

  verifyPan: `customerservice/verifyPAN`,
  verifyGST: `customerservice/GSTDetails`,
  veryfyPassport: `customerservice/passport`,
  voterID: `customerservice/VoterID`,
  verifyDL: `customerservice/DL`,
  mobileDedupe: `customerservice/mobileDedupe`,
  GSTDetails: `customerservice/GSTDetails`,
  generateOTP: `customerservice/genOTP`,
  aadharViaBiometric: `customerservice/aadhar/ekyc`,
  verifyAccount: `customerservice/verifyAccount`,

  documentUpload: `documentservice/upload`,
  documentDownload: `documentservice/download`,
  aadharViaDigilocker: `documentservice/digilocker/digilink`,

  aadharViaDigilockerStatus: `caleadservice/digilocker/aadhar/getData/`,
  CALead: `caleadservice/CALead`,
  digilockerGST: `caleadservice/digilocker/gst`,
  proprietor: `caleadservice/proprietor`,
  business: `caleadservice/business`,
  bureauCheck: `caleadservice/bureauCheck`,
  productFeatureSelection: `caleadservice/productFeatureSelection`,
  declarations: `caleadservice/declarations`,
  initialFunding: `caleadservice/funding`,
  MITCBarcode: `caleadservice/mitc`,
  bankUse: `caleadservice/bankuse`,
  approvals: `caleadservice/approvals`,
  sendSMS: `caleadservice/sendSMS`,
  stateMachineAPI: `caleadservice/status/`,
  getAllLeads: `caleadservice/getAll/`,
  etbNtbSearch: `caleadservice/search`,
  etbNtbPrefecthAccount: `caleadservice/prefetchAccount`,
  etbNtbCustEnquiry: `caleadservice/custEnquiry`,
  negativeScreening: `caleadservice/negativeScreening`,

  banks: `caleadservice/banks`,

  config: `caleadservice/config`,
  currentAccountVariants: `caleadservice/current/account/variant`,
  approver: `caleadservice/approver`,
  svrDetailsPart1: `caleadservice/svrDetailsPart1`,
  svrDetailsPart2: `caleadservice/svrDetailsPart2`,
  docValidate: `caleadservice/validate`,

  bankStatement: `caleadservice/bankStatement`,
  getPerfiosBankData: `caleadservice/perfios/getdata`,
  getResumeJourneyCheck: `getResumeJourney?`,
  // progress bar percent sve api
  // getProgressPercent:`user/info`,
  emailVerify: `karza/emailVerify`,
  accountOpening: `account`,
  saveBankUseSection: `createBankUseSection`,
  getPaymentDetails: `getPaymentDetails/`,
};

export default Endpoints;
