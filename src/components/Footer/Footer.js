import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.css";

// const styles = {
//   textDecoration: "none",
//   paddingLeft: "0.5em",
//   color: "#fac87b",
// };

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <footer className="footer footer-dark">
        <div className="footer-addr">
          <h1 className="footer-logo">ITESA</h1>
          <a
            href="https://www.google.com/maps/place/D.Y.+Patil+College+of+Engineering/@18.6448433,73.7559978,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2b9f1ca8dab03:0x6237cfbd36f9acf9!8m2!3d18.6448433!4d73.7581865"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-map-marker-alt"></i> D Y Patil College Of
            Engineering, Akurdi, Pune
            <br />
          </a>
          <div className="info">
            ITESA is a community of students from D.Y Patil College of
            Engineering, Akurdi – Information Technology Department with diverse
            fields including but not limited to Technical, Cultural, Management,
            etc.
          </div>
        </div>
        <ul className="footer-nav">
          <li className="item">
            <h2 className="title">Navigation</h2>

            <ul className="ul-links" onClick={scrollTop}>
              <li>
                <Link to="/technical-team">Technical Team</Link>
              </li>
              <li>
                <Link to="/management-team">Management Team</Link>
              </li>

              <li>
                <Link to="/cultural-team">Cultural Team</Link>
              </li>

              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </li>

          <li className="item">
            <h2 className="title">Other</h2>

            <ul className="ul-links" onClick={scrollTop}>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/past-teams">Past Teams</Link>
              </li>
              {/* <li>
                <Link to="/faqs">FAQ</Link>
              </li> */}
            </ul>
          </li>
          <li className="social-box" style={{ width: "100%" }}>
            <h2 className="title">Social</h2>
            <ul className="ul-links">
              <p style={{ fontSize: "0.9rem" }}>
                Do follow us on social platforms
              </p>
            </ul>
            <div className="col col">
              <ul className="social">
                <li>
                  <a
                    href="https://www.linkedin.com/company/itesa-dyp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <FaLinkedinIn
                        className="fab fa-linkedin"
                        style={{ fontSize: "2.2em", marginTop: "-3px" }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:itesa.dyp@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <HiOutlineMail
                        className="fas fa-envelope"
                        style={{ fontSize: "2.2em" }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ITESA-DYPCOE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <FaGithubAlt
                        className="fab fa-github"
                        style={{ fontSize: "2.2em" }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/itesa.dyp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <FaInstagram
                        className="fab fa-instagram"
                        style={{ fontSize: "2.2em" }}
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/WyTupBNX76"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="outer">
                      <FaDiscord
                        className="fab fa-discord"
                        style={{ fontSize: "2.2em" }}
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="footer-dash footer-dash-dark">
          <div className="footer-text footer-text-dark">
            <p>Copyright © ITESA DYPCOE 2021</p>
          </div>
        </div>
      </footer>
      <a
        href="https://www.linkedin.com/in/shubham-jadhav-77a588192"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="creator-text creator-text-dark">
          <h5 className="creator">Developed with ❤️ by Shubham Jadhav</h5>
        </div>
      </a>
    </React.Fragment>
  );
};

export default Footer;
