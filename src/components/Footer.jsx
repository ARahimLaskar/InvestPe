import React from "react";
import logo from "../assets/investpe-logo.png";
import styles from "./Footer.module.css";
import google from "../assets/googleLogo.svg";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/twitter.png";

export const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <img src={logo} />
      <table>
        <thead>
          <tr>
            <td>Contest Us</td>
            <td>Company</td>
            <td>Quick Links</td>
            <td>Download App Now</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8089225625</td>
            <td>About Us</td>
            <td>Home</td>
            <td className={styles.googleLogo}>
              <img src={google} />
            </td>
          </tr>
          <tr>
            <td>contact@chhotastock.com</td>
            <td>Privacy policy</td>
            <td>Gateway</td>
          </tr>
          <tr>
            <td></td>
            <td>Terms and Conditions</td>
            <td>Blog</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.social}>
        <p>Find Us on</p>
        <div>
          <img src={facebook} />
          <img src={youtube} />
          <img src={instagram} />
          <img src={twitter} />
        </div>
      </div>
      <p className={styles.footerText}>
        © 2022 Chhotastock Technologies Private Limited. All rights reserved.
        CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.
        <br />
        <br />
        Chhotastock Technologies builds platforms & investment products to
        invest better in Indian investment asset classes. Investing in
        Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read
        all the related documents before investing. Investors should consider
        all risk factors and consult their financial advisor before investing
        <br />
        <br />
        Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout
        Sector 6, Bengaluru, Karnataka - 560102, India
        <br />
        <br />
        For any query / feedback / clarifications, email at
        contact@chhotastock.com
        <br /> <br />
        All Investment ideas, model portfolios & advisory are built by SEBI
        Registered Investment advisors (RIAs) & Chhotastock only facilitates
        investments in such baskets, portfolios.
      </p>
    </div>
  );
};
