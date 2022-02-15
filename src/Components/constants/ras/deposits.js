import ScreenConstants from '../screen-constants';

const {
  CREDIT_ACCOUNT,
  DEBIT_ACCOUNT,
  DEPOSIT_TYPE,
  PAYOUT,
  MODE_OF_OPERATION,
  MATURITY_INSTRUCTIONS,
  OPENING_DATE,
  LAST_RENEWAL_DATE,
  INTEREST,
  LAST_INSTALLMENT_DATE,
} = ScreenConstants.HAVE.DEPOSIT;

export const NOMINEE_RELATION_MAPPER = {
  FATHER: 'Father',
  MOTHER: 'Mother',
  BROTHER: 'Brother',
  SISTER: 'Sister',
  DAUGHTER: 'Daughter',
  HUSBAND: 'Husband',
  SPOUSE: 'Spouse',
  SON: 'Son',
  WIFE: 'Wife',
  OTHER: 'Other',
};

export const MOP_MAPPER = {
  SINGLY: 'Singly',
  ANY_OR_SURVIVOR: 'Joint holding',
  EITHER_OR_SURVIVOR: 'Joint holding',
  JOINTLY_BY_ALL: 'Joint holding',
  ANY_TWO: 'Joint holding',
  BOTH_OR_SURVIVOR: 'Joint holding',
  FORMER_OR_SURVIVOR: 'Joint holding',
  LEGAL_GUARDIAN: 'Legal Guardian',
  MANDATE_HOLDER: 'Mandate holder',
  SEVERALLY: 'Severally',
};

export const PAYOUT_MAPPER = {
  YEARLY: 'Yearly',
  HALF_YEARLY: 'Half Yearly',
  MONTHLY: 'Monthly',
  QUARTERLY: 'Quarterly',
  ON_MATURITY_RENEWAL: 'On Maturity/Renewal',
};

export const LOOPABLE_INFO = [
  { label: CREDIT_ACCOUNT, key: 'CreditAccount' },
  { label: DEBIT_ACCOUNT, key: 'DebitAccount' },
  { label: INTEREST, key: 'InterestRate', onlyRD: true },
  { label: DEPOSIT_TYPE, key: 'DepositDescription', onlyFD: true },
  { label: PAYOUT, key: 'InterestPayoutMethod', onlyFD: true },
  { label: MODE_OF_OPERATION, key: 'ModeOfOperation' },
  { label: MATURITY_INSTRUCTIONS, key: 'MaturityInstruction' },
  { label: OPENING_DATE, key: 'OpenDateISOFormat', onlyFD: true },
  { label: LAST_RENEWAL_DATE, key: 'LastFDRenewalDateISOFormat', onlyFD: true },
  { label: OPENING_DATE, key: 'OpenDateISOFormat', onlyRD: true },
  { label: LAST_INSTALLMENT_DATE, key: 'LastRDInstallmentDateISOFormat', onlyRD: true },
];
