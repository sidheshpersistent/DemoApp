import { translate } from 'l10n';

export const FLOWS = {
  FETCH_BILL: 'FETCH_BILL',
  FETCH_BILLERS: 'FETCH_BILLERS',
  FETCH_OPERATOR: 'FETCH_OPERATOR',
  RECHARGE_PLANS: 'RECHARGE_PLANS',
};

export const FETCH_MY_BILLERS = 'Pay Bill - Saved Biller Get Billers';
export const FETCH_PENDING_BILLS = 'Pay Bill - Saved Biller Get Pending Bills';
export const CC_BOC = '1860 500 1111';

export const AUTOPAY_TYPE = {
  ENABLE: 'Enable',
  MODIFY: 'Modify',
};

export const AUTOPAY_SUPPORT_TEXT = {
  Enable: [
    translate('PAY.BILL_PAY.AUTOPAY_SUPPORT_MESSAGE.ENABLE_AUTOPAY'),
    translate('PAY.BILL_PAY.AUTOPAY_SUPPORT_MESSAGE.MANUALLY_PAY_BILLS_EXCEEDING_AMOUNT'),
  ],
  Modify: [
    translate('PAY.BILL_PAY.AUTOPAY_SUPPORT_MESSAGE.MODIFY_AUTOPAY'),
    translate('PAY.BILL_PAY.AUTOPAY_SUPPORT_MESSAGE.MANUALLY_PAY_BILLS_EXCEEDING_AMOUNT'),
  ],
};

export const billpayTransactionURL = uuid => `/billpay/${uuid}`;
