import React from "react";
import styles from "./ReviewsCardBottom.module.css";
export const ReviewsCardBottom = ({ img, text1, text2 }) => {
  return (
    <div className={styles.revCardBottom}>
      <div>
        <p>{text1}</p>

        <p>{text2}</p>
      </div>
      <img src={img} />
    </div>
  );
};
