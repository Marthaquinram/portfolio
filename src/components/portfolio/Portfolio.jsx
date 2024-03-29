import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/mentor.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/shoe.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

/// USE CORRECT PHOTOS FOR EACH PROJECTS

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Happy Tails 🐶😺",
    github: "http://github.com//BraveSquad",
    demo: "https://happytails-ten.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Mentor Connect",
    github: "https://github.com/stillSwinging",
    demo: "https://mentor-connect.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Running Shoe Guide",
    github: "https://github.com/derekjdoug/running-shoe-guide",
    demo: "https://derekjdoug.github.io/running-shoe-guide/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Coming Soon",
    github: "",
    demo: "",
  },

  {
    id: 5,
    image: IMG5,
    title: "Coming Soon",
    github: "",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Coming Soon",
    github: "",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
