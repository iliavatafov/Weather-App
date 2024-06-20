import { configureStore } from "@reduxjs/toolkit";

import userSettingsSlice from "./userSettingsSlice.js";
import weatherDataReducer from "./weatherDataSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    userSettings: userSettingsSlice,
    weatherData: weatherDataReducer,
    modal: modalSlice,
  },
});
