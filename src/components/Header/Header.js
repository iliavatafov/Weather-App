import { useSelector } from "react-redux";

import useFetchWeatherData from "../../hooks/useFetchWeatherData";

import { SearchComponent } from "../SearchComponent/SearchComponent";
import { ToggleMetrick } from "../ToggleMetrick/ToggleMetrick";

import styles from "../Header/Header.module.css";
import { useEffect } from "react";

export const Header = () => {
  const units = useSelector((state) => state.userSettings.units);
  const fetchWeatherData = useFetchWeatherData(units);

  useEffect(() => {
    fetchWeatherData("Sofia");
  }, [fetchWeatherData]);

  return (
    <div className={styles["weather-header"]}>
      <SearchComponent
        units={units}
        placeholder={"Please enter city name"}
        handleSearch={fetchWeatherData}
      />
      <ToggleMetrick />
    </div>
  );
};
