import React from "react";
import styles from "./FeaturesCardBlack.module.css";

export const FeaturesCardBlack = ({ heading, logo, text }) => {
  return (
    <div className={styles.featuresCardBlack}>
      <p>{heading}</p>
      <img src={logo} />
      <p>{text}</p>
    </div>
  );
};
