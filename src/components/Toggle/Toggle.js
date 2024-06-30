import styles from "./Toggle.module.css";

export const Toggle = ({
  labels,
  isChecked,
  handleChange,
  toggleBackgroundColor,
  labelsColor,
}) => {
  return (
    <div
      className={styles["toggle-container"]}
      role="switch"
      aria-checked={isChecked}
    >
      <div className={styles["label-container"]}>
        <span className={styles.label} style={{ color: labelsColor }}>
          {labels[0]}
        </span>
        <label className={styles.switch}>
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          <span
            className={styles.slider}
            style={{ backgroundColor: toggleBackgroundColor }}
          ></span>
        </label>
        <span className={styles.label} style={{ color: labelsColor }}>
          {labels[1]}
        </span>
      </div>
    </div>
  );
};
