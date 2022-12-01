
import { NativeModules } from 'react-native';
import { ConsoleLogHelper } from '../Utils';
const { AppConstantModule } = NativeModules;
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
var firebaseUrl = 'https://matmdemotest-default-rtdb.firebaseio.com/mATMApi/DevTeam';

// var url = actualUrl;
const Endpoints = {
  getAgentDasboardDetails: `${BASE_URL}getAgentDashboardDetails`,
  getPanValidationData: `${BASE_URL}pan/verify`,
  saveCustomerDetails: `${BASE_URL}user/info`,
  getPersonalData:`${firebaseUrl}/PersonalDetails/userDetails.json`,
  getLoginDetails: `${firebaseUrl}/AgentLogin.json`,
  getDasboardDetails: `${firebaseUrl}/Dashboard.json`,
  changePassword: `${firebaseUrl}/AgentLogin.json`, // {"password":"anypassword"}
  getCompanyList: `${BASE_URL}company/`,
  getBranchList: `${BASE_URL}branchList/`,
  getCompanyRank:`${BASE_URL}rankDetails/`,
  getResumeApplicationsList: `${BASE_URL}getJourneyList`,
  deleteResumeApplicationsData:`${BASE_URL}deleteJourney?userId=`,
  checkPanAdharMatch: `${BASE_URL}/aadharPanMatch/`,
  getBankUseSectionList: `${BASE_URL}/getBankUseSectionList`,
  
  customerDedupe1: `${firebaseUrl}/CID/customerDedupe/`, //>>> for 123 isPrathamBankCustomer: true <<>> for 122 isPrathamBankCustomer: false
  customerDedupe: `${BASE_URL}validate/user`,
  checkMobileDedupe: `${BASE_URL}mobile/dedupe`,
  checkEmailDedupe: `${firebaseUrl}/CID/emailDedupe/`,
  getNomineeRelation:`${BASE_URL}nominee/relation`,
  getCityStateByPin:`${BASE_URL}cityAndStateByPin/`,
  getProduct:`${BASE_URL}product`,
  getCountryDetails:`${firebaseUrl}/PersonalDetails/countryList.json`,
  saveFeedback:`${BASE_URL}user/saveFeedBack`,
  getCountryList:`${BASE_URL}country`,
  getCityList:`${BASE_URL}getCity/`,
  getBankList:`${BASE_URL}bank`,
  getCampaignCodeList:`${BASE_URL}getCampaignList`,
  ///
  deploy_env: DEPLOY_ENV,
  google_api_key: GOOGLE_API_KEY,
  keepAlive: `${AUTH_URL}session-management/v1/session/keepalive`,
  accessToken: `${AUTH_URL}auth-service/v1/token/exchange`,
  accessTokenValidation: `${AUTH_URL}session-management/v1/session/isvalid`,
  accessTokenLogout: `${AUTH_URL}session-management/v1/session/logout`,
  userInfo: `${AUTH_USER_URL}internal/session-management/v1/session/userinfo`,
  authorizationEndpoint: `${AUTH_PLATFORM_URL}oauth/oauth2/auth`,

  verifyPan: `${BASE_URL}customerservice/verifyPAN`,
  verifyGST: `${BASE_URL}customerservice/GSTDetails`,
  veryfyPassport: `${BASE_URL}customerservice/passport`,
  voterID: `${BASE_URL}customerservice/VoterID`,
  verifyDL: `${BASE_URL}customerservice/DL`,
  mobileDedupe: `${BASE_URL}customerservice/mobileDedupe`,
  GSTDetails: `${BASE_URL}customerservice/GSTDetails`,
  generateOTP: `${BASE_URL}customerservice/genOTP`,
  aadharViaBiometric: `${BASE_URL}customerservice/aadhar/ekyc`,
  verifyAccount: `${BASE_URL}customerservice/verifyAccount`,

  documentUpload: `${BASE_URL}documentservice/upload`,
  documentDownload: `${BASE_URL}documentservice/download`,
  aadharViaDigilocker: `${BASE_URL}documentservice/digilocker/digilink`,

  aadharViaDigilockerStatus: `${BASE_URL}caleadservice/digilocker/aadhar/getData/`,
  CALead: `${BASE_URL}caleadservice/CALead`,
  digilockerGST: `${BASE_URL}caleadservice/digilocker/gst`,
  proprietor: `${BASE_URL}caleadservice/proprietor`,
  business: `${BASE_URL}caleadservice/business`,
  bureauCheck: `${BASE_URL}caleadservice/bureauCheck`,
  productFeatureSelection: `${BASE_URL}caleadservice/productFeatureSelection`,
  declarations: `${BASE_URL}caleadservice/declarations`,
  initialFunding: `${BASE_URL}caleadservice/funding`,
  MITCBarcode: `${BASE_URL}caleadservice/mitc`,
  bankUse: `${BASE_URL}caleadservice/bankuse`,
  approvals: `${BASE_URL}caleadservice/approvals`,
  sendSMS: `${BASE_URL}caleadservice/sendSMS`,
  stateMachineAPI: `${BASE_URL}caleadservice/status/`,
  getAllLeads: `${BASE_URL}caleadservice/getAll/`,
  etbNtbSearch: `${BASE_URL}caleadservice/search`,
  etbNtbPrefecthAccount: `${BASE_URL}caleadservice/prefetchAccount`,
  etbNtbCustEnquiry: `${BASE_URL}caleadservice/custEnquiry`,
  negativeScreening: `${BASE_URL}caleadservice/negativeScreening`,

  banks: `${BASE_URL}caleadservice/banks`,

  config: `${BASE_URL}caleadservice/config`,
  currentAccountVariants: `${BASE_URL}caleadservice/current/account/variant`,
  approver: `${BASE_URL}caleadservice/approver`,
  svrDetailsPart1: `${BASE_URL}caleadservice/svrDetailsPart1`,
  svrDetailsPart2: `${BASE_URL}caleadservice/svrDetailsPart2`,
  docValidate: `${BASE_URL}caleadservice/validate`,

  bankStatement: `${BASE_URL}caleadservice/bankStatement`,
  getPerfiosBankData: `${BASE_URL}caleadservice/perfios/getdata`,
  getResumeJourneyCheck:`${BASE_URL}getResumeJourney?`,
  // progress bar percent sve api 
  // getProgressPercent:`${BASE_URL}user/info`,
  emailVerify:  `${BASE_URL}karza/emailVerify`,
  getOccupationDetails:`${BASE_URL}occupation`,
  accountOpening:`${BASE_URL}account`,
  saveBankUseSection: `${BASE_URL}/createBankUseSection`,
  getPaymentDetails: `${BASE_URL}getPaymentDetails/`,
};

export default Endpoints;
