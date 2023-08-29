import React from "react";
import { Nav2 } from "../components/Nav2";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import dropDown2 from "../assets/dropDown2.svg";
import p from "../assets/p.png";
import { FeaturesCard } from "../components/FeaturesCard";
import protectionLogo from "../assets/protectionLogo.png";
import flexibilityLogo from "../assets/flexibilityLogo.svg";
import trackingLogo from "../assets/trackingLogo.svg";
import easinessLogo from "../assets/easinessLogo.svg";
import { FeaturesCardBlack } from "../components/FeaturesCardBlack";
import handLogo from "../assets/handLogo.png";
import solutionInvestpe from "../assets/solutionInvestpe.svg";
import dashboard from "../assets/Dashboard.png";
import star from "../assets/star.svg";
import fd from "../assets/fd.png";
import kotak from "../assets/kotak.png";
import angelOne from "../assets/angelone.png";
import upstox from "../assets/upstox.png";
import amfi from "../assets/amfi.png";
import lendbox from "../assets/lendbox.png";
import liquiloans from "../assets/liquiloans.png";
import siply from "../assets/siply.png";
import jupiter from "../assets/jupiter.png";
import { ContactCard } from "../components/ContactCard";
import rupe from "../assets/rupe.svg";
import { Footer } from "../components/Footer";

export const Product = () => {
  return (
    <>
      <Nav2 />

      <div className={styles.investSection}>
        <div className={styles.investmentStackSection}>
          <div>
            <p className={styles.investment}>
              INVESTMENT STACK<span> for India</span>
            </p>
            <p className={styles.elevate}>
              Elevate Your Investment Strategy with Our
              <span> Comprehensive APIs</span>
            </p>
          </div>
          <div>
            <p className={styles.launch}>
              Launch financial services in a matter of days. Take your pick from
              our flexible APIs, SDKs, or ready-to-use screens.
            </p>
            <Link style={{ textDecoration: "none" }}>
              <p className={styles.seeProducts}>
                See our produls{" "}
                <span>
                  <img className={styles.seeProductsDropDown} src={dropDown2} />
                </span>
              </p>
            </Link>
            <button className={styles.contactUs}>Contact Us</button>
          </div>
        </div>
        <div>
          <div className={styles.boxContainer}>
            <div className={styles.box1}>
              <img src={p} />
              <p>Stocks</p>
            </div>
            <div className={styles.box2}>
              <img src={p} />
              <p>Mutual Fund</p>
            </div>
            <div className={styles.box3}>
              <img src={p} />
              <p>Digital Gold</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.FeaturesContainer}>
        <div className={styles.featureTextSection}>
          <p className={styles.featureHeading}>FEATURES</p>
          <p className={styles.featureHeading1}>
            Launch the most Engaging Invest-Tech Solutions
          </p>
          <p className={styles.featureText}>
            We offer a suite of B2B Invest-tech solutions, that are
            cost-effective way to offer an engaging investment experience to
            your customers, with a faster time to market
          </p>
          <div className={styles.getStartSection}>
            <button className={styles.getStarted}>Get Started</button>
            <Link style={{ textDecoration: "none" }}>
              <p className={styles.featuresLearnMore}>Learn More</p>
            </Link>
          </div>
        </div>
        <div className={styles.featureCardSection}>
          <FeaturesCard
            heading={"Protection"}
            logo={protectionLogo}
            text={"Data protection guarentees"}
          />
          <FeaturesCardBlack
            heading={"Tracking"}
            logo={trackingLogo}
            text={"Track all your users’ financial transactions"}
          />
          <FeaturesCard
            heading={"Flexibility"}
            logo={flexibilityLogo}
            text={"Custom made for your requirements"}
          />
          <FeaturesCard
            heading={"Easiness"}
            logo={easinessLogo}
            text={"Go-to market in less than 7 days"}
          />
        </div>
      </div>
      <div className={styles.connectSection}>
        <div>
          <p>Connect your platform finances now with InvestPe Gateway</p>
          <p>
            We help brokers, wealth managers, fund managers & other businesses /
            startups server their customers better with our suite of modern
            digital investment stack
          </p>
          <button>Try Investpe Now</button>
        </div>
        <div className={styles.handLogoDiv}>
          <img src={handLogo} />
        </div>
      </div>
      {/* solutionSection */}
      <div className={styles.solutionSection}>
        <p className={styles.solution}>SOLUTION</p>
        <p className={styles.solutionText}>
          Stay ahead with our Wealth-tech as a service
        </p>
        <div className={styles.solutionCard}>
          <div className={`${styles.solutionCard1} ${styles.box}`}>
            <img src={solutionInvestpe} />
            <p className={styles.investpeHeading}>INVESTPE</p>
            <p className={styles.investpeText}>
              Why does it make sense to start with us?
            </p>
          </div>
          <div className={`${styles.solutionCard2} ${styles.box} `}>
            <p>
              <span>We value your precious time.</span>
              <br /> <br />
              No regulatory licenses required as we have everything for you to
              get started.
            </p>
            <img src={dashboard} />
          </div>
          <div
            className={`${styles.solutionCard3} ${styles.box} ${styles.spanRows}`}
          >
            <img src={star} />
            <p>FIXED DEPOSITS</p>
            <p>Fully digital FDs for your users</p>
            <p>
              Offer fixed deposits on your app or website, from multiple banks.
              Embed a pre-built SDK and go live in weeks.
            </p>
            <img src={fd} />
          </div>
          <div className={`${styles.solutionCard4} ${styles.box}`}>
            <p className={styles.solutionCard4Heading}>MUTUAL FUNDS</p>
            <p className={styles.solutionCard4Text}>
              Get the complete MF Infra & focus on customer engagement
            </p>
            <div>
              <ul className={styles.iconList}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14558_8220)">
                      <path
                        d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14558_8220">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  SEBI compliant KYC process
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14558_8220)">
                      <path
                        d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14558_8220">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Multi-AMC empanelments
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14558_8220)">
                      <path
                        d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14558_8220">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Transact & Track orders
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14558_8220)">
                      <path
                        d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14558_8220">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Advanced reporting
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.solutionCard4} ${styles.box}`}>
            <p className={styles.solutionCard4Heading}>INDIAN EQUITY</p>
            <p className={styles.solutionCard4Text}>
              One gateway for all top securities
            </p>
            <div>
              <ul className={styles.iconList5}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14558_8220)">
                      <path
                        d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14558_8220">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Enable stocks, ETFs & expert curated stock baskets in your app
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14558_8220)">
                      <path
                        d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14558_8220">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Integrates with all major brokers
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14558_8220)">
                      <path
                        d="M19.25 9.69488V10.4999C19.2489 12.3868 18.6379 14.2227 17.5082 15.734C16.3784 17.2452 14.7904 18.3508 12.9809 18.8858C11.1715 19.4208 9.2376 19.3565 7.46766 18.7026C5.69772 18.0487 4.18657 16.8402 3.15959 15.2573C2.13261 13.6744 1.64482 11.8019 1.76897 9.91916C1.89312 8.03638 2.62256 6.24417 3.8485 4.80982C5.07443 3.37547 6.73119 2.37584 8.57167 1.96001C10.4121 1.54418 12.3377 1.73443 14.0613 2.50238"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.25 3.5L10.5 12.2587L7.875 9.63375"
                        stroke="#1C1E21"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14558_8220">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Offer expert curated & monitored stock basket solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.bar}></hr>
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
      <div className={styles.reachOutSection}>
        <p className={styles.reachOutSectionHeading}>
          How would you like to work with us?
        </p>
        <p className={styles.reachOutSectionText}>
          Tell us more about yourself, and we’ll reach out to you as soon as
          possible.
        </p>
        <div className={styles.inputSection}>
          <div className={styles.inputForm}>
            <label for="email">Work email</label>
            <input type="email" id="email" name="email" />

            <label for="company">Company Name</label>
            <input type="text" id="company" name="company" />

            <label for="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" />
          </div>
          {/* <div>
            <p>Which products are you interested in?</p>
            <div>
              <ContactCard
                heading={"Mutual Funds"}
                text={"E2E infrastructure for mutual fund investing"}
                logo={rupe}
              />
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
