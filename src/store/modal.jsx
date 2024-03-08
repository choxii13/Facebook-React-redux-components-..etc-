import { createSlice } from "@reduxjs/toolkit";

export const modal = createSlice({
  name: "modal",
  initialState: { modal: "" },
  reducers: {
    signup(state) {
      state.modal = "sign-up";
    },
    signupsuccess(state) {
      state.modal = "signup-success";
    },
    emailexist(state) {
      state.modal = "email-exist";
    },
    changepassword(state) {
      state.modal = "change-password";
    },
    successpassword(state) {
      state.modal = "success-password";
    },
    close(state) {
      state.modal = null;
    },
  },
});

export const modalActions = modal.actions;
