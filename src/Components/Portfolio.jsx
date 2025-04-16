import React from "react";
import image from "../images/drop.jpg";

const imageAltText = "Here, background image of the drop is shown.";
const projectList = [
  {
    title: "My blog website",
    description:
      "This is my personal blog website where I write about my experience and learning",
    url: "https://github.com/amiable-anand/Spotify-Clone.git",
  },
  {
    title: "My LinkedIn Page",
    description:
      "Here is my LinkedIn page where I share my experience and connect with other professionals.",
    url: "https://www.linkedin.com/in/amiable-anand/",
  },
  {
    title: "My Instagram Page",
    description:
      "Here is my Instagram page where I connect with people across the globe",
    url: "https://www.instagram.com/amiable_anand/",
  },
  {
    title: "My X Account",
    description:
      "This is my X account where I share thoughts and ideas with the world.",
    url: "https://twitter.com/Amiable_Anand/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
