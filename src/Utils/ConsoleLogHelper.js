export default {
  log: (logMessage, data) => {
    if (__DEV__) {
      console.log(logMessage, data);
    }
  },
};
