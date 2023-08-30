import React from "react";
import styles from "./DropDown.module.css";
import mutualfunds from "../assets/mutualfunds.svg";
import indianequity from "../assets/indianequity.svg";
import digitalgold from "../assets/mutualfunds.svg";
import fixeddeposits from "../assets/fixeddeposits.svg";
import marketresearch from "../assets/marketresearch.svg";
import historical from "../assets/historical.svg";

export const DropDown = () => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.leftDiv}>
        <p className={styles.dropdownHeading}>INVESTMENTS</p>
        <div className={styles.options}>
          <img src={mutualfunds} />
          <div>
            <p>Mutual Funds</p>
            <p>E2E infrastructure for mutual fund investing</p>
          </div>
        </div>
        <div className={styles.options}>
          <img src={indianequity} />
          <div>
            <p>Indian Equity</p>
            <p>Ready-made stock baskets with major broker integrations</p>
          </div>
        </div>
        <div className={styles.options}>
          <img src={digitalgold} />
          <div>
            <p>Digital Gold</p>
            <p>Allow your users to buy & sell digital gold</p>
          </div>
        </div>
        <div className={styles.options}>
          <img src={fixeddeposits} />
          <div>
            <p>Fixed Deposits</p>
            <p>Book FDs in one-click without opening a bank account</p>
          </div>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <p className={styles.dropdownHeading}>DATA</p>
        <div className={styles.options}>
          <img src={marketresearch} />
          <div>
            <p>Market Research</p>
            <p>Deep-tech stock research & analysis</p>
          </div>
        </div>
        <div className={styles.options}>
          <img src={historical} />
          <div>
            <p>Historical Performance</p>
            <p>
              Multi timeframe historical data for stocks, mutual funds & digital
              gold
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
