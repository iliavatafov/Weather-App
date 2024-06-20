import { useSelector } from "react-redux";

import styles from "./WeatherItem.module.css";

export const WeatherItem = ({ day, index, isActive, handleCardClick }) => {
  const { metricSymbol } = useSelector(
    (state) => state.weatherData.metricsData
  );

  const handleClick = () => {
    handleCardClick(index);
  };

  const formattedDate = new Date(day.dt_txt).toLocaleDateString("en-US", {
    weekday: "long",
  });

  const weatherDescription = day.weather[0].description;
  const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
  const temperature = Math.round(day.main.temp);

  return (
    <article
      className={`${styles["weather-item"]} ${
        isActive ? styles["active"] : ""
      }`}
      onClick={handleClick}
      role="weather-card"
      aria-label="click-the-card-to-select"
    >
      <div className={styles["highlight-line"]}></div>
      <header>
        <h3>{formattedDate}</h3>
      </header>
      <div>
        <img src={iconUrl} alt={weatherDescription} />
      </div>
      <footer>
        <p>
          {temperature}
          {metricSymbol}
        </p>
      </footer>
    </article>
  );
};
