import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="about-box">
        <h2>About US</h2>
      </div>
      <div className="about-container">
        <div className="about-row-one">
          <h1>
            <span>R</span>itu <span>M</span>akeover
          </h1>
          <h1>
            <span>P</span>rofessional <span>M</span>akeup <span>A</span>rtist
            <span>C</span>ertified <span>B</span>y <span>L</span>akme{" "}
            <span>A</span>cademy.
          </h1>

          <p>
            Hi i am{" "}
            <b style={{ color: "#00b8ff", fontSize: "20px" }}>
              {" "}
              Ritu Professional Makeup Artist
            </b>
            . <br />
            Highly Dedicated And Skilled Makeup Artist With An Exceptional
            Record Of Customer Service And Client Satisfaction. Adept At
            Perceiving Individual Clients’ Unique Skin Tone And Corresponding
            Makeup Needs And Recommending Products Accordingly. Abel To Work
            Well Independently Or As Part Of A Cosmetology Professional Team.{" "}
            <br />i Have a 4 Years Experience in Beauty Industry
          </p>
        </div>

        <div className="about-row-two">
          <img
            src="../images/about-bg.jpg"
            alt="logo"
            className="controller-about"
          />
          {/* <img src="../images/about-img-two.jpg" alt="logo"/>  */}
        </div>
      </div>

      <div className="social-container">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              {" "}
              <FaFacebookF />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              {" "}
              <FaInstagram />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              {" "}
              <FaLinkedinIn />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              {" "}
              <FaTwitter />{" "}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
