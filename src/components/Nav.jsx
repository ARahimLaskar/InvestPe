import React from "react";
import logoImg from "../assets/investpe-logo.png";
import styles from "./Nav.module.css";
import { BsSearch } from "react-icons/bs";
import { MyButton } from "./MyButton";
import stripe from "../assets/top-stripe.png";
import "../assets/Gilroy Font/Gilroy-Light.ttf";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = useNavigate();
  function handleLogin() {
    console.log("clicked");
    navigate("/products");
  }
  return (
    <>
      <div className={styles.topStripe}>
        <img src={stripe} alt="" />
      </div>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <img src={logoImg} />
          <p>INVEST TO PAY. INVEST TO SPEND</p>
        </div>
        <div className={styles.searchBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_14590_8930)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.57125 13.7531C4.03312 13.7531 1.16495 10.935 1.16495 7.45313C1.16495 3.97125 4.03312 1.14752 7.57125 1.14752C11.1094 1.14752 13.9781 3.97125 13.9781 7.45313C13.9781 10.935 11.1094 13.7531 7.57125 13.7531ZM17.8245 17.0156L13.1788 12.4425C14.3949 11.1206 15.1425 9.37688 15.1425 7.45313C15.1425 3.33563 11.7529 0 7.57125 0C3.38962 0 0 3.33563 0 7.45313C0 11.565 3.38962 14.9006 7.57125 14.9006C9.378 14.9006 11.0351 14.2763 12.3368 13.2356L17.001 17.8256C17.2288 18.0506 17.5972 18.0506 17.8245 17.8256C18.0523 17.6062 18.0523 17.2406 17.8245 17.0156Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_14590_8930">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input type="text" placeholder="Search stocks, ETFs, indices" />
        </div>
        <div onClick={handleLogin}>
          <MyButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M2.83472 16.9986H22.6681M22.6681 16.9986L17.7097 12.7486M22.6681 16.9986L17.7097 21.2486"
                stroke="#171E27"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7527 9.91668C12.7699 6.83538 12.9065 5.16668 13.9951 4.07814C15.2399 2.83334 17.2434 2.83334 21.2503 2.83334H22.6669C26.6738 2.83334 28.6774 2.83334 29.9221 4.07814C31.1669 5.32294 31.1669 7.3264 31.1669 11.3333V22.6667C31.1669 26.6736 31.1669 28.677 29.9221 29.9218C28.6774 31.1667 26.6738 31.1667 22.6669 31.1667H21.2503C17.2434 31.1667 15.2399 31.1667 13.9951 29.9218C12.9065 28.8333 12.7699 27.1646 12.7527 24.0833"
                stroke="#171E27"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Login
          </MyButton>
        </div>
      </div>
    </>
  );
};
