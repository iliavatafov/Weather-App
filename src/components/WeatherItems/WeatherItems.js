import { useSelector } from "react-redux";

import { WeatherItem } from "./WeatherItem";

import styles from "./WeatherItems.module.css";

export const WeatherItems = ({ weatherData, onCardClick }) => {
  const activeIndex = useSelector((state) => state.userSettings.idx);
  const { metricSymbol } = useSelector(
    (state) => state.weatherData.metricsData
  );

  const handleCardClick = (index) => {
    onCardClick(index);
  };

  return (
    <div
      className={styles["weather-items-containter"]}
      role="list"
      data-testid="weather-items"
    >
      {weatherData.list.map((day, index) => (
        <WeatherItem
          day={day}
          index={index}
          key={index}
          isActive={index === activeIndex}
          metricSymbol={metricSymbol}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};
