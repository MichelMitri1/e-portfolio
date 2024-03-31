import React from "react";
import "../components/Navbar.css";
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import king from "../assets/MichelMitri1-removebg-preview.png";



function Navbar() {
  let contrastToggle = false;
  let isModalOpen = false;


    function toggleContrast() {
        contrastToggle = !contrastToggle;
        if (contrastToggle) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
      }
      
  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }

  return (
    <>
      <nav>
        <figure>
          <img id="personal-logo" src={king} alt="" />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link" onClick={() => toggleModal()}>
            <a
              href="#"
              className="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black"
            >
              About
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          "
            >
              Projects
            </a>
          </li>
          <li className="nav__link" onClick={() => toggleModal()}>
            <a
              href="#"
              className="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          "
            >
              Contact
            </a>
          </li>
          <li className="nav__link click" onClick={() => toggleContrast()}>
            <a
              href="#"
              className="
            nav__link--anchor
            link__hover-effect
            link__hover-effect--black
          "
            >
              <Brightness2OutlinedIcon />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
