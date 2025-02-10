import React from "react";
import "./workexperience.css";
export const WorkExperience = () => {
  return (
    <>
      <div className="container">
        <div className="col col1">
          <div className="image">
            <img src="/images/Signdesk.jpeg" alt="work" />
          </div>
        </div>

        <div className="titles">
          <a href="/" className="titleContent">
            <article>
              <h1>Work Experience</h1>
            </article>
          </a>
        </div>

        <div className="col col2"></div>
      </div>
    </>
  );
};

export default WorkExperience;
