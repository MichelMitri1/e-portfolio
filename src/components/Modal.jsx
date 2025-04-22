import React, { useRef } from "react";
import "../components/Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";
import nextjsLogo from "../assets/nextjs-logo-removebg-preview.png";
import typescriptLogo from "../assets/typescript-2.svg";

function Modal({ toggleModal }) {
  const form = useRef();
  const userName = useRef();
  const userEmail = useRef();
  const userMessage = useRef();

  function contact(event) {
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    event.preventDefault();
    console.log(form.current);
    emailjs
      .send(
        "service_tzw4j2i",
        "template_nprfy0p",
        {
          user_name: userName.current.value,
          message: userMessage.current.value,
          user_email: userEmail.current.value,
        },
        "vsInwKRFZEupCpbAu"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on michelmitri5@gmai.com"
        );
      });
  }

  // function toggleModal() {
  //   if (isModalOpen) {
  //     isModalOpen = false;
  //     document.body.classList.remove("modal--open");
  //     return
  //   }
  //   isModalOpen = true;
  //   document.body.classList += " modal--open";
  // }
    
  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">
          Here's a bit about me.
        </h3>
        <h4 className="modal__sub-title modal__sub-title--about">
          Frontend Developer.
        </h4>
        <p className="modal__para">
          I'm a 19 year-old Lebanese{" "}
          <b className="purple">frontend Developer </b>
          with a strong passion for developing websites with great{" "}
          <b className="purple">user experience</b>.
          <br />I currently solve extremely difficult engineering problems and
          learn from a team consisting of some of the most{" "}
          <b className="purple">talented</b> and{" "}
          <b className="purple">experienced </b>
          software engineers everyday.
        </p>
        <div className="modal__languages">
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              alt=""
            />
            <span className="language__name">HTML</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
              alt=""
            />
            <span className="language__name">CSS</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
              alt=""
            />
            <span className="language__name">JavaScript</span>
          </figure>
          <figure className="modal__language">
            <img className="modal__language--img" src={typescriptLogo} alt="" />
            <span className="language__name">TypeScript</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
              alt=""
            />
            <span className="language__name">React</span>
          </figure>
          <figure className="modal__language">
            <img className="modal__language--img" src={nextjsLogo} alt="" />
            <span className="language__name">NextJS</span>
          </figure>
        </div>
      </div>
      <div className="modal__half modal__contact">
        <CloseIcon
          fontSize="large"
          className=" modal__exit click"
          onClick={() => toggleModal()}
        />
        <h3 className="modal__title modal__title--contact">
          Let's have a chat!
        </h3>
        <h3 className="modal__sub-title modal__sub-title--contact">
          I'm currently open to new opportunities.
        </h3>
        <form
          ref={form}
          id="contact__form"
          onSubmit={(event) => contact(event)}
        >
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input
              className="input"
              name="user_name"
              ref={userName}
              type="text"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input
              className="input"
              name="user_email"
              ref={userEmail}
              type="email"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea
              className="input"
              name="message"
              type="text"
              required
              ref={userMessage}
            ></textarea>
          </div>
          <button id="contact__submit" className="form__submit">
            Send it my way
          </button>
        </form>
        <div className="modal__overlay modal__overlay--loading">
          <div className="fas fa-spinner"></div>
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking to you soon.
        </div>
      </div>
    </div>
  );
}

export default Modal;
