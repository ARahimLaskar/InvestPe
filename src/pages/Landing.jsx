import React from "react";
import { Nav } from "../components/Nav";
import styles from "./Landing.module.css";
import img from "../assets/statestic_logo.png";
import { MyButton } from "../components/MyButton";
import my from "../assets/my.png";
import bounce from "../assets/bounce.png";
import apple from "../assets/apple.png";
import mintra from "../assets/m.png";
import amazon from "../assets/a.png";
import croma from "../assets/croma.png";
import caratlane from "../assets/caratlane.png";
import easemytrip from "../assets/easemytrip.png";
import pepperfry from "../assets/pepperfry.png";
import bulb from "../assets/bulb.svg";
import ess_img1 from "../assets/essential_img1.png";
import ess_img2 from "../assets/essential_img2.png";
import ess_img3 from "../assets/essential_img3.png";
import { StockCard } from "../components/StockCard";
import valueDealsLogo from "../assets/Value-Deals.svg";
import evRevolutionLogo from "../assets/EV-Revolution.svg";
import hiddenGemsLogo from "../assets/Outperformers.svg";
import hiddenGemsLogo1 from "../assets/hiddenGems.svg";
import kotak from "../assets/kotak.png";
import angelOne from "../assets/angelone.png";
import upstox from "../assets/upstox.png";
import amfi from "../assets/amfi.png";
import lendbox from "../assets/lendbox.png";
import liquiloans from "../assets/liquiloans.png";
import siply from "../assets/siply.png";
import jupiter from "../assets/jupiter.png";
import { ReviewsCardTop } from "./../components/ReviewsCardTop";
import manImg1 from "../assets/manImg.svg";
import { ReviewsCardBottom } from "../components/ReviewsCardBottom";
import { Footer } from "../components/Footer";

export const Landing = () => {
  return (
    <>
      <Nav />
      <div className={styles.landing}>
        <div className={styles.heading}>
          <div className={styles.heading1}>
            <p style={{ textAlign: "left" }}>
              Knowledge Based <br /> Investing & Trading
            </p>
          </div>
          <p className={styles.heading2}>
            Ready-made solutions + Deep Research + Disciplined Investing +
            Advanced Trading tools
          </p>
        </div>
        <div className={styles.statisticImg}>
          <img src={img} />
        </div>
      </div>

      <div className={styles.features}>
        <div>
          <div className={styles.featuresText}>
            <p>FEATURES</p>
            <p>
              SAVE NOW. BUY LATER.
              <br /> SIMPLE & REALISTIC
            </p>
            <p>
              Get what you love and save up over weeks or months to achieve it
              much lower price. Time & Flexibility on your side.
            </p>
          </div>
          <div className={styles.featuresButton}>
            <button>Get the App</button>
            <p>Learn More</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.circle_container}>
            <img src={my} />
            <img src={bounce} />
            <img src={apple} />
            <img src={mintra} />
            <img src={amazon} />
            <img src={croma} />
            <img src={caratlane} />
            <img src={easemytrip} />
            <img src={pepperfry} />
          </div>
        </div>
      </div>

      {/* Essential */}

      <div className={styles.essentials_section}>
        <div className={styles.essentials}>
          <div className={styles.essentialsHeading}>
            <p>
              Essential Features for the Super Trader in You - All in{" "}
              <span>One Platform</span>
            </p>
          </div>
          <div className={styles.essentialsSubHeading}>
            <p>
              Save hours of research by using our readymade screens to find your
              next investment
            </p>
            <div className={styles.bulbContainer}>
              <img className={styles.bulb} src={bulb} />
              <p>
                30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES + STOCK PICKS &
                MUCH MORE
              </p>
            </div>
          </div>
          <div className={styles.essentials_buttons}>
            <button>Get start now</button>
            <p>See all features</p>
          </div>
        </div>
        <div className={styles.ess_imgs}>
          <img src={ess_img3} />
          <img src={ess_img1} />
          <img src={ess_img2} />
        </div>
      </div>

      {/*stock investing section*/}

      <div className={styles.stock_section}>
        <div>
          <p className={styles.stock_section_heading}>
            STOCK INVESTING, SIMPLIFIED
          </p>
          <div className={styles.stock_section_text}>
            <p>
              Online trading and investing in the market does not have to be
              boring.
            </p>
            <p>
              While we adopt a technology-led approach in building our product,
              we are keeping our users-investors and traders even before that
            </p>
          </div>
        </div>
        <div className={styles.cardSection}>
          <StockCard logo={valueDealsLogo} heading={"Value Deals"} />
          <StockCard logo={evRevolutionLogo} heading={"EV Revolution"} />
          <StockCard logo={hiddenGemsLogo} heading={"Hidden Gems"} />
          <StockCard logo={hiddenGemsLogo1} heading={"Hidden Gems"} />
        </div>
        <hr className={styles.bar}></hr>
      </div>

      <div className={styles.partnersSection}>
        <div className={styles.partnersSectionText}>
          <p>Some partners who make InvestPe products possible—</p>
          <p>
            ...and a few of the businesses building some incredible solutions
            with InvestPe
          </p>
        </div>
        <div className={styles.partnersSectionImg}>
          <div className={styles.partnersSectionImg1}>
            <img src={kotak} />
            <img src={angelOne} />
            <img src={upstox} />
            <br />
            <img src={amfi} />
            <img src={lendbox} />
            <img src={liquiloans} />
            <br />
          </div>
          <div className={styles.partnersSectionImg2}>
            <div>
              <img src={siply} />
            </div>
            <div>
              <img src={jupiter} />
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.bar}></hr>

      {/* review section */}

      <div className={styles.revewSection}>
        <div className={styles.revewSectionHeading}>
          <p className={styles.revewSectionHeadingText}>
            Reviews From Early Adopters
          </p>
          <div>
            <p>156k+</p>
            <p>Registered Users</p>
          </div>
          <div>
            <p>$1.5Mn+</p>
            <p>Worth investing done</p>
          </div>
        </div>
        <div className={styles.revewCard}>
          <ReviewsCardTop
            img={manImg1}
            text1={"Mahesh, Swiggy delivery partner, Bengaluru"}
            text2={
              "The onboarding experience on Chhotastock was very simple.. I did my first investment in equity market in less than 2 minutes"
            }
          />
          <ReviewsCardBottom
            img={manImg1}
            text1={"Mahesh, Swiggy delivery partner, Bengaluru"}
            text2={
              "The onboarding experience on Chhotastock was very simple.. I did my first investment in equity market in less than 2 minutes"
            }
          />
          <ReviewsCardTop
            img={manImg1}
            text1={"Mahesh, Swiggy delivery partner, Bengaluru"}
            text2={
              "The onboarding experience on Chhotastock was very simple.. I did my first investment in equity market in less than 2 minutes"
            }
          />
          <ReviewsCardBottom
            img={manImg1}
            text1={"Mahesh, Swiggy delivery partner, Bengaluru"}
            text2={
              "The onboarding experience on Chhotastock was very simple.. I did my first investment in equity market in less than 2 minutes"
            }
          />
          <ReviewsCardTop
            img={manImg1}
            text1={"Mahesh, Swiggy delivery partner, Bengaluru"}
            text2={
              "The onboarding experience on Chhotastock was very simple.. I did my first investment in equity market in less than 2 minutes"
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
