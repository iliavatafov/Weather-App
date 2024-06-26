import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";

import configureStore from "redux-mock-store";

import { WeatherItem } from "./WeatherItem";

const mockStore = configureStore([]);

const dayData = {
  dt_txt: "2024-06-27 12:00:00",
  weather: [{ description: "Clear", icon: "01d" }],
  main: { temp: 26 },
};

const handleCardClick = jest.fn();

describe("WeatherItem", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      weatherData: {
        metricsData: {
          metricSymbol: "°C",
        },
      },
    });

    render(
      <Provider store={store}>
        <WeatherItem
          day={dayData}
          index={0}
          isActive={false}
          handleCardClick={handleCardClick}
        />
      </Provider>
    );
  });

  it("should render WeatherItem correctly with default props", () => {
    const dateElement = screen.getByText("Thursday");
    const tempElement = screen.getByText("26°C");

    expect(dateElement).toBeInTheDocument();
    expect(tempElement).toBeInTheDocument();
  });

  it("should invoke handleCardClick when clicked", () => {
    const weatherItem = screen.getByRole("weather-card");

    weatherItem.click();

    expect(handleCardClick).toHaveBeenCalledWith(0);
  });
});
