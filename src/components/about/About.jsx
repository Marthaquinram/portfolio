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
      <h2 className="headers">About Me</h2>
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
              <small>Just getting started</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0 Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed Projects more to come!</small>
            </article>
          </div>

          <p>
            As a highly skilled software developer with expertise in JavaScript
            and a background in finance and customer service, I bring a unique
            blend of technical and interpersonal skills to the table. I have a
            proven track record of success in training and assisting personal
            bankers, and I am eager to continue developing my skills and making
            a positive impact in the tech industry. As a Latina, I am
            particularly passionate about promoting diversity and inclusion in
            the workplace, and I believe that my experiences and perspective can
            contribute valuable insights and perspectives to any team. With
            technology constantly evolving, I am excited to be a part of the
            growth and to make a meaningful contribution to the field.
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
