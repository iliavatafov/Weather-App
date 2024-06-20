import { createSlice } from "@reduxjs/toolkit";

const getInitialUnits = () => {
  const savedSettings = JSON.parse(localStorage.getItem("userSettings"));
  return savedSettings?.units ? savedSettings.units : "metric";
};

const getInitialIdx = () => {
  const savedSettings = JSON.parse(localStorage.getItem("userSettings"));
  return savedSettings?.idx ? savedSettings.idx : 0;
};

const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState: { units: getInitialUnits(), idx: getInitialIdx() },
  reducers: {
    setUnits(state, action) {
      state.units = action.payload;
    },
    setIdx(state, action) {
      state.idx = action.payload;
    },
  },
});

export const { setUnits, setIdx } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;
