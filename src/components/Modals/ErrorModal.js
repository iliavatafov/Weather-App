import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Modal } from "../Modals/Modal";
import { modalActions } from "../../store/modalSlice";

import styles from "./ErrorModal.module.css";

export const ErrorModal = () => {
  const dispatch = useDispatch();
  const errorData = useSelector((state) => state.modal.errorData);

  return (
    <Modal>
      <div className={styles["error-container"]} role="error-modal">
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.xmark}
          data-testid="close-button"
          onClick={() => dispatch(modalActions.closeModal())}
        />
        <div className={styles["error-body"]}>
          <div className={styles.errorMessage}>
            <h2>{errorData?.title}</h2>
            <p>{errorData?.message}</p>
          </div>
        </div>
        <div className={styles["link-to-error-container"]}>
          <Link
            to={"#"}
            className={styles["link-to-error"]}
            onClick={() => dispatch(modalActions.closeModal())}
          >
            OK
          </Link>
        </div>
      </div>
    </Modal>
  );
};
