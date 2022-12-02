import React, {useState} from 'react';
import { PersonalDetailsConstants, RadioButtonConstants } from "../Utils/Constants";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
  // isDemoFlow & dummySession make it false for release apk
  // let demoFlow = false;
  // let dummySession = false;
  const [session, setSession] = useState({
    progressPercent:0,
    progressLoader:0,
    loginFlag: false,
    availedCardFlag:"",
    reasonForDuplicateAcc:"",
    agentDetails: {
      email: 'sagar@idfcbanktest.com',
      firstName: 'Sagar',
      lastName: 'Bhat',
      userId: '',
      password:'password'
    },
    adharDetails:{
      adharNumber: "",
      name: "",
      avator:"",
      gender: "",
      state: "",
      pincode: "",
      location: "",
      dob: "",
      addressLn1: "",
      addressLn2: "", 
    },
    panDetails:{
      panNumber:"",
      name:"",
      pnSts:"",
      panTitle:"",
      lastUpdatedDate:"",
      panAadharLinkSts:"",
      panAdharStatus:""
    },
    // below code  added on and after 15th june
    accountType:"",
    customerProfile:{
      personalDetail:{
        annualIncome:"",
        mothersName:"",
        countryOfBirth:PersonalDetailsConstants.INDIA,
        countryOfBirthObj:{id:1,value:"IN",displayText:PersonalDetailsConstants.INDIA},
        nomineeVisible:true,
        communicationAddress:false,
        nomineeCommunicationAddress:false,
        guardianCommunicationAddress:false,
        form60Visible:false,
        panApplied:false,
        selValue:RadioButtonConstants.RADIO1,
        nomineeAddressRadio:RadioButtonConstants.RADIO1,
        guardianAddressRadio:RadioButtonConstants.RADIO1,
        customerOtherAddress:null,
        guardianOtherAddress:null,
        nomineeDob:"",
        isNomineeMinor:false,
        showCompanyName:false,
        occupationType:null,
        sourceOfIncome:null,
        sourceOfIncomeDetails:[],
        nomineeName:"",
        customerRelation:null,
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
        cityOfBirthObj:null,
        CompanyValue:"",
        CompanyValueObj:null,
        popupType:false,
        occupationDetails:"",
        companyDetails:"",
        countryDetails:"",
        cityDetails:"",
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
        hideCountrySearch:false,
        isCountrySelectedFromList:true,
        hideCitySearch:false,
        isCitySelectedFromList:false,
        isCompanySelectedFromList:false,
        companyName:null,
        nomineeRelationData:[],
        allCountryListData:[],
        countryNamesList:[],
        cityNamesList:[],
        countryValue:"",
        cityValue:""

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
        productRadio:RadioButtonConstants.RADIO0,
        productSelected:"",
        branchSelected:"",
        reimburseAccount:false,
        services:"",
        isEditBranch:false,
        SAProductList:[],
        branchSelectedValue:"",
        isBranchSelectedFromList:false,
        personalizedTerms:true,
        instaKitTerms:true 
      },
      customerConsent:{
        isIndianCitizen:true,
        isEmploymentProofNeeded:true, // Todo : this response is come from api call
        isPanImageNeeded:true, // Todo : this response is come from api call
        country:"",
        foreignTin:"",
        tinCountry:"",
        isTermsAgreed:true,
        isConsentGiven:true,
        isPoliticalyExposed:false,
        signatureImage:"",
        panImage:"",
        employmentProofImage:"",
        isOpenImagePicker:false,
        isOpenImagePickerPan:false,
        isErrorForeignTIN:false
      }

    }
   

  });

  return (
    <AppContext.Provider value={{session, setSession}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
