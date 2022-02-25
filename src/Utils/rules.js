const ADDR_REGEX = /^(?!\s)(?![\s\S]*\s$)[a-zA-Z0-9'.`#,_-\s.:,-/()#']*$/; //NOSONAR
const NAME_REGEX = /^(?!\s)(?![\s\S]*\s$)[A-Za-z'.`\s]*$/; //NOSONAR
const NAME_NO_REGEX = /^(?!\s)(?![\s\S]*\s$)[a-zA-Z0-9'.`\s]*$/; //NOSONAR
const NAME_ONLY_REGEX = /^(?!\s)(?![\s\S]*\s$)[A-Za-z'`\s]*$/; //NOSONAR
const ADDR_ONLY_REGEX = /^(?!\s)(?![\s\S]*\s$)[A-Za-z]*$/; //NOSONAR
const ENTITYNAME = /^(?!\s)(?![\s\S]*\s$)[A-Za-z'.`/&,_-\s]*$/; //NOSONAR
const rules = {
  mobileno: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid mobile number or special character.',
    },
    pattern: {
      value: /^([0-9'-\s]){10}$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid mobile number or special character.',
    },
  },
  barcode: {
    required: {
      value: true,
      message: '*Uh-oh! Barcode should be of 7 digits.',
    },
    pattern: {
      value: /^([0-9'-\s]){7}$/,
      message: '*Uh-oh! Barcode should be of 7 digits.',
    },
    maxLength: {
      value: 7,
      message: '*Uh-oh! Barcode should be of 7 digits.',
    },
  },
  optionalMobileNo: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid mobile number or special character.',
    },
    pattern: {
      value: /^([0-9'-\s]){10}$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid mobile number or special character.',
    },
  },
  optionalLandline: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid landline number or special character.',
    },
    pattern: {
      value: /^\d+$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid landline number or special character.',
    },
    minLength: {
      value: 9,
      message:
        '*Uh-oh! Seems like you have entered an invalid landline number or special character.',
    },
    maxLength: {
      value: 12,
      message:
        '*Uh-oh! Seems like you have entered an invalid landline number or special character.',
    },
  },
  pan: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid PAN number.',
    },
    pattern: {
      value: /^([a-zA-Z]){5}(\d){4}([a-zA-Z]){1}$/,
      message: '*Uh-oh! Seems like you have entered an invalid PAN number.',
    },
  },
  aadharNo: {
    required: {
      value: true,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Aadhar Number.',
    },
    pattern: {
      value: /^([0-9-\s]){14}$/,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Aadhar Number.',
    },
    minLength: {
      value: 1,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Aadhar Number.',
    },
  },
  fileNumber: {
    required: {
      value: true,
      message:
        '*Aw-snap! it seems like you have entered an incorrect File Number.',
    },
    pattern: {
      value: /^[A-Za-z0-9]*$/,
      message:
        '*Aw-snap! it seems like you have entered an incorrect File Number.',
    },
    minLength: {
      value: 1,
      message:
        '*Aw-snap! it seems like you have entered an incorrect File License.',
    },
  },
  requiredFirstName: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered a number or special character.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered a number or special character.',
    },
  },
  requiredLastName: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered a number or special character',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered a number or special character.',
    },
  },
  optionalMiddleName: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered a number or special character.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered a number or special character.',
    },
  },
  date: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid Date',
    },
  },
  drivingLicNo: {
    required: {
      value: true,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Driving License.',
    },
    pattern: {
      value: /^[A-Za-z0-9/_\\ `]*$/,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Driving License.',
    },
    minLength: {
      value: 1,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Driving License.',
    },
    maxLength: {
      value: 20,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Driving License.',
    },
  },
  passportNo: {
    required: {
      value: true,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Passport Number.',
    },
    pattern: {
      value: /^[A-Za-z0-9]*$/,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Passport Number.',
    },
    minLength: {
      value: 1,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Passport Number.',
    },
    maxLength: {
      value: 20,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Passport Number.',
    },
  },
  voterID: {
    required: {
      value: true,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Voter ID Number.',
    },
    pattern: {
      value: /^[A-Za-z0-9]*$/,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Voter ID Number.',
    },
    minLength: {
      value: 1,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Voter ID Number.',
    },
    maxLength: {
      value: 30,
      message:
        '*Aw-snap! it seems like you have entered an incorrect Voter ID Number.',
    },
  },
  vehicleModel: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid a vehicle model',
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: '*Uh-oh! Seems like you have entered an invalid vehicle model',
    },
  },
  optionalWebsite: {
    required: {
      value: false,
      message: 'Uh-oh! Seems like you have entered incorrect website name.',
    },
    pattern: {
      value:
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
      message: 'Uh-oh! Seems like you have entered incorrect website name.',
    },
  },
  addressType: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid address or special character.',
    },
    pattern: {
      value: /^[a-zA-Z0-9\s.:,\-/()#']*$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid address or special character.',
    },
  },
  chequeNumber: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered a special character in your cheque number.',
    },
    pattern: {
      value: /^(\d){6}$/,
      message:
        '*Uh-oh! Seems like you have entered a special character in your cheque number.',
    },
    minLength: {
      value: 6,
      message:
        '*Uh-oh! Seems like you have entered a special character in your cheque number.',
    },
    maxLength: {
      value: 6,
      message:
        '*Uh-oh! Seems like you have entered a special character in your cheque number.',
    },
  },
  ifscCode: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid IFSC code or special character.',
    },
    pattern: {
      value: /^[A-Za-z]{4}\d{7}$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid IFSC code or special character.',
    },
    minLength: {
      value: 11,
      message:
        '*Uh-oh! Seems like you have entered an invalid IFSC code or special character.',
    },
    maxLength: {
      value: 11,
      message:
        '*Uh-oh! Seems like you have entered an invalid IFSC code or special character.',
    },
  },
  ifscCodeEntity: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered a special character in your IFSC Code.',
    },
    pattern: {
      value: /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/,
      message:
        '*Uh-oh! Seems like you have entered a special character in your IFSC Code.',
    },
    minLength: {
      value: 11,
      message:
        '*Uh-oh! Seems like you have entered a special character in your IFSC Code.',
    },
    maxLength: {
      value: 11,
      message:
        '*Uh-oh! Seems like you have entered a special character in your IFSC Code.',
    },
  },
  gstNo: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered the GST Number in an incorrect format.',
    },
    pattern: {
      value: /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      message:
        '*Uh-oh! Seems like you have entered the GST Number in an incorrect format.',
    },
    minLength: {
      value: 15,
      message:
        '*Uh-oh! Seems like you have entered the GST Number in an incorrect format.',
    },
  },
  GSTrequiredText: {
    required: {
      value: true,
      message: '*Uh-oh, seems like you have entered a special character.',
    },
    pattern: {
      value: /^[A-Za-z0-9]*$/,
      message: '*Uh-oh, seems like you have entered a special character.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh, seems like you have entered a special character.',
    },
  },
  idNumberEntity: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid ID Number.',
    },
    pattern: {
      value: /^[A-Za-z'.\s0-9]*$/,
      message: '*Uh-oh! Seems like you have entered an invalid ID Number.',
    },
  },
  idNumberAddressProof: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid ID Number.',
    },
    pattern: {
      value: /^[A-Za-z'.\s0-9]*$/,
      message: '*Uh-oh! Seems like you have entered an invalid ID Number.',
    },
  },
  validName: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    maxLength: {
      value: 40,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
  },
  validMiddleName: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    maxLength: {
      value: 50,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
  },
  optionalValidName: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    maxLength: {
      value: 40,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
  },
  pincode: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid pincode',
    },
    pattern: {
      value: /^[1-9]\d{5}$/,
      message: '*Uh-oh! Seems like you have entered an invalid pincode',
    },
  },
  fundingAmount: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid Amount',
    },
    pattern: {
      value: /^[0-9,\s]{1,17}((\.)\d{0,2}){0,1}$/, //NOSONAR
      message: '*Uh-oh! Seems like you have entered an invalid Amount',
    },
  },
  accountNumber: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered a special character in Bank Account Number',
    },
    pattern: {
      value: /^\d+$/,
      message:
        '*Uh-oh! Seems like you have entered a special character in Bank Account Number',
    },
  },
  contactPerson: {
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered a number or special character in Contact Person.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered a number or special character in Contact Person..',
    },
  },
  //Business Details
  requiredEntityName: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in Entity Name.',
    },
    pattern: {
      value: ENTITYNAME,
      message:
        '*Uh-oh, seems like you have entered a special character in Entity Name.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in Entity Name.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in Entity Name.',
    },
  },
  requiredAccountTitle: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in Account Title',
    },
    pattern: {
      value: ENTITYNAME,
      message:
        '*Uh-oh, seems like you have entered a special character in Account Title',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in Account Title',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in Account Title',
    },
  },
  IECCodeRequired: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid IEC Code.',
    },
    pattern: {
      value: /^([0-9'-\s]){10}$/,
      message: '*Uh-oh! Seems like you have entered an invalid IEC Code.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid IEC Code.',
    },
    maxLength: {
      value: 10,
      message: '*Uh-oh! Seems like you have entered an invalid IEC Code.',
    },
  },
  IECCodeOptional: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid IEC Code.',
    },
    pattern: {
      value: /^([0-9'-\s]){10}$/,
      message: '*Uh-oh! Seems like you have entered an invalid IEC Code.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid IEC Code.',
    },
    maxLength: {
      value: 10,
      message: '*Uh-oh! Seems like you have entered an invalid IEC Code.',
    },
  },
  requiredBusinessAddress: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in business address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in business address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in business address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in business address.',
    },
  },
  optionalBusinessAddress: {
    required: {
      value: false,
      message:
        '*Uh-oh, seems like you have entered a special character in business address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in business address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in business address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in business address.',
    },
  },
  requiredProprietorAddr: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in proprietor address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in proprietor address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in proprietor address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in proprietor address.',
    },
  },
  optionalProprietorAddr: {
    required: {
      value: false,
      message:
        '*Uh-oh, seems like you have entered a special character in proprietor address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in proprietor address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in proprietor address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in proprietor address.',
    },
  },
  requiredCommunicationAddress: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in communication address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in communication address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in communication address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in communication address.',
    },
  },
  optionalCommunicationAddress: {
    required: {
      value: false,
      message:
        '*Uh-oh, seems like you have entered a special character in communication address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in communication address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in communication address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in communication address.',
    },
  },
  optionalLandmark: {
    required: {
      value: false,
      message:
        '*Uh-oh, seems like you have entered a special character in landmark.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in landmark.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in landmark.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh, seems like you have entered a special character in landmark.',
    },
  },
  requiredCity: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in city.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in city.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in city.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in city.',
    },
  },
  requiredDistrict: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in district.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in district.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in district.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh, seems like you have entered a special character in district.',
    },
  },
  requiredState: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in state.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in state.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in state.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh, seems like you have entered a special character in state.',
    },
  },
  requiredCountry: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in country.',
    },
    pattern: {
      value: ADDR_ONLY_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in country.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in country.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh, seems like you have entered a special character in country.',
    },
  },
  requiredPinCode: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in pincode.',
    },
    pattern: {
      value: /^[1-9]\d{5}$/,
      message:
        '*Uh-oh, seems like you have entered a special character in pincode.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in pincode.',
    },
    maxLength: {
      value: 6,
      message:
        '*Uh-oh, seems like you have entered a special character in pincode.',
    },
  },
  emailRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered your email id in an incorrect format.',
    },
    pattern: {
      value:
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      message:
        '*Uh-oh! Seems like you have entered your email id in an incorrect format.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered your email id in an incorrect format.',
    },
    maxLength: {
      value: 50,
      message:
        '*Uh-oh! Seems like you have entered your email id in an incorrect format.',
    },
  },
  numericValidation: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    pattern: {
      value: /^\d*$/,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    minLength: {
      value: 6,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    maxLength: {
      value: 6,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
  },
  OptionalNumericValidation: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    pattern: {
      value: /^\d*$/,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    minLength: {
      value: 6,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    maxLength: {
      value: 6,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
  },
  OptionalAlphaNumeric: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    pattern: {
      value: /^[A-Za-z0-9]*$/,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    minLength: {
      value: 15,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
    maxLength: {
      value: 15,
      message: '*Uh-oh! Seems like you have entered an invalid amount.',
    },
  },
  //Nominee Details
  nomineeName: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee name.',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee name.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee name.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee name.',
    },
  },
  guardianName: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian name.',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian name.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian name.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian name.',
    },
  },
  nomineeAddress: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee address.',
    },
  },
  nomineeAddressOptional: {
    required: {
      value: false,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in nominee address.',
    },
  },
  guardianAddress: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian address.',
    },
  },
  guardianOptionalAddress: {
    required: {
      value: false,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian address.',
    },
    maxLength: {
      value: 40,
      message:
        '*Uh-oh, seems like you have entered a special character in guardian address.',
    },
  },
  mothersName: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid mother name.',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid mother name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid mother name.',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid mother name.',
    },
  },
  maidenName: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid maiden name.',
    },
    pattern: {
      value: /^[a-zA-Z‘.-]+$/,
      message: '*Uh-oh! Seems like you have entered an invalid maiden name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid maiden name.',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid maiden name.',
    },
  },
  bankName: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid bank name.',
    },
    pattern: {
      value: /^[a-zA-Z’-\s.-/]*$/,
      message: '*Uh-oh! Seems like you have entered an invalid bank name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid bank name.',
    },
    maxLength: {
      value: 40,
      message: '*Uh-oh! Seems like you have entered an invalid bank name.',
    },
  },
  branchName: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid branch name.',
    },
    pattern: {
      value: ADDR_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid branch name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid branch name.',
    },
  },
  facilityType: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid facility type.',
    },
    pattern: {
      value: /^[a-zA-Z’-\s.-/]*$/,
      message: '*Uh-oh! Seems like you have entered an invalid facility type.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid facility type.',
    },
    maxLength: {
      value: 40,
      message: '*Uh-oh! Seems like you have entered an invalid facility type.',
    },
  },
  creditAccountNumber: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in account number.',
    },
    pattern: {
      value: /^[a-zA-Z0-9]*$/,
      message:
        '*Uh-oh, seems like you have entered a special character in account number.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh, seems like you have entered a special character in account number.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh, seems like you have entered a special character in account number.',
    },
  },
  sanctionAmount: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid sanctioned amount.',
    },
    pattern: {
      value: /^(?!(0))[0-9,\s]{1,10}((\.)\d{0,2}){0,1}$/, //NOSONAR
      message:
        '*Uh-oh! Seems like you have entered an invalid sanctioned amount.',
    },
  },
  FUND_REGEX: /\B(?=(\d{3})+(?!\d))/g, //NOSONAR
  mentionOtherSourceRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid other source of lead.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid other source of lead.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid other source of lead.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid other source of lead.',
    },
  },
  mentionOtherSourceOptional: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid other source of lead.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid other source of lead.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid other source of lead.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid other source of lead.',
    },
  },
  matchingAbbreviationRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid matching abbreviation.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid matching abbreviation.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid matching abbreviation.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid matching abbreviation.',
    },
  },
  matchingAbbreviationOptional: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid matching abbreviation.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid matching abbreviation.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid matching abbreviation.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid matching abbreviation.',
    },
  },
  mentionAddressLocalityRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid mention other address locality.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid mention other address locality.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid mention other address locality.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid mention other address locality.',
    },
  },
  mentionAddressLocalityOptional: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid mention other address locality.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid mention other address locality.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid mention other address locality.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid mention other address locality.',
    },
  },
  yearsOperatingAddressRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid years of operating from this address.',
    },
    pattern: {
      value: NAME_NO_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid years of operating from this address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid years of operating from this address.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid years of operating from this address.',
    },
  },
  reasonMultipleLocationsRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of multiple locations.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of multiple locations.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of multiple locations.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of multiple locations.',
    },
  },
  reasonMultipleLocationsOptional: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of multiple locations.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of multiple locations.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of multiple locations.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of multiple locations.',
    },
  },
  numberOfSuchAddressRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh, seems like you have entered a special character in number of such addresses.',
    },
    pattern: {
      value: /^\d*$/,
      message:
        '*Uh-oh, seems like you have entered a special character in number of such addresses.',
    },
  },
  reasonDifferentCommAddressRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of different communication address.',
    },
    pattern: {
      value: ADDR_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of different communication address.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of different communication address.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid reason of different communication address.',
    },
  },
  productDealingRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid Product Dealing in.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid Product Dealing in.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid Product Dealing in.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid Product Dealing in.',
    },
  },
  IDFCFIRSTBankCustomerIDRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid IDFC FIRST Bank Customer ID.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid IDFC FIRST Bank Customer ID.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid IDFC FIRST Bank Customer ID.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid IDFC FIRST Bank Customer ID.',
    },
  },
  IDFCFIRSTBankCustomerIDOptional: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid IDFC FIRST Bank Customer ID.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid IDFC FIRST Bank Customer ID.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid IDFC FIRST Bank Customer ID.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid IDFC FIRST Bank Customer ID.',
    },
  },
  detailsOfRelationshipRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid details of relationship.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid details of relationship.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid details of relationship.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid details of relationship.',
    },
  },
  detailsOfRelationshipOptional: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid details of relationship.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid details of relationship.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid details of relationship.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid details of relationship.',
    },
  },
  affiliationsMembershipRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid Affliations/membership of associations.',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid Affliations/membership of associations.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid Affliations/membership of associations.',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid Affliations/membership of associations.',
    },
  },
  reasonMoreThanOneCompanyOptional: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid reason.',
    },
    pattern: {
      value: NAME_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid reason.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid reason.',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid reason.',
    },
  },
  DesignationRequired: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid designation.',
    },
    pattern: {
      value: NAME_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid designation.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid designation.',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid designation.',
    },
  },
  NameRequired: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    pattern: {
      value: NAME_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid name.',
    },
  },
  AgeRequired: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid age.',
    },
    pattern: {
      value: /^\d*$/,
      message: '*Uh-oh! Seems like you have entered an invalid age.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid age.',
    },
    maxLength: {
      value: 3,
      message: '*Uh-oh! Seems like you have entered an invalid age.',
    },
  },
  HoldingPositionSinceYearsRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid holding the position since (years).',
    },
    pattern: {
      value: /^[0-9'.`]*$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid holding the position since (years).',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid holding the position since (years).',
    },
    maxLength: {
      value: 10,
      message:
        '*Uh-oh! Seems like you have entered an invalid holding the position since (years).',
    },
  },
  NoOfYearsExperienceRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid no of yrs. of experience in similar field.',
    },
    pattern: {
      value: /^[0-9'.`\s]*$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid no of yrs. of experience in similar field.',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid no of yrs. of experience in similar field.',
    },
    maxLength: {
      value: 10,
      message:
        '*Uh-oh! Seems like you have entered an invalid no of yrs. of experience in similar field.',
    },
  },
  MakerNameRequired: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid marker name.',
    },
    pattern: {
      value: NAME_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid marker name.',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid marker name.',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid marker name.',
    },
  },
  EmployeeCodeRequired: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid Employee Code',
    },
    pattern: {
      value: /^\d*$/,
      message: '*Uh-oh! Seems like you have entered an invalid Employee Code',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid Employee Code',
    },
    maxLength: {
      value: 6,
      message: '*Uh-oh! Seems like you have entered an invalid Employee Code',
    },
  },
  CommentRequired: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid Comment',
    },
    pattern: {
      value: NAME_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid Comment',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid Comment',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid Comment',
    },
  },
  CommentOptional: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid Comment',
    },
    pattern: {
      value: NAME_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid Comment',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid Comment',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid Comment',
    },
  },
  AbbreviationRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid Reason of Abbreviation Used',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid Reason of Abbreviation Used',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid Reason of Abbreviation Used',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid Reason of Abbreviation Used',
    },
  },
  AbbreviationOptional: {
    required: {
      value: false,
      message:
        '*Uh-oh! Seems like you have entered an invalid Reason of Abbreviation Used',
    },
    pattern: {
      value: /^[A-Za-z',.`\s]*$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid Reason of Abbreviation Used',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid Reason of Abbreviation Used',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid Reason of Abbreviation Used',
    },
  },
  DetailedFeedbackNeighbourReq: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid Details of feedback from the neighbour',
    },
    pattern: {
      value: NAME_REGEX,
      message:
        '*Uh-oh! Seems like you have entered an invalid Details of feedback from the neighbour',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid Details of feedback from the neighbour',
    },
    maxLength: {
      value: 30,
      message:
        '*Uh-oh! Seems like you have entered an invalid Details of feedback from the neighbour',
    },
  },
  EmployeeWorkingRequired: {
    required: {
      value: true,
      message:
        '*Uh-oh! Seems like you have entered an invalid No. of employees seen working',
    },
    pattern: {
      value: /^\d*$/,
      message:
        '*Uh-oh! Seems like you have entered an invalid No. of employees seen working',
    },
    minLength: {
      value: 1,
      message:
        '*Uh-oh! Seems like you have entered an invalid No. of employees seen working',
    },
    maxLength: {
      value: 3,
      message:
        '*Uh-oh! Seems like you have entered an invalid No. of employees seen working',
    },
  },
  requiredField: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid Mobile Number',
    },
  },
  ChoiceAccountNumber: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid Account Number',
    },
    pattern: {
      value: /^\d*$/,
      message: '*Uh-oh! Seems like you have entered an invalid Account Number',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid Account Number',
    },
    maxLength: {
      value: 30,
      message: '*Uh-oh! Seems like you have entered an invalid Account Number',
    },
  },
  optionalValidNomineeName: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid Nominee name',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid Nominee name',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid Nominee name',
    },
    maxLength: {
      value: 40,
      message: '*Uh-oh! Seems like you have entered an invalid Nominee name',
    },
  },
  optionalValidGuardianName: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid Guardian name',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid Guardian name',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid Guardian name',
    },
    maxLength: {
      value: 40,
      message: '*Uh-oh! Seems like you have entered an invalid Guardian name',
    },
  },
  optionalValidMaidenName: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid  Maiden name',
    },
    pattern: {
      value: NAME_ONLY_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid Maiden name',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid Maiden name',
    },
    maxLength: {
      value: 40,
      message: '*Uh-oh! Seems like you have entered an invalid Maiden name',
    },
  },
  passwordRequired: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid password',
    },
    pattern: {
      value: /^[A-Za-z0-9'.`/&@,_-\s]*$/,
      message: '*Uh-oh! Seems like you have entered an invalid password',
    },
  },
  passwordOptional: {
    required: {
      value: false,
      message: '*Uh-oh! Seems like you have entered an invalid password',
    },
    pattern: {
      value: /^[A-Za-z0-9'.`/&@,_-\s]*$/,
      message: '*Uh-oh! Seems like you have entered an invalid password',
    },
  },
  validAddress: {
    required: {
      value: true,
      message: '*Uh-oh! Seems like you have entered an invalid a Address',
    },
    pattern: {
      value: ADDR_REGEX,
      message: '*Uh-oh! Seems like you have entered an invalid Address',
    },
    minLength: {
      value: 1,
      message: '*Uh-oh! Seems like you have entered an invalid Address',
    },
    maxLength: {
      value: 40,
      message: '*Uh-oh! Seems like you have entered an invalid Address',
    },
  },
};
export default rules;
