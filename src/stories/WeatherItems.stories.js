import { WeatherItems } from "../components/WeatherItems/WeatherItems";

const withBlackBackground = (Story) => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <Story />
  </div>
);

export default {
  title: "WeatherItems",
  component: WeatherItems,
  decorators: [withBlackBackground],
};

const mockWeatherData = {
  list: [
    {
      dt_txt: "2024-06-27 12:00:00",
      main: {
        temp: 26,
        feels_like: 24,
        temp_min: 25,
        temp_max: 27,
        humidity: 50,
      },
      weather: [{ description: "Clear", icon: "01d" }],
      wind: { speed: 3.5 },
    },
    {
      dt_txt: "2024-06-28 12:00:00",
      main: {
        temp: 30,
        feels_like: 28,
        temp_min: 29,
        temp_max: 31,
        humidity: 40,
      },
      weather: [{ description: "Cloudy", icon: "02d" }],
      wind: { speed: 4.0 },
    },
  ],
};

const Template = (args) => <WeatherItems {...args} />;

export const Default = Template.bind({});
Default.args = {
  weatherData: mockWeatherData,
  onCardClick: (index) => alert(`Card clicked: ${index}`),
  activeIndex: 0,
  metricSymbol: "°C",
};

export const AnotherDaySelected = Template.bind({});
AnotherDaySelected.args = {
  weatherData: mockWeatherData,
  onCardClick: (index) => alert(`Card clicked: ${index}`),
  activeIndex: 1,
  metricSymbol: "°C",
};
