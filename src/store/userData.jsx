import { createSlice } from "@reduxjs/toolkit";
export const userData = createSlice({
  name: "userData",
  initialState: {
    userData: [],
    userNameData: null,
    existingData: null,
    auth: false,
  },
  reducers: {
    addUserData(state, { payload }) {
      const userData = [...state.userData];
      userData.push(payload);
      state.userData = userData;
    },
    userNameData(state, { payload }) {
      state.userNameData = state.userData[payload];
    },
    auth(state) {
      state.auth = true;
    },
    existingData(state, { payload }) {
      state.existingData = payload;
    },
    changePassword(state, { payload }) {
      state.userData[state.existingData.index] = payload.data;
    },
    reset(state) {
      state.changePassword = {
        emailIndex: null,
        existingEmail: null,
        currentPassword: null,
      };
      state.userNameData = null;
      state.auth = false;
    },
  },
});

export const userDataActions = userData.actions;
