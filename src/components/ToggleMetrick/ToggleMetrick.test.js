import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";

import { Provider } from "react-redux";

import { setIdx, setUnits } from "../../store/userSettingsSlice";

import { ToggleMetrick } from "./ToggleMetrick";

const mockStore = configureStore([]);

describe("ToggleMetrick", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      userSettings: {
        units: "metric",
        idx: 0,
      },
    });

    store.dispatch = jest.fn();
    localStorage.clear();

    render(
      <Provider store={store}>
        <ToggleMetrick />
      </Provider>
    );
  });

  it("should render the toggle component correctly", () => {
    expect(screen.getByRole("toggle")).toBeInTheDocument();
    expect(screen.getByLabelText("Select metric °C or °F")).toBeInTheDocument();
    expect(screen.getByText("°C")).toBeInTheDocument();
    expect(screen.getByText("°F")).toBeInTheDocument();
  });

  it("should load settings from localStorage on mount", () => {
    const savedSettings = { units: "imperial", idx: 1 };
    localStorage.setItem("userSettings", JSON.stringify(savedSettings));

    render(
      <Provider store={store}>
        <ToggleMetrick />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(setUnits(savedSettings.units));
    expect(store.dispatch).toHaveBeenCalledWith(setIdx(savedSettings.idx));
  });

  it("should toggle from metric to imperial units", () => {
    const toggleInput = screen.getByRole("checkbox");
    expect(toggleInput).not.toBeChecked();

    fireEvent.click(toggleInput);

    expect(store.dispatch).toHaveBeenCalledWith(setUnits("imperial"));
    expect(localStorage.getItem("userSettings")).toEqual(
      JSON.stringify({ units: "imperial", idx: 0 })
    );
  });
});
