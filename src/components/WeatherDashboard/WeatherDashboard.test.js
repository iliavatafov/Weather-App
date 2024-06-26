import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { WeatherDashboard } from "./WeatherDashboard";

import {
  userSettingsMock,
  weatherDataMock,
} from "../../support/test/constants";

const mockStore = configureStore([]);

describe("WeatherDashboard", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      userSettings: userSettingsMock,
      weatherData: weatherDataMock,
    });

    store.dispatch = jest.fn();
    localStorage.clear();

    render(
      <Provider store={store}>
        <WeatherDashboard />
      </Provider>
    );
  });

  it("should render the WeatherDashboard component correctly", () => {
    expect(screen.getByRole("weather-dashboard")).toBeInTheDocument();
    expect(screen.getByRole("weather-card")).toBeInTheDocument();
    expect(screen.getByRole("weather-items")).toBeInTheDocument();
  });
});
