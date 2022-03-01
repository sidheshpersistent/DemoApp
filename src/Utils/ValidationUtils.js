export const validation = {
  mobile: {
    pattern: /^([0-9'-\s]){10}$/,
    message: 'Invalid mobile number',
  },
  email: {
    pattern:
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Invalid email Id',
  },
  pan: {
    pattern: /^([a-zA-Z]){5}(\d){4}([a-zA-Z]){1}$/,
    message: 'Invalid pan number',
  },
  aadhar: {
    pattern: /^([0-9-\s]){12}$/,
    message: 'Invalid aadhar number /virtual ID',
  },
  virtualID: {
    pattern: /^([0-9-\s]){16}$/,
    message: 'Invalid aadhar number /virtual ID',
  },
};

export const isValidMobileNo = value => {
  if (validation.mobile.pattern.test(value)) {
    return true;
  } else {
    return false;
  }
};
export const isValidEmailId = value => {
  if (validation.email.pattern.test(value)) {
    return true;
  } else {
    return false;
  }
};
export const isValidPan = value => {
  if (validation.pan.pattern.test(value)) {
    return true;
  } else {
    return false;
  }
};
export const isValidAadhar = value => {
  if (
    validation.aadhar.pattern.test(value) ||
    validation.virtualID.pattern.test(value)
  ) {
    return true;
  } else {
    return false;
  }
};
