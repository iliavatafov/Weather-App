import cloudImage from "../assets/images/cloudy.jpg";
import rainyImage from "../assets/images/rainy.avif";
import snowyImage from "../assets/images/snowy.jpg";
import sunnyImage from "../assets/images/sunny.jpg";

export const weatherBackgrounds = {
  Clear: sunnyImage,
  Clouds: cloudImage,
  Rain: rainyImage,
  Snow: snowyImage,
};

export const weatherStateMapping = {
  Clear: "Clear",
  Clouds: "Clouds",
  Rain: "Rain",
  Drizzle: "Rain",
  Thunderstorm: "Rain",
  Snow: "Snow",
  Mist: "Clouds",
  Smoke: "Clouds",
  Haze: "Clouds",
  Dust: "Clouds",
  Fog: "Clouds",
  Sand: "Clouds",
  Ash: "Clouds",
  Squall: "Rain",
  Tornado: "Rain",
};
