import styles from "./Input.module.scss";
import PropTypes from "prop-types";
import { useId } from "react";

const Input = ({ label, ...options }) => {
  let id = useId();
  return (
    <div className={styles.input}>
      <label htmlFor={id} className={styles.input__label}>
        {label}
      </label>
      <input
        {...options}
        className={styles.input__form}
        required={true}
        id={id}
      />
    </div>
  );
};

export const TextArea = ({ label, ...options }) => {
  let id = useId();
  return (
    <div className={styles.input}>
      <label htmlFor={id} className={styles.input__label}>
        {label}
      </label>
      <textarea
        {...options}
        className={styles.input__form}
        id={id}
        style={{ maxWidth: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Input;
Input.propTypes = {
  label: PropTypes.string,
};
