import optionsLabel from 'translations/ntb_sa/options';

export default {
  DEFULT_COUNTRY_DATA: [{ label: 'INDIA', value: 'IN' }],

  BRANCH_DATA: [
    { label: 'BKC NAMAN', value: '01' },
    { label: 'THANE ', value: '01' },
    { label: 'ADHERI', value: '01' },
    { label: 'CURLA', value: '01' },
    { label: 'KALYAN', value: '01' },
  ],

  SALUTATION_DATA: [
    { label: optionsLabel.SALUTATION.MR, value: '01' },
    { label: optionsLabel.SALUTATION.MS, value: '02' },
    { label: optionsLabel.SALUTATION.MRS, value: '03' },
    { label: optionsLabel.SALUTATION.MISS, value: '04' },
    { label: optionsLabel.SALUTATION.DR, value: '05' },
    { label: optionsLabel.SALUTATION.DR_MRS, value: '06' },
  ],
  MOTHER_SALUTATION_DATA: [
    { label: optionsLabel.SALUTATION.MS, value: '02' },
    { label: optionsLabel.SALUTATION.MRS, value: '03' },
    { label: optionsLabel.SALUTATION.MISS, value: '04' },
    { label: optionsLabel.SALUTATION.DR, value: '05' },
    { label: optionsLabel.SALUTATION.DR_MRS, value: '06' },
  ],

  APPLICANT_RELATION: [
    { label: optionsLabel.APPLICANT_RELATION.MOTHER, value: 'Mother' },
    { label: optionsLabel.APPLICANT_RELATION.FATHER, value: 'Father' },
    { label: optionsLabel.APPLICANT_RELATION.BROTHER, value: 'Brother' },
    { label: optionsLabel.APPLICANT_RELATION.SISTER, value: 'Sister' },
    { label: optionsLabel.APPLICANT_RELATION.SPOUSE, value: 'Spouse' },
    { label: optionsLabel.APPLICANT_RELATION.HUSBAND, value: 'Husband' },
    { label: optionsLabel.APPLICANT_RELATION.WIFE, value: 'Wife' },
    { label: optionsLabel.APPLICANT_RELATION.DAUGHTER, value: 'Daughter' },
    { label: optionsLabel.APPLICANT_RELATION.SON, value: 'Son' },
    { label: optionsLabel.APPLICANT_RELATION.OTHER, value: 'Other' },
  ],

  MARITAL_STATUS: [
    { label: optionsLabel.MARITAL_STATUS.MARRIED, value: 'Married' },
    { label: optionsLabel.MARITAL_STATUS.UNMARRIED, value: 'Unmarried' },
    { label: optionsLabel.MARITAL_STATUS.OTHER, value: 'Other' },
  ],

  OCCUPATION: [
    {
      label: optionsLabel.OCCUPATION.SALARIED,
      value: 'Salaried',
    },
    {
      label: optionsLabel.OCCUPATION.SOLE_PROPRIETORSHIP,
      value: 'Sole Proprietorship',
    },
    {
      label: optionsLabel.OCCUPATION.PARTNERSHIP,
      value: 'Partnership/Company',
    },
    {
      label: optionsLabel.OCCUPATION.SELF_EMPLOYED_PROFESSIONAL,
      value: 'Self Employed Professional',
    },
    {
      label: optionsLabel.OCCUPATION.FARMER,
      value: 'Farmer',
    },
    {
      label: optionsLabel.OCCUPATION.HOMEMAKER,
      value: 'Homemaker',
    },
    {
      label: optionsLabel.OCCUPATION.STUDENT,
      value: 'Student',
    },
    {
      label: optionsLabel.OCCUPATION.RETIRED,
      value: 'Retired',
    },
  ],

  // SOURCE OF INCOME
  SOURCE_INCOME_DATA: [
    { label: optionsLabel.SOURCE_INCOME_DATA.SALARY, value: 'Salary' },
    { label: optionsLabel.SOURCE_INCOME_DATA.FAMILY_WEALTH, value: 'Family Wealth' },
    { label: optionsLabel.SOURCE_INCOME_DATA.SAVINGS, value: 'Savings' },
  ],

  ADDRESS_TYPE: [
    { label: optionsLabel.ADDRESS_TYPE.RESIDENTIAL, value: 'Residential' },
    { label: optionsLabel.ADDRESS_TYPE.PLACE_OF_WORK, value: 'Place of Work' },
  ],

  RESIDENTIAL_PROPERTY_TYPE: [
    { label: optionsLabel.RESIDENTIAL_PROPERTY_TYPE.RENTED, value: 'Rented' },
    { label: optionsLabel.RESIDENTIAL_PROPERTY_TYPE.SELF_OWNED, value: 'Self-Owned' },
    { label: optionsLabel.RESIDENTIAL_PROPERTY_TYPE['FAMILY-OWNED'], value: 'Family Owned' },
    { label: optionsLabel.RESIDENTIAL_PROPERTY_TYPE.COMPANY_OWNED, value: 'Company Owned' },
    { label: optionsLabel.RESIDENTIAL_PROPERTY_TYPE.PG_ACCOMODATION, value: 'PG Accomodation' },
  ],

  EDUCATIONAL_QUALIFICATION: [
    { label: optionsLabel.EDUCATIONAL_QUALIFICATION.TENTH, value: 'Upto 10th' },
    {
      label: optionsLabel.EDUCATIONAL_QUALIFICATION.UNDER_GRADUATE,
      value: 'Under Graduate (Up to 12th)',
    },
    { label: optionsLabel.EDUCATIONAL_QUALIFICATION.GRADUATE, value: 'Graduate' },
    { label: optionsLabel.EDUCATIONAL_QUALIFICATION.POST_GRADUATE, value: 'Post Graduate & above' },
    { label: optionsLabel.EDUCATIONAL_QUALIFICATION.PROFESSIONAL, value: 'Professional' },
    { label: optionsLabel.EDUCATIONAL_QUALIFICATION.ILLITERATE, value: 'No Formal Education' },
  ],

  PROFESSION_TYPE: [
    { label: 'Alternate Medical Practitioner', value: 'Alternate Medical Practitioner' },
    { label: 'Architect', value: 'Architect' },
    { label: 'Beautician', value: 'Beautician' },
    { label: 'CA', value: 'CA' },
    { label: 'Consultant', value: 'Consultant' },
    { label: 'Doctor', value: 'Doctor' },
    { label: 'Entertainment', value: 'Entertainment' },
    { label: 'Lawyer', value: 'Lawyer' },
    { label: 'Others', value: 'Others' },
  ],

  IDENTIFICATION_TYPE: [
    { label: optionsLabel.IDENTIFICATION_TYPE.PASSPORT, value: 'Passport' },
    {
      label: 'Election ID card',
      value: 'Election ID card',
    },
    { label: optionsLabel.IDENTIFICATION_TYPE.PANCARD, value: 'PAN Card' },
    { label: optionsLabel.IDENTIFICATION_TYPE.IDCARD, value: 'ID Card' },
    { label: optionsLabel.IDENTIFICATION_TYPE.DRIVINGLICENSE, value: 'Driving License' },
    { label: optionsLabel.IDENTIFICATION_TYPE.UIDAI_AADHAR, value: 'UIDIA/ Aadhaar letter' },
    { label: optionsLabel.IDENTIFICATION_TYPE.NREGA_JOB_CARD, value: 'NREGA Job card' },
    { label: optionsLabel.IDENTIFICATION_TYPE.OTHERS, value: 'Others' },
    { label: optionsLabel.IDENTIFICATION_TYPE.NOT_CATEGORIZED, value: 'Not categorized' },
    {
      label: optionsLabel.IDENTIFICATION_TYPE.TIN,
      value: 'Tax Payer Identification number (TIN)',
    },
    {
      label: optionsLabel.IDENTIFICATION_TYPE.COMPANY_IDENTIFICATION_NO,
      value: 'Company identification number',
    },
    { label: optionsLabel.IDENTIFICATION_TYPE.GIIN, value: 'US GIIN' },
    {
      label: optionsLabel.IDENTIFICATION_TYPE.GLOBAL_EIN,
      value: 'Global entity identifiction number',
    },
  ],
};
