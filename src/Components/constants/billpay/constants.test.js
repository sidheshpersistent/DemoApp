import { billpayTransactionURL } from './constants';

describe('billpay constants', () => {
  it('should return billpay url with uuid', () => {
    expect(billpayTransactionURL('1234')).toStrictEqual('/billpay/1234');
  });
  it('should return billpay url with empty uuid', () => {
    expect(billpayTransactionURL('')).toStrictEqual('/billpay/');
  });
});
