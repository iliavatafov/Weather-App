import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useMetricsData } from "../../hooks/useMetricsData";
import { capitalizeFirstLetter, formatDateTime } from "../../helpers/helpers";

import { WeatherSection } from "./subcomponents/WeatherSection";

import styles from "./WeatherCard.module.css";

export const WeatherCard = ({ weatherData, cityName, country }) => {
  const units = useSelector((state) => state.userSettings.units);
  const { metricSymbol, windSpeedUnit } = useMetricsData(units);

  const {
    main: { temp, feels_like, temp_min, temp_max, humidity },
    weather,
    wind,
    dt_txt,
  } = weatherData;

  const formattedDate = useMemo(() => formatDateTime(dt_txt), [dt_txt]);
  const weatherDescription = useMemo(
    () => capitalizeFirstLetter(weather[0].description),
    [weather]
  );
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  const temperature = Math.round(temp);

  const tempItems = [
    { label: "Feels like", value: Math.round(feels_like), unit: metricSymbol },
    { label: "Min Temp", value: Math.round(temp_min), unit: metricSymbol },
    { label: "Max Temp", value: Math.round(temp_max), unit: metricSymbol },
  ];

  const windItems = [
    { label: "Humidity", value: humidity, unit: "%" },
    { label: "Wind", value: wind.speed, unit: windSpeedUnit },
  ];

  return (
    <article className={styles["weather-card"]} data-testid="weather-card">
      <header className={styles["card-header"]}>
        <section className={styles["location"]}>
          <h3>
            {cityName}, {country}
          </h3>
          <h3>{formattedDate}</h3>
        </section>
        <img src={iconUrl} alt={weatherDescription} />
      </header>
      <section className={styles["card-body"]}>
        <h2>{`${temperature}${metricSymbol}`}</h2>
        <p>{weatherDescription}</p>
        <section className={styles["weather-data-container"]}>
          <WeatherSection title="Temperature" items={tempItems} />
          <WeatherSection title="Wind" items={windItems} />
        </section>
      </section>
    </article>
  );
};
