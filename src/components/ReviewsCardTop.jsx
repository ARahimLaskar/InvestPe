import React from "react";
import styles from "./ReviewsCardTop.module.css";
import quot1 from "../assets/quote1.svg";
import quot2 from "../assets/quote2.svg";
export const ReviewsCardTop = ({ img, text1, text2 }) => {
  return (
    <div className={styles.revCardTop}>
      <img src={img} />
      <div>
        <p>{text1}</p>
        <img src={quot1} />
        <p>{text2}</p>
        <img src={quot2} />
      </div>
    </div>
  );
};
