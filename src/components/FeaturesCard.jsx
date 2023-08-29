import React from "react";
import styles from "./FeaturesCard.module.css";

export const FeaturesCard = ({ heading, logo, text }) => {
  return (
    <div className={styles.featuresCard}>
      <p>{heading}</p>
      <img src={logo} />
      <p>{text}</p>
    </div>
  );
};
