import { SearchComponent } from "../SearchComponent/SearchComponent";
import { ToggleMetrick } from "../ToggleMetrick/ToggleMetrick";

import styles from "../Header/Header.module.css";

export const Header = () => {
  return (
    <div className={styles["weather-header"]}>
      <SearchComponent />
      <ToggleMetrick />
    </div>
  );
};
