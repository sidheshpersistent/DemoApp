import Config from '../../config/Config';

const PROFILE_SERVICE = () => `${Config.IDP_USER_PROFILE_BASE_URL()}/user-profile/v1`;

export const FETCH_CUSTOMER_PROFILE_URL = () => `${PROFILE_SERVICE()}/get-profile`;

export const UPDATE_MOBILE_NUMBER = () => `${PROFILE_SERVICE()}/mobile`;

export const UPDATE_PAN = () => `${PROFILE_SERVICE()}/pan`;
