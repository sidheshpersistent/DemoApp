import Config from '../../config/Config';

export default () => {
  const paymentsUrls = {
    RAILROAD: `${Config.PAYMENTS_API_URL()}/v1/fundtransfer/railroads`,
    AUTO_SELECT: `${Config.PAYMENTS_API_URL()}/v1/fundtransfer/railroads/autoselect`,
    ACCOUNTS: `${Config.PAYMENTS_API_URL()}/v1/accounts`,
    SEARCH: `${Config.PAYMENTS_API_URL()}/v1/search`,
    CONFIG: `${Config.PAYMENTS_API_URL()}/v1/configurations`,
    BANKS: `${Config.PAYMENTS_API_URL()}/v1/banks`,
    BANK_BRANCHES: `${Config.PAYMENTS_API_URL()}/v1/banks/{bankId}/branches`,
    VALIDATE_LIMIT: `${Config.PAYMENTS_API_URL()}/v1/fundtransfer/limits/validate`,
    VALIDATE_LIMIT_V2: `${Config.PAYMENTS_API_URL()}/v2/fundtransfer/limits/validate`,
    RECURRING_TRANSACTIONS: `${Config.PAYMENTS_API_URL()}/v2/recurring-transactions`,
    TRANSACTION_DETAILS: `${Config.PAYMENTS_API_URL()}/v1/transaction`,
    SAVE_NEW_PAYEE_DETAILS: `${Config.PAYMENTS_API_URL()}/v1/transaction/new-payee`,
    APPROVALS_TRANSACTION_ACTION: `${Config.BAS_BASE_ROOT_URL()}/v2/authorised-transaction/{transactionType}/{transactionId}`,
    APPROVALS_TRANSACTION_ACTION_V2: `${Config.BASE_URL()}/api/approvals/v1/transaction/{transactionType}/{transactionId}`,
    APPROVALS_TRANSACTION_HISTORY: `${Config.BAS_BASE_URL()}/user/transactions/history`,
    RECEIVED_APPROVALS_FILTERS: `${Config.BAS_BASE_URL()}/user/transactions/approval/filters`,
    APPROVALS_FILTERS: `${Config.BAS_BASE_URL()}/user/transactions/history/filters`,
    TRANSACTION_AUDIT: `${Config.BAS_BASE_URL()}/user/transactions/audit`,
    TRANSACTION_AUDIT_V2: `${Config.BASE_URL()}/api/approvals/v1/transactions/audit`,
    PAYEE_LIMIT: `${Config.PAYMENTS_API_URL()}/v1/fundtransfer/limits/payee-limit`,
    VALIDATE_LIMIT_UPI_24_HOUR_PAYMENTS: `${Config.PAYMENTS_API_URL()}/v1/upi/validate/limits/24hours`,
    VALIDATE_NUMBER_OF_TRANSACTIONS_LIMIT: `${Config.PAYMENTS_API_URL()}/v1/upi/validate-collect-request`,
    PAY_ABROAD: `${Config.PAYMENTS_API_URL()}/v1/pay-abroad/payload/encrypt`,
    NRO_TO_NRE_TRANSFER: `${Config.PAYMENTS_API_URL()}/v1/nro-to-nre-transfer/payload/encrypt`,
    INITIATE_INWARD_REMITTANCE: `${Config.PAYMENTS_API_URL()}/v1/inward-remittance/payload/encrypt`,
    DOWNLOAD_FUND_TRANSFER_RECEIPT: `${Config.PAYMENTS_API_URL()}/v1/fundtransfer/receipt`,
  };

  const billpayUrls = {
    PAY_BILL_WITH_REVERSAL: `${Config.BILLS_API_URL()}/v2/bill/pay`,
    GET_DISPUTE_OPTIONS_FOR_BILLPAY: `${Config.BILLS_API_URL()}/v1/dispute/options`,
    DOWNLOAD_BILLPAY_RECEIPT: `${Config.BILLS_API_URL()}/v1/bill/receipt`,
  };

  const beneficiaryUrls = {
    IS_FUNDTRANSFER_ALLOWED: `${Config.BENEFICIARY_API_URL()}/payee/fundtransfer-allowed`,
    PAYEE_SEARCH: `${Config.BENEFICIARY_API_URL()}/payee/search`,
    PAYEE_ADDITION_ALLOWED: `${Config.BENEFICIARY_API_URL()}/isPayeeAdditionAllowed`,
  };

  const upiUrls = {
    EXTERNAL_FUND_TRANSFER: `${Config.UPI_BASE_URL()}/v1/external-fundtransfer`,
    SETUP_VPA: `${Config.UPI_BASE_URL()}/v1/setup-vpa`,
    VPA: `${Config.UPI_BASE_URL()}/v1/vpa`,
    VERIFY_VPA: `${Config.UPI_BASE_URL()}/v1/verifyvpa`,
    VPA_HANDLES_LIST: `${Config.UPI_BASE_URL()}/v1/handles`,
    LINKED_BANK_ACCOUNTS: `${Config.UPI_BASE_URL()}/v1/linkedAccounts`,
    COLLECT_MONEY: `${Config.UPI_BASE_URL()}/v1/collect-money`,
    ADD_FUNDS: `${Config.UPI_BASE_URL()}/v1/collect-money/add-funds`,
    COLLECT_MONEY_REQUESTS: `${Config.UPI_BASE_URL()}/v1/collect-money-request`,
    UPI_INCOMING_REQUESTS: `${Config.UPI_BASE_URL()}/v1/incoming-requests`,
    VALIDATE_PER_TXN_LIMIT: `${Config.UPI_BASE_URL()}/v1/collect/validate/limits/per-transaction`,
    VALIDATE_PER_DAY_LIMIT: `${Config.UPI_BASE_URL()}/v1/collect/validate/limits/per-day`,
    UPI_INCOMING_REQUESTS_VISITED: `${Config.UPI_BASE_URL()}/v1/incoming-requests/visited`,
    BANKACCOUNTS: `${Config.UPI_BASE_URL()}/v1/bankAccounts`,
    SET_ACCOUNT_AS_PRIMARY: `${Config.UPI_BASE_URL()}/v1/setAccountAsPrimary`,
    CHANGE_PIN: `${Config.UPI_BASE_URL()}/v1/changePIN`,
    REMOVE_ACCOUNT_FROM_VPA: `${Config.UPI_BASE_URL()}/v1/delink-account`,
    LINK_ACCOUNT_TO_VPA: `${Config.UPI_BASE_URL()}/v1/link-account`,
    GET_PUBLIC_KEYS: `${Config.UPI_BASE_URL()}/v1/npci/list-public-keys`,
    INITIATE_BINDING: `${Config.UPI_BASE_URL()}/v1/initiate-binding`,
    CHECK_BALANCE: `${Config.UPI_BASE_URL()}/v1/check-balance`,
    GENERATE_OTP: `${Config.UPI_BASE_URL()}/v1/generate-otp`,
    CONFIRM_COLLECT: `${Config.UPI_BASE_URL()}/v1/confirm-collect`,
    SET_OR_FORGOT_PIN: `${Config.UPI_BASE_URL()}/v1/set-or-forgot-pin`,
    BLOCKED_VPA_LIST: `${Config.UPI_BASE_URL()}/v1/list-blocked-vpa`,
    VALIDATE_DEVICE_BINDING: `${Config.UPI_BASE_URL()}/v1/validate-device-binding`,
    SEND_SILENT_MESSAGE: `${Config.UPI_BASE_URL()}/v1/send-silent-message`,
    GET_DISPUTE_OPTIONS_FOR_UPI: `${Config.UPI_BASE_URL()}/v1/dispute/options`,
    // TODO: Remove this api once it is deprecated
    RAISE_DISPUTE_FOR_UPI: `${Config.UPI_BASE_URL()}/v1/dispute`,
    RAISE_DISPUTE_FOR_UPI_TRANSACTION: `${Config.UPI_BASE_URL()}/v1/dispute/raise`,
    UPI_TRANSACTIONS: `${Config.UPI_BASE_URL()}/v1/transactions`,
    SAVE_QR_DETAILS: `${Config.UPI_BASE_URL()}/v1/verifyvpa/map-transaction-details`,
    UPI_BANKS: `${Config.UPI_BASE_URL()}/v1/banks`,
    GET_UPI_RAILROAD_DETAILS: `${Config.UPI_BASE_URL()}/v1/railroad-details`,
    VALIDATE_LIMIT_UPI_24_HOUR: `${Config.UPI_BASE_URL()}/v1/validate/limits/24hours`,
    VALIDATE_NUMBER_OF_TRANSACTIONS_LIMIT: `${Config.UPI_BASE_URL()}/v1/validate-collect-request`,
  };

  const urls = {
    ...paymentsUrls,
    ...billpayUrls,
    ...beneficiaryUrls,
  };

  return {
    ...urls,
    ...upiUrls,
  };
};
