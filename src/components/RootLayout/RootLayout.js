import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ErrorModal } from "../Modals/ErrorModal";
import { Header } from "../Header/Header";
import { WeatherDashboard } from "../WeatherDashboard/WeatherDashboard";

import {
  weatherBackgrounds,
  weatherStateMapping,
} from "../../constants/constants";

import styles from "../RootLayout/RootLayout.module.css";

export const RootLayout = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    weatherBackgrounds["Clouds"]
  );

  const weatherData = useSelector((state) => state.weatherData.fiveDaysWeather);
  const selectedDayIdx = useSelector((state) => state.userSettings.idx);
  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    const preloadImages = Object.values(weatherBackgrounds).map((image) => {
      const img = new Image();
      img.src = image;
      return img;
    });

    return () => {
      preloadImages.forEach((img) => (img.onload = null));
    };
  }, []);

  useEffect(() => {
    if (weatherData) {
      const weatherDescription =
        weatherData.list[selectedDayIdx].weather[0].main;

      const imageKey = weatherStateMapping[weatherDescription];

      setBackgroundImage(weatherBackgrounds[imageKey]);
    }
  }, [weatherData, selectedDayIdx]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, [backgroundImage]);

  return (
    <div className={styles["app-containter"]}>
      <div className={styles.overlay}></div>
      <div className={styles["content-container"]}>
        <header>
          <Header />
        </header>
        <main>
          {modal.errorData.isError && <ErrorModal />}
          <WeatherDashboard />
        </main>
        <footer></footer>
      </div>
    </div>
  );
};
