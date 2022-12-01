

import { Dimensions } from "react-native";
import { StringsOfLanguages } from "../../Localization";
import { AsyncStorageUtils } from "../../Utils";

export const customerProfileContextReset={
    personalDetail:{
    annualIncome:"",
    mothersName:"",
    countryOfBirth:{displayText:"India"},
    nomineeVisible:true,
    communicationAddress:false,
    nomineeCommunicationAddress:false,
    guardianCommunicationAddress:false,
    form60Visible:false,
    panApplied:false,
    selValue:"Radio 1",
    nomineeAddressRadio:"Radio 1",
    guardianAddressRadio:"Radio 1",
    customerOtherAddress:null,
    guardianOtherAddress:null,
    nomineeDob:"",
    isNomineeMinor:false,
    showCompanyName:false,
    occupationType:"",
    sourceOfIncome:"",
    sourceOfIncomeDetails:[],
    nomineeName:"",
    customerRelation:"",
    guardianName:"",
    customerPincode:"",
    customerAddress1:"",
    customerAddress2:"",
    customerAddress3:"",
    nomineeOtherAddress:null,
    nomineePincode:"",
    nomineeAddress1:"",
    nomineeAddress2:"",
    nomineeAddress3:"",
    guardianPincode:"",
    guardianAddress1:"",
    guardianAddress2:"",
    guardianAddress3:"",
    cityOfBirth:"",
    CompanyValue:"",
    popupType:false,
    occupationDetails:"",
    companyDetails:"",
    countryDetails:"",
    panNumber:"",
    isPanPopupShow:false,
    panAdharInvalid:false,
    isPanAdharMatchPopup:false,
    isErrorPan:false,
    isNTBUser:false,
    customerData:"",
    isPrathamBankUser:false,
    isETBUser:false,
    popupTypeInfo:"",
    fathersName:"",
    acknowledgeNumb:"",
    applicationDob:"",
    hideSearchResult:false,
    isCompanySelectedFromList:false,
    companyName:"",
    nomineeRelationData:[]
  },
  bankingPreference:{
    inputAccountNumber:"",
    Success:false,
    verifyKitData:{
      data:{
        accountNumber:"",
        ucic:"",
        accountType:""
      }
    },
    activeIndex:0,
    istermsAggreed:true,
    boosterAccount:true,
    checkbookOpted:true,
    debitOpted:true,
    productRadio:"Radio 0",
    productSelected:"",
    branchSelected:"",
    reimburseAccount:false,
    services:"",
    isEditBranch:false,
    SAProductList:[]

  },
  customerConsent:{
    isIndianCitizen:true,
    country:"",
    foreignTin:"",
    tinCountry:"",
    isTermsAgreed:true,
    isConsentGiven:true,
    isPoliticalyExposed:false,
    signatureImage:"",
    panImage:"",
    isOpenImagePicker:false,
    isOpenImagePickerPan:false,
    isErrorForeignTIN:false
  }
}

const _retrieveData = async () => {
  const value = await AsyncStorageUtils.getItem('language');
  console.log('***** retrive value lang *****', value);
  StringsOfLanguages.setLanguage(value)
  
};



export const MonthlyHighlightData=()=>{ 
 _retrieveData()  
 
  return[
  {
    id: 1,
    flag: 'total',
    value: 0,
    title: StringsOfLanguages.DASHBOARD.title_mh1,
    // title: 'Total Applications'
  },
  {
    id: 2,
    flag: 'success',
    value: 0,
    title: StringsOfLanguages.DASHBOARD.title_mh2,
    // title: 'Successful Applications'
  },
  {
    id: 3,
    flag: 'pending',
    value: 0,
    title: StringsOfLanguages.DASHBOARD.title_mh3,
    // title: 'Applications In Progress'
  },
]
}

export const DATA =()=>{ 

  _retrieveData()
  return[
  {
    key: '1',
    title: StringsOfLanguages.DASHBOARD.title1,//'Open a new',
    subtitle: StringsOfLanguages.DASHBOARD.subtitle1,//'Savings \nAccount',
  },
  {
    key: '2',
    title: StringsOfLanguages.DASHBOARD.title2,
    subtitle: StringsOfLanguages.DASHBOARD.subtitle2,
    // title: 'Open a new',
    // subtitle: 'Salary \nAccount',
  },
  {
    key: '3',
    title: StringsOfLanguages.DASHBOARD.title3,
    subtitle: StringsOfLanguages.DASHBOARD.subtitle3,
    // title: 'Go to',
    // subtitle: 'Bank Use Section',
    status: 'INCOMPLETE'
  },
  {
    key: '4',
    title: StringsOfLanguages.DASHBOARD.title4,
    subtitle: StringsOfLanguages.DASHBOARD.subtitle4,
    // title: 'Resume',
    // subtitle: 'Application',
    status: 'IN PROGESS'
  },
];
}

export const windowWidth = Dimensions.get('window').width
export const lowerCardWidth = windowWidth / 2 - 60;