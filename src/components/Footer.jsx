import React from "react";
import "../components/Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import king from "../assets/MichelMitri1-removebg-preview.png";
import resume from "../assets/Resume.pdf";
function Footer() {
  let isModalOpen = false;

  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <a href="#" className="footer__anchor">
            <figure className="footer__logo">
              <img src={king} className="footer__logo--img" alt="" />
            </figure>
            <span className="footer__logo--popper">
              Top
              <ArrowUpwardIcon className="fas fa-arrow-up" />
            </span>
          </a>
          <div className="footer__social--list">
            <a
              href="https://github.com/MichelMitri1"
              className="
          footer__social--link
          link__hover-effect
          link__hover-effect--white
        "
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/michel-mitri-58a09124a/"
              target="_blank"
              className="
          footer__social--link
          link__hover-effect
          link__hover-effect--white
        "
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              onClick={() => toggleModal()}
              className="
          footer__social--link
          link__hover-effect
          link__hover-effect--white"
              rel="noreferrer"
            >
              Contact
            </a>
            <a
              href={resume}
              target="_blank"
              className="
          footer__social--link
          link__hover-effect
          link__hover-effect--white"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2022 Michel Mitri
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
