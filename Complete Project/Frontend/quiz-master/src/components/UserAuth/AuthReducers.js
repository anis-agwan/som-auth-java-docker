export const firstNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val !== "",
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: action.val !== "",
    };
  }
};

export const lastNameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val !== "",
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: action.val !== "",
    };
  }
};

export const bNumberReducer = (state, action) => {
  var regexConst = /^B\d{8}$/;
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: regexConst.test(action.val),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: regexConst.test(state.value),
    };
  }

  return {
    value: "",
    isValid: false,
  };
};

export const userNameReducer = (state, action) => {
  // var regexConst = /^B\d{8}$/;
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@binghamton.edu"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@binghamton.edu"),
    };
  }

  return {
    value: "",
    isValid: false,
  };
};

export const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 1,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 1,
    };
  }

  return {
    value: "",
    isValid: false,
  };
};
