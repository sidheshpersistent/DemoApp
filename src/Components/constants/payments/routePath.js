import ROUTES from 'constants/routes';

export default {
  HOME: 'home',
  PAY: 'pay',
  TRANSACTION_INTENT_ROUTE: 'TransactionIntentRouting',
  UPI_INTENT_VALIDATION: 'UpiIntentValidation',
  PAYMENT_HOME_FULL_PATH: `/${ROUTES.postLogin}/${ROUTES.HOME}/pay/PaymentsTopTab/payments`,
};
