import ScreenConstants from 'constants/screen-constants';

const DEFAULT_THANK_YOU_TOAST_TIMEOUT = 1000;
const THANK_YOU_TOAST_TIMEOUT = 3 * 1000;
const { THANK_YOU_MESSAGE } = ScreenConstants.APP_RATING;
const CLICK_STREAM_APP_RATING_TRACK = {
  RATE_LATER_CLICK_LINK: 'rate_later_click_link',
  RATE_NEVER_CLICK_LINK: 'rate_never_click_link',
  CANCEL_CLICK_LINK: 'cancel_click_link',
};
export { DEFAULT_THANK_YOU_TOAST_TIMEOUT, THANK_YOU_TOAST_TIMEOUT, THANK_YOU_MESSAGE, CLICK_STREAM_APP_RATING_TRACK };
