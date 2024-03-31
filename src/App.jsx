import "./App.css";
import "../src/App.css";
import EmailIcon from "@mui/icons-material/Email";
import circle from "../src/assets/circle.svg";
import squiggly from "../src/assets/squiggly.svg";
import triangle from "../src/assets/triangle.svg";
import semiCircle from "../src/assets/semi circle.svg";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const form = useRef();
  let isModalOpen = false;
  const scaleFactor = 1 / 20;

  function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px) rotate(${x * boolInt * 10}deg)`;
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
      <div className="App">
        <section
          id="landing-page"
          onMouseMove={(event) => moveBackground(event)}
        >
          <Navbar />
          <Header />
          <a href="#">
            <button className="mail__btn click" onClick={() => toggleModal()}>
              <EmailIcon fontSize="large" />
            </button>
          </a>
          <a href="#projects" className="scroll">
            <div className="scroll__icon click"></div>
          </a>
          <Modal toggleModal={toggleModal}/>
          <img src={triangle} className="shape shape--0" />
          <img src={circle} className="shape shape--1" />
          <img src={squiggly} className="shape shape--2" />
          <img src={semiCircle} className="shape shape--3" />
          <img src={triangle} className="shape shape--4" />
          <img src={circle} className="shape shape--5" />
          <img src={squiggly} className="shape shape--6" />
          <img src={circle} className="shape shape--7" />
          <img src={semiCircle} className="shape shape--8" />
        </section>
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
