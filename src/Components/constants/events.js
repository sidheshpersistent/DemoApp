const events = {
  ALERT: 'ALERT',
  SUCCESS: 'SUCCESS',
  REMOVE_SUCCESS: 'REMOVE_SUCCESS',
  ERROR: 'ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR',
  ADD_LOADER: 'ADD_LOADER',
  REMOVE_LOADER: 'REMOVE_LOADER',
  SHOW_POPUP: 'SHOW_POPUP',
  REMOVE_POPUP: 'REMOVE_POPUP',
  ADD_SCREEN_LOADER: 'ADD_SCREEN_LOADER',
  REMOVE_SCREEN_LOADER: 'REMOVE_SCREEN_LOADER',
  SHOW_MODAL_LOADER: 'SHOW_MODAL_LOADER',
  HIDE_MODAL_LOADER: 'HIDE_MODAL_LOADER',
  SHOW_PRE_LOGOUT_POPUP: 'SHOW_PRE_LOGOUT_POPUP',
  BLOCK_ALL_POPUPS: 'BLOCK_ALL_POPUPS',
  UNBLOCK_ALL_POPUPS: 'UNBLOCK_ALL_POPUPS',
};

export const NETWORK_EVENTS = {
  networkCallBegin: 'networkCallBegin',
  networkCallEnd: 'networkCallEnd',
  networkCallFailure: 'networkCallFailure',
  setCustomDescriptionMessage: 'setCustomDescriptionMessage',
  setCanShowNetworkErrorBanner: 'setCanShowNetworkErrorBanner',
  logout: 'logout',
  resetLogout: 'resetLogout',
  setCheckNetworkErrorBanner: 'setCheckNetworkErrorBanner',
};

export const SYSTEM_AVAILABILITY_EVENTS = {
  setSystemUnderMaintenanceError: 'setSystemUnderMaintenanceError',
  resetSystemUnderMaintenanceError: 'resetSystemUnderMaintenanceError',
};

export const TOAST_EVENTS = {
  showNetworkFailureToast: 'showNetworkFailureToast',
  closeNetworkFailureToast: 'closeNetworkFailureToast',
  showMessageToast: 'showMessageToast',
  hideMessageToast: 'hideMessageToast',
};

export const TOAST_TYPE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO',
};

export const MODAL_EVENTS = {
  closeModal: 'closeModal',
  openModal: 'openModal',
  retryAndClose: 'retryAndClose',
  isFlowModalOpen: 'isFlowModalOpen',
};

export const TRACE_EVENTS = {
  start: 'start',
  end: 'end',
};

export const ERROR_MODAL = 'Error Modal';

export const FORCE_MODAL = 'force modal';
export const TOGGLE_LOADER_VISIBILITY = 'toggle loader';
export const LOGOUT_EVENT = 'LOGOUT_EVENT';

export default events;
