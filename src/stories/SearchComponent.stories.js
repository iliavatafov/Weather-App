import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userEvent, within } from "@storybook/testing-library";

import weatherDataReducer from "../store/weatherDataSlice";
import modalReducer from "../store/modalSlice";

import { SearchComponent } from "../components/SearchComponent/SearchComponent";

const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer,
    modal: modalReducer,
  },
});

const withBlackBackground = (Story) => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <Story />
  </div>
);

const Template = ({ handleSearch, ...args }) => (
  <Provider store={store}>
    <SearchComponent handleSearch={handleSearch} {...args} />
  </Provider>
);

const handleSearch = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export default {
  title: "Components/SearchComponent",
  component: SearchComponent,
  decorators: [withBlackBackground],
};

export const Default = Template.bind({});
Default.args = {
  handleSearch,
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  handleSearch,
  placeholder: "Please enter city name",
};

export const CustomSearchColor = Template.bind({});
CustomSearchColor.args = {
  handleSearch,
  color: "red",
};

export const TextColor = Template.bind({});
TextColor.args = {
  handleSearch,
  textColor: "blue",
};

export const placeholderColor = Template.bind({});
placeholderColor.args = {
  handleSearch,
  placeholderColor: "blue",
};

export const SearchActive = Template.bind({});
SearchActive.args = {
  handleSearch,
  color: "#fff",
};

SearchActive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const searchIcon = await canvas.findByTestId("search-icon");
  await userEvent.click(searchIcon);
};
