import React from "react";
import { WeatherCard } from "../components/WeatherCard/WeatherCard";

const withBlackBackground = (Story) => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <Story />
  </div>
);

export default {
  title: "WeatherCard",
  component: WeatherCard,
  decorators: [withBlackBackground],
};

const mockWeatherData = {
  main: {
    temp: 26,
    feels_like: 24,
    temp_min: 25,
    temp_max: 27,
    humidity: 50,
  },
  weather: [{ description: "clear sky", icon: "01d" }],
  wind: { speed: 3.5 },
  dt_txt: "2024-06-27 12:00:00",
};

const Template = (args) => <WeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  weatherData: mockWeatherData,
  cityName: "Test City",
  country: "Test Country",
  metricSymbol: "°C",
  windSpeedUnit: "m/s",
};

export const AnotherWeather = Template.bind({});
AnotherWeather.args = {
  weatherData: {
    main: {
      temp: 30,
      feels_like: 28,
      temp_min: 29,
      temp_max: 31,
      humidity: 40,
    },
    weather: [{ description: "cloudy", icon: "02d" }],
    wind: { speed: 4.0 },
    dt_txt: "2024-06-28 12:00:00",
  },
  cityName: "Another City",
  country: "Another Country",
  metricSymbol: "°C",
  windSpeedUnit: "m/s",
};
