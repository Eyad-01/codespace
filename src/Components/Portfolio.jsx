/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Classfit",
    description:
      "Led development on Venture Appital's flagship application, identifying and reducing web latency by 40% through API and database optimization, boosting revenue by 20%. Spearheaded a React.js transition, advanced frontend and backend features, and integrated Stripo for custom email creation, reducing email creation time by 30%. Achieved a 98% deployment success rate through Docker and AWS pipelines.",
    url: "https://app.classfit.com/",
  },
  {
    title: "Resume.AI",
    description:
      "Graduation project focusing on resume analysis and interview preparation, boosting resume success by 25% and improving interview skills.",
    url: "https://github.com/Eyad-01/Resume.AI",
  },
  {
    title: "My Coursat",
    description:
      "Developed an online course platform with AWS and Twilio integrations, enhancing customer engagement by 50%.",
    url: "https://www.my-coursat.com",
  },
  {
    title: "Tindog",
    description:
      "Built a user-friendly website for easy registration and login, leading to a 30% increase in engagement with a React-based UI.",
    url: "https://tindog14.herokuapp.com",
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
