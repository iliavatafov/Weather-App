import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { setFiveDaysWeather } from "../store/weatherDataSlice";
import { modalActions } from "../store/modalSlice";

import { filterUniqueDays, getErrorMessage } from "../helpers/helpers";

import WeatherApi from "../services/WeatherApi";

const useFetchWeatherData = (units) => {
  const dispatch = useDispatch();

  const fetchWeatherData = useCallback(
    async (city) => {
      try {
        const cityName = city || "Sofia";
        const response = await WeatherApi.fetchNextFiveDaysWeather(
          cityName,
          units
        );
        dispatch(setFiveDaysWeather(filterUniqueDays(response.data)));
      } catch (err) {
        const statusCode = err.response?.status;
        const message = err.response
          ? getErrorMessage(statusCode)
          : "Something went wrong. Please try again later.";

        dispatch(
          modalActions.setErrorData({
            isError: true,
            message,
          })
        );
      }
    },
    [dispatch, units]
  );

  return fetchWeatherData;
};

export default useFetchWeatherData;
