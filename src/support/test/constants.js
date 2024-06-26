export const weatherDataMock = {
  fiveDaysWeather: {
    city: {
      name: "Test City",
      country: "Test Country",
    },
    list: [
      {
        dt: 1624759200,
        weather: [{ main: "Clear", icon: "01d" }],
        main: { temp: 25.5 },
        wind: { speed: 3.5 },
      },
    ],
  },
  metricsData: {
    metricSymbol: "°C",
    windSpeedUnit: "m/s",
  },
};

export const userSettingsMock = {
  units: "metric",
  idx: 0,
};
