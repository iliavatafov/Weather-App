import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFiveDaysWeather } from "../../store/weatherDataSlice";
import { modalActions } from "../../store/modalSlice";

import { filterUniqueDays, getErrorMessage } from "../../helpers/helpers";

import WeatherApi from "../../services/WeatherApi";

import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./SearchComponent.module.css";

export const SearchComponent = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [city, setCity] = useState("Sofia");
  const [inputValue, setInputValue] = useState("");

  const units = useSelector((state) => state.userSettings.units);

  const dispatch = useDispatch();

  const fetchWeatherData = useCallback(
    async (city) => {
      try {
        let cityName = city;

        if (!city) {
          cityName = "Sofia";
          setCity("Sofia");
        }

        const response = await WeatherApi.fetchNextFiveDaysWeather(
          cityName,
          units
        );
        dispatch(setFiveDaysWeather(filterUniqueDays(response.data)));
      } catch (err) {
        const statusCode = err.response.status;
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

  useEffect(() => {
    fetchWeatherData(city);
  }, [units, city, fetchWeatherData]);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = async () => {
    setCity(inputValue);
    setSearchActive(false);
    await fetchWeatherData(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleInputBlur();
    }
  };

  return (
    <div
      className={styles["search-container"]}
      role="search"
      aria-label="Search by city name"
    >
      <i
        className={`fas fa-search ${styles["search-icon"]}`}
        onClick={handleSearchClick}
        style={styles.icon}
      ></i>
      {searchActive && (
        <input
          className={styles["search-input"]}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Please enter city name"
        />
      )}
    </div>
  );
};
