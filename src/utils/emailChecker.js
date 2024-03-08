export const emailChecker = (userData, password, email) => {
  const index = userData.findIndex((user) => user["mobile-email"] === email);
  const existingData = userData[index]; // userData
  console.log(existingData);
  if (existingData) {
    if (
      existingData.password === password &&
      existingData["mobile-email"] === email
    ) {
      return { login: "SUCCESSFUL", index: index };
    } else {
      return "Incorrect Email or Password";
    }
  } else {
    return "Email does not exists";
  }
};

export const emailChangePass = (userData, email) => {
  const index = userData.findIndex((user) => user["mobile-email"] === email);
  const existingData = userData[index];
  if (existingData) {
    return {
      existingData,
      index,
    };
  } else {
    return false;
  }
};

export const changePassword = (existingData, currentpassword, newPass) => {
  if (currentpassword !== existingData.password) {
    return false;
  } else {
    const updatedPassword = {
      ...existingData, // sa lahat ng data ng email
      password: newPass,
    };
    return updatedPassword;
  }
};
