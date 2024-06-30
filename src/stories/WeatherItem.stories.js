import { WeatherItem } from "../components/WeatherItems/WeatherItem";

const withBlackBackground = (Story) => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <Story />
  </div>
);

export default {
  title: "Components/WeatherItem",
  component: WeatherItem,
  argTypes: {
    handleCardClick: { action: "handleCardClick" },
  },
  decorators: [withBlackBackground],
};

const Template = (args) => <WeatherItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  day: {
    dt_txt: "2023-06-30 12:00:00",
    weather: [{ description: "clear sky", icon: "01d" }],
    main: { temp: 25 },
  },
  index: 0,
  isActive: false,
  metricSymbol: "°C",
  handleCardClick: () => {},
};

export const Active = Template.bind({});
Active.args = {
  day: {
    dt_txt: "2023-06-30 12:00:00",
    weather: [{ description: "clear sky", icon: "01d" }],
    main: { temp: 25 },
  },
  index: 0,
  isActive: true,
  metricSymbol: "°C",
  handleCardClick: () => {},
};

export const TextColor = Template.bind({});
TextColor.args = {
  day: {
    dt_txt: "2023-06-30 12:00:00",
    weather: [{ description: "clear sky", icon: "01d" }],
    main: { temp: 25 },
  },
  index: 0,
  isActive: true,
  metricSymbol: "°C",
  textColor: "#A0CDD9",
  handleCardClick: () => {},
};

export const BorderColor = Template.bind({});
BorderColor.args = {
  day: {
    dt_txt: "2023-06-30 12:00:00",
    weather: [{ description: "clear sky", icon: "01d" }],
    main: { temp: 25 },
  },
  index: 0,
  isActive: true,
  metricSymbol: "°C",
  borderColor: "#A0CDD9",
  handleCardClick: () => {},
};
