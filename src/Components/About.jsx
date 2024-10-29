/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = `Accomplished Mid-Senior Software Engineer with expertise in React.js, Node.js, Flask, and Yii. Holding a degree in Computing and Data Science, I
excel in addressing complex technical challenges and delivering sophisticated software solutions. Passionate about emerging technologies and
competitive programming, I create innovative and efficient applications. My strong collaborative skills and strategic approach drive continuous
improvement and excellence in every project.`;

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Applications",
  "Timelines",
  "Big Data",
  "Cloud Computing",
  "Apache Kafka",
  "Software Development",
  "DevOps",
  "Unit Testing",
  "Full-Stack Development",
  "Microservices",
  "Golang",
  "API Development",
  "Debugging",
  "Troubleshooting",
  "Optimize Applications",
  "Maintenance",
  "SDLC",
  "System Administrators",
  "GitFlow",
  "Hadoop",
  "Amazon S3",
  "Docker Products",
  "SQL",
  "MySQL",
  "NoSQL",
  "Amazon Web Services",
  "REST APIs",
  "Git",
  "PHP",
  "Yii",
  "Laravel",
  "Python",
  "Flask",
  "Java",
  "JavaScript",
  "React.js",
  "Node.js",
  "R",
  "HTML",
  "CSS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = `I am passionate about leveraging emerging technologies to create impactful, efficient software. My enthusiasm for competitive programming drives my dedication to solving complex problems and delivering high-performance applications. I enjoy working with AI, cloud computing, and big data to tackle real-world challenges. Collaborating with teams, sharing knowledge, and mentoring are key aspects of my work, as I strive to build user-centric, scalable solutions that exceed expectations.`;

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
