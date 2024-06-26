import { render, screen, fireEvent } from "@testing-library/react";

import { WeatherItem } from "./WeatherItem";

const handleCardClick = jest.fn();

const mockDayData = {
  dt_txt: "2024-06-27 12:00:00",
  weather: [{ description: "Clear", icon: "01d" }],
  main: { temp: 26 },
};

describe("WeatherItem", () => {
  beforeEach(() => {
    render(
      <WeatherItem
        day={mockDayData}
        index={0}
        isActive={true}
        metricSymbol="°C"
        handleCardClick={handleCardClick}
      />
    );
  });

  it("renders formatted date correctly", () => {
    const formattedDateElement = screen.getByText("Thursday");
    expect(formattedDateElement).toBeInTheDocument();
  });

  it("renders temperature with metric symbol", () => {
    const temperatureElement = screen.getByText("26°C");
    expect(temperatureElement).toBeInTheDocument();
  });

  it("applies 'active' class when isActive is true", () => {
    const weatherItem = screen.getByRole("article");
    expect(weatherItem).toHaveClass("active");
  });

  it("invokes handleCardClick when clicked", () => {
    const weatherItem = screen.getByRole("article");

    fireEvent.click(weatherItem);

    expect(handleCardClick).toHaveBeenCalledWith(0);
  });
});
