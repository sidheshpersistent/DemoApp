import RemittanceLabels from 'translations/pay/remittance';

export const RATE_TYPES = {
  IBR: 'IBR',
  CONTRACT_RATE: 'BetterCardRate',
  CARD_RATE: 'CardRate',
};

export const RATE_MAP = {
  [RATE_TYPES.CARD_RATE]: RemittanceLabels.RATE_TYPE.CARDRATE,
  [RATE_TYPES.CONTRACT_RATE]: RemittanceLabels.RATE_TYPE.BETTERCARDRATE,
  [RATE_TYPES.IBR]: RemittanceLabels.RATE_TYPE.IBR,
};
