import { createSlice } from "@reduxjs/toolkit";

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    currentDay: null,
    fiveDaysWeather: null,
    metricsData: {
      metricSymbol: "°C",
      windSpeedUnit: "m/s",
    },
  },
  reducers: {
    setCurrentDay(state, action) {
      state.currentDay = action.payload;
    },
    setFiveDaysWeather(state, action) {
      state.fiveDaysWeather = action.payload;
    },
    setMetricsData(state, action) {
      state.metricsData = action.payload;
    },
  },
});

export const { setCurrentDay, setFiveDaysWeather, setMetricsData } =
  weatherDataSlice.actions;

export default weatherDataSlice.reducer;
