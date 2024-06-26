import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";

import configureStore from "redux-mock-store";

import { capitalizeFirstLetter, formatDateTime } from "../../helpers/helpers";

import { WeatherCard } from "./WeatherCard";

const mockStore = configureStore([]);

const mockWeatherData = {
  dt_txt: "2024-06-27 12:00:00",
  main: { temp: 26, feels_like: 24, temp_min: 25, temp_max: 27, humidity: 50 },
  weather: [{ description: "Clear", icon: "01d" }],
  wind: { speed: 3.5 },
};

describe("WeatherCard", () => {
  let store;
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    store = mockStore({
      weatherData: {
        metricsData: {
          metricSymbol: "°C",
          windSpeedUnit: "m/s",
        },
      },
      userSettings: {
        units: "metric",
      },
    });

    render(
      <Provider store={store}>
        <WeatherCard
          weatherData={mockWeatherData}
          cityName="Test City"
          country="Test Country"
        />
      </Provider>
    );
  });

  it("renders weather card with correct location and date", () => {
    const locationElement = screen.getByText("Test City, Test Country");
    const dateElement = screen.getByText(
      formatDateTime(mockWeatherData.dt_txt)
    );

    expect(locationElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });

  it("renders temperature with correct metric symbol based on initial state", () => {
    const tempElement = screen.getByText(
      `${Math.round(mockWeatherData.main.temp)}°C`
    );
    expect(tempElement).toBeInTheDocument();
  });

  it("updates metric symbol and wind speed unit on unit change", () => {
    store = mockStore({
      weatherData: {
        metricsData: {
          metricSymbol: "°F",
          windSpeedUnit: "mph",
        },
      },
      userSettings: {
        units: "imperial",
      },
    });

    render(
      <Provider store={store}>
        <WeatherCard
          weatherData={mockWeatherData}
          cityName="Test City"
          country="Test Country"
        />
      </Provider>
    );

    const tempElement = screen.getByText(
      `${Math.round(mockWeatherData.main.temp)}°F`
    );
    const windElement = screen.getByText(`${mockWeatherData.wind.speed} mph`);

    expect(tempElement).toBeInTheDocument();
    expect(windElement).toBeInTheDocument();
  });

  it("renders weather description and other weather details", () => {
    const weatherDescriptionElement = screen.getByText(
      capitalizeFirstLetter(mockWeatherData.weather[0].description)
    );
    const feelsLikeElement = screen.getByText(
      `${Math.round(mockWeatherData.main.feels_like)}°C`
    );
    const minTempElement = screen.getByText(
      `${Math.round(mockWeatherData.main.temp_min)}°C`
    );
    const maxTempElement = screen.getByText(
      `${Math.round(mockWeatherData.main.temp_max)}°C`
    );
    const humidityElement = screen.getByText(
      `${mockWeatherData.main.humidity}%`
    );
    const windSpeedElement = screen.getByText(
      `${mockWeatherData.wind.speed} m/s`
    );

    expect(weatherDescriptionElement).toBeInTheDocument();
    expect(feelsLikeElement).toBeInTheDocument();
    expect(minTempElement).toBeInTheDocument();
    expect(maxTempElement).toBeInTheDocument();
    expect(humidityElement).toBeInTheDocument();
    expect(windSpeedElement).toBeInTheDocument();
  });
});
