import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useFetchWeatherData from "../../hooks/useFetchWeatherData";

import { SearchComponent } from "../SearchComponent/SearchComponent";
import { ToggleMetrick } from "../ToggleMetrick/ToggleMetrick";

import styles from "../Header/Header.module.css";

export const Header = () => {
  const [ciryName, setCityName] = useState("Sofia");

  const units = useSelector((state) => state.userSettings.units);
  const fetchWeatherData = useFetchWeatherData(units);

  useEffect(() => {
    const city = fetchWeatherData(ciryName);
  }, [fetchWeatherData]);

  return (
    <div className={styles["weather-header"]}>
      <SearchComponent
        units={units}
        placeholder={"Please enter city name"}
        handleSearch={fetchWeatherData}
        setCityName={setCityName}
      />
      <ToggleMetrick />
    </div>
  );
};
