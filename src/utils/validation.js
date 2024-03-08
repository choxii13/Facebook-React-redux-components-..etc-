export const confirmPassword = (fieldvalue, password) => {
  if (fieldvalue !== password || fieldvalue === "") {
    return "Please input a correct password";
  }
};

export const emailValidation = (fieldvalue, userData) => {
  const data = userData.some((user) => user["mobile-email"] === fieldvalue);
  if (!fieldvalue.endsWith("@gmail.com") || fieldvalue === "") {
    return "Please input a valid email";
  }
  if (data) {
    return "Email is already been used";
  }
};

export const changePasswordValidation = (currentpassword, password) => {
  if (currentpassword === password) {
    return "Successful";
  } else {
    return "current password is not correct";
  }
};

export const passwordValidation = (fieldvalue) => {
  const password = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    fieldvalue
  );
  if (!password || fieldvalue === "") {
    return "A password must contain minimum eight characters, at least  one letter, one number and one special character";
  }
};
