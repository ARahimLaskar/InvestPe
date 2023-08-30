import React, { useState } from "react";
import styles from "./Nav2.module.css";
import navStripe2 from "../assets/stripe2.png";
import logo from "../assets/investpe-logo.png";
import dot from "../assets/dot.svg";
import dropDown from "../assets/dropDown.svg";

import { Link } from "react-router-dom";
import { DropDown } from "./DropDown";

export const Nav2 = () => {
  const [menutoggle, setMenuToggle] = useState(true);

  return (
    <>
      <div className={styles.nav2Section}>
        <img src={navStripe2} />
        <div className={styles.nav2}>
          <div className={styles.logoSection}>
            <img src={logo} />
            <div className={styles.gatewayButton}>
              <button type="submit">Gateway</button>
              <img src={dot} alt="" />
            </div>
          </div>
          <div className={styles.navLinks}>
            <Link style={{ textDecoration: "none" }}>
              <div className={styles.navLinkProducts}>
                <p
                  onClick={() => {
                    setMenuToggle(!menutoggle);
                  }}
                  className={styles.navLink}
                >
                  Products
                </p>
                <img src={dropDown} />
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <p className={styles.navLink} id={styles.aboutLink}>
                About Us
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          menutoggle ? `${styles.dropDownContainer}` : `${styles.showDropDown}`
        }
      >
        <DropDown />
      </div>
    </>
  );
};
