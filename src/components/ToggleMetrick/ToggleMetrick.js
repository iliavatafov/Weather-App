import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIdx, setUnits } from "../../store/userSettingsSlice";

import { Toggle } from "../Toggle/Toggle";

const labels = ["°C", "°F"];

export const ToggleMetrick = () => {
  const units = useSelector((state) => state.userSettings.units);
  const idx = useSelector((state) => state.userSettings.idx);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedSettings = localStorage.getItem("userSettings");

    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      dispatch(setUnits(parsedSettings.units));
      dispatch(setIdx(parsedSettings.idx));
    }
  }, [dispatch]);

  const onToggle = (newUnit) => {
    localStorage.setItem(
      "userSettings",
      JSON.stringify({ units: newUnit, idx })
    );
    dispatch(setUnits(newUnit));
  };

  const handleChange = () => {
    const newUnit = units === "metric" ? "imperial" : "metric";
    onToggle(newUnit);
  };

  return (
    <Toggle
      handleChange={handleChange}
      isChecked={units === "imperial"}
      labels={labels}
    />
  );
};
