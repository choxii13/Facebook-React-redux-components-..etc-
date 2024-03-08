import { configureStore } from "@reduxjs/toolkit";
import { modal } from "./modal";
import { userData } from "./userData";

const store = configureStore({
  reducer: {
    modal: modal.reducer,
    userData: userData.reducer,
  },
});

export default store;
