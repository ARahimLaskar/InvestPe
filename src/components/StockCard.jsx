import React from "react";
import styles from "./StockCard.module.css";
export const StockCard = ({ logo, heading }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <p>{heading}</p>
      </div>

      <p className={styles.cardText}>
        For the people who would love to risk huge to get rewarded. People who
        would love to risk huge to get rewarded
      </p>
      <div className={styles.cagr_amount}>
        <div>
          <p>CARG</p>
          <p>17.80%</p>
        </div>
        <div>
          <p>Min Amount</p>
          <p>120</p>
        </div>
      </div>
    </div>
  );
};
