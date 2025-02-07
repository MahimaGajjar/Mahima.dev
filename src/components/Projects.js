import React from "react";
import "./projects.css";

export const Projects = () => {
  return (
    <div className="container">
      <div className="project1">
        <div class="cards">
          <img src="/images/yuki.jpeg" alt="yuki" class="card-bg" />
          <div class="content">
            <div class="projectName">Yuki</div>
            <div class="text">The Yuki cryptocurrency's website.</div>
          </div>
          <div class="sinopse">
            <div class="content-sinopse">
              <div class="projectName">Yuki: Crypto Coin</div>
              <div class="text">
                This website was created using CSS and NextJs. You may find
                information on the Yuki coin on this page, along with
                instructions on how to buy and use it. It includes sections on
                tokenomics, purchasing, etc.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project2">
        <div class="cards">
          <img src="/images/weather.jpeg" alt="yuki" class="card-bg" />
          <div class="content">
            <div class="projectName">Weather</div>
            <div class="text">
              An application that allows you to know the weather of any city.
            </div>
          </div>
          <div class="sinopse">
            <div class="content-sinopse">
              <div class="projectName">Know the Weather</div>
              <div class="text">
                This application was created using CSS and ReactJs. You may find
                information on the weather of any city on this page.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="title">
        <a href="/" className="titleContent">
          <h1 class="headingText">Projects</h1>
        </a>
      </div>

      <div className="project3">
        <div class="cards">
          <img src="/images/MEAN.jpeg" alt="MEAN" class="card-bg" />
          <div class="content">
            <div class="projectName">Login/Signup</div>
            <div class="text">A login and signup page using MEAN stack.</div>
          </div>
          <div class="sinopse">
            <div class="content-sinopse">
              <div class="projectName">Login/Signup</div>
              <div class="text">
                This page was created using MEAN stack. You may find information
                on the login and signup page on this page.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project4">
        <div class="cards">
          <img src="/images/travelthrough.jpeg" alt="yuki" class="card-bg" />
          <div class="content">
            <div class="projectName">Travel Through</div>
            <div class="text">
              An app to plan you iternary to your desired place.
            </div>
          </div>
          <div class="sinopse">
            <div class="content-sinopse">
              <div class="projectName">Travel Through</div>
              <div class="text">
                Python, bootstrap, and a database like MySQL were used to
                develop this website. You may currently plan your itinerary for
                Bangalore City using this website, where you can add the
                destinations you like to see and it will do the planning for
                you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
