import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Martha
      </a>
      <ul className="premalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/Marthaquinram" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/martha-quintanilla-ramirez/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
