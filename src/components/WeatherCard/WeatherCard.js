import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setMetricsData } from "../../store/weatherDataSlice";

import { capitalizeFirstLetter, formatDateTime } from "../../helpers/helpers";

import styles from "./WeatherCard.module.css";

export const WeatherCard = ({ weatherData, cityName, country }) => {
  const {
    main: { temp, feels_like, temp_min, temp_max, humidity },
    weather,
    wind,
    dt_txt,
  } = weatherData;

  const units = useSelector((state) => state.userSettings.units);
  const { metricSymbol, windSpeedUnit } = useSelector(
    (state) => state.weatherData.metricsData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (units === "metric") {
      dispatch(
        setMetricsData({
          metricSymbol: "°C",
          windSpeedUnit: "m/s",
        })
      );
    } else {
      dispatch(
        setMetricsData({
          metricSymbol: "°F",
          windSpeedUnit: "mph",
        })
      );
    }
  }, [units, dispatch]);

  const weatherDescription = weather[0].description;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <article
      className={styles["weather-card"]}
      role="slected-card-weather-data"
    >
      <header className={styles["card-header"]}>
        <section className={styles.location}>
          <h3>
            {cityName}, {country}
          </h3>
          <h3>{formatDateTime(dt_txt)}</h3>
        </section>
        <img src={iconUrl} alt={weatherDescription} />
      </header>
      <section className={styles["card-body"]}>
        <h2>{`${Math.round(temp)}${metricSymbol}`}</h2>
        <p>{capitalizeFirstLetter(weatherDescription)}</p>
        <section className={styles["weather-data-container"]}>
          <div className={styles["temperature-section"]}>
            <ul>
              <li>
                <span>Feels like:</span> {Math.round(feels_like)}
                {metricSymbol}
              </li>
              <li>
                <span>Min Temp:</span> {Math.round(temp_min)}
                {metricSymbol}
              </li>
              <li>
                <span>Max Temp:</span> {Math.round(temp_max)}
                {metricSymbol}
              </li>
            </ul>
          </div>
          <div className={styles["wind-section"]}>
            <ul>
              <li>
                <span>Humidity:</span> {humidity}%
              </li>
              <li>
                <span>Wind:</span> {wind.speed} {windSpeedUnit}
              </li>
            </ul>
          </div>
        </section>
      </section>
    </article>
  );
};
