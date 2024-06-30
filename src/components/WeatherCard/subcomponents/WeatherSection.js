import { WeatherInfo } from "./WeatherInfo";

import styles from "../WeatherCard.module.css";

export const WeatherSection = ({ title, items }) => (
  <div className={styles["weather-section"]}>
    <ul>
      {items.map((item, index) => (
        <WeatherInfo key={index} {...item} />
      ))}
    </ul>
  </div>
);
