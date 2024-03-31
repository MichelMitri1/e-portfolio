import React from "react";
import "../components/Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import resume from "../assets/FES RESUME (2).pdf";

function Header() {
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
    <header className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title orange">I'm Michel.</h1>
        <p className="header__para">
          I'm a <b className="orange">Frontend Developer</b> with a strong
          passion for building web applications with great user experiences.
          <br />
          Here's a bit more{" "}
          <b className="orange click" onClick={() => toggleModal()}>
            about me
          </b>
          .
        </p>
        <div className="social__list">
          <a
            href="https://www.linkedin.com/in/michel-mitri-58a09124a/"
            target="_blank"
            className="social__link click"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/MichelMitri1"
            target="_blank"
            className="social__link click"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href={resume}
            rel="noreferrer"
            target="_blank"
            className="social__link click"
          >
            <PictureAsPdfIcon fontSize="large" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
