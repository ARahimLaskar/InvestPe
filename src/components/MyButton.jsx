import React from "react";
import styles from "./MyButton.module.css";
export const MyButton = ({ children }) => {
  return (
    <button className={styles.myButton} type="button">
      {children}
    </button>
  );
};
