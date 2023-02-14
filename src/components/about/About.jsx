import React from "react";
import "./about.css";
import ME from "../../assets/mee.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years Work</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4 Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            perferendis aliquid eos hic aperiam nostrum veritatis, distinctio
            tempore cumque. Maiores optio accusamus explicabo? Ex totam ratione
            nesciunt pariatur, dolorum odio.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Connect!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
