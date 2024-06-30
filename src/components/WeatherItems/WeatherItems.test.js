import { render, screen } from "@testing-library/react";

import { WeatherItem } from "./WeatherItem";

const dayData = {
  dt_txt: "2024-06-27 12:00:00",
  weather: [{ description: "Clear", icon: "01d" }],
  main: { temp: 26 },
};

const handleCardClick = jest.fn();

describe("WeatherItem", () => {
  beforeEach(() => {
    render(
      <WeatherItem
        day={dayData}
        index={0}
        isActive={false}
        metricSymbol="°C"
        handleCardClick={handleCardClick}
      />
    );
  });

  it("should render WeatherItem correctly with default props", () => {
    const dateElement = screen.getByText("Thursday");
    const tempElement = screen.getByText("26°C");

    expect(dateElement).toBeInTheDocument();
    expect(tempElement).toBeInTheDocument();
  });

  it("should invoke handleCardClick when clicked", () => {
    const weatherItem = screen.getByRole("article");

    weatherItem.click();

    expect(handleCardClick).toHaveBeenCalledWith(0);
  });
});
