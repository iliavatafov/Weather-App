import { useDispatch, useSelector } from "react-redux";

import { WeatherCard } from "../WeatherCard/WeatherCard";
import { WeatherItems } from "../WeatherItems/WeatherItems";

import styles from "./WeatherDashboard.module.css";
import { setIdx } from "../../store/userSettingsSlice";

export const WeatherDashboard = () => {
  const units = useSelector((state) => state.userSettings.units);
  const selectedDayIdx = useSelector((state) => state.userSettings.idx);
  const weatherData = useSelector((state) => state.weatherData.fiveDaysWeather);

  const dispatch = useDispatch();

  const onCardClick = (idx) => {
    localStorage.setItem("userSettings", JSON.stringify({ units, idx }));
    dispatch(setIdx(idx));
  };

  return (
    <div className={styles["dashboard-containter"]} role="weather-dashboard">
      {weatherData && (
        <>
          <div className={styles["selecterd-day"]}>
            <WeatherCard
              weatherData={weatherData.list[selectedDayIdx]}
              cityName={weatherData.city.name}
              country={weatherData.city.country}
            />
          </div>
          <div className={styles["items-wrapper"]}>
            <WeatherItems weatherData={weatherData} onCardClick={onCardClick} />
          </div>
        </>
      )}
    </div>
  );
};
