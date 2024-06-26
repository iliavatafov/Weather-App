import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIdx, setUnits } from "../../store/userSettingsSlice";

import styles from "./ToggleMetrick.module.css";

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
    <div
      className={styles["toggle-container"]}
      role="toggle"
      aria-label="Select metric °C or °F"
    >
      <div className={styles["label-container"]}>
        <span className={styles.label}>°C</span>
        <span className={styles.label}>°F</span>
      </div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={units === "imperial"}
          onChange={handleChange}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
