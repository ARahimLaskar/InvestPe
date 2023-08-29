import React from "react";
import styles from "./ContactCard.module.css";
export const ContactCard = ({ heading, text, logo }) => {
  return (
    <div className={styles.cards}>
      <p>{heading}</p>
      <p>{text}</p>
      <img src={logo} />
    </div>
  );
};
