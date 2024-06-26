import styles from "./ModalOverlay.module.css";

export const ModalOverlay = ({ children }) => {
  return (
    <div className={styles["modal-container"]} data-testid="modal-container">
      {children}
    </div>
  );
};
