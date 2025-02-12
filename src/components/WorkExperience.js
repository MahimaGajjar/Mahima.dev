import React from "react";
import "./workexperience.css";
export const WorkExperience = () => {
  return (
     <div className="background">
      <div className="container">
        <div className="col col1">
          <div className="image">
            <img src="/images/Signdesklogo.png" alt="work" />
          </div>
          <div className="workDescription1">
            <h3>Associate Software Engineer</h3>
            <p>
              <strong>DeskNine Pvt Ltd</strong> · October 2022 - April 2024
            </p>
            <ul>
              <li>
                Worked with senior developers to build a robust web application,
                achieving a 99.9% uptime and doubling the user base within six
                months, significantly enhancing customer satisfaction.
              </li>
              <li>
                Engineered a scalable web application using Angular and React,
                improving load time by 40% and user engagement by 25% over six
                months.
              </li>
              <li>
                Utilized AWS and Azure for uploading files to the S3 bucket.
              </li>
              <li>
                Teamed up with cross-functional groups to collect requirements,
                structure the system's architecture, and propose creative
                solutions.
              </li>
            </ul>
          </div>
        </div>

        <div className="titles">
          <a href="/" className="titleContent">
            <article>
              <h1>Work Experience</h1>
            </article>
          </a>
        </div>

        <div className="col col2">
          <div className="image">
            <img src="/images/Signdesklogo.png" alt="work" />
          </div>
          <div className="workDescription1">
            <h3>Freelance Frontend Developer</h3>
            <p>August 2024 - October 2024</p>
            <ul>
              <li>
                Developed websites with animations and interactive features to
                engage users. Incorporated dynamic elements like smooth
                transitions and visual storytelling.
              </li>
              <li>
                Designed for seamless navigation and easy information access.
              </li>
              <li>
                Ensured responsive design for optimal appearance on all devices.
                Focus on detail and innovation creates a memorable online
                presence{" "}
              </li>
              <li>
                Developed websites using Next.js, incorporating features like
                lazy loading for images and gaining familiarity with WebSockets.
              </li>
            </ul>
          </div>
        </div>
      </div>
     </div>
  );
};

export default WorkExperience;
