import React from "react";
import "./education.css";

export const Education = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="masters">
          <div class="card">
            <div class="additional">
              <div class="user-card">
                <img src="/images/master.png" alt="" />
                <div class="points center">MSc CSA</div>
              </div>
              <div class="more-info">
                <h1>Christ University</h1>
                <div class="coords">
                  <span>CGPI</span>
                  <span>3/4</span>
                </div>
              </div>
            </div>
            <div class="general">
              <h1>Christ University</h1>
              <p>
                Masters in Computer Science and Applications from Christ
                University Banglore. Completed in 2023
              </p>
              <span class="more">Mouse over the card for more info</span>
            </div>
          </div>
        </div>

        <div className="bechelor">
          <div class="card green">
            <div class="additional">
              <div class="user-card">
                <img src="/images/bechlore.jpg" alt="" />
                <div class="points center">BSc IT</div>
              </div>
              <div class="more-info">
                <h1>Atmiya University</h1>
                <div class="coords">
                  <span>CGPI</span>
                  <span>8.5/10</span>
                </div>
              </div>
            </div>
            <div class="general">
              <h1>Atmiya University</h1>
              <p>
                Bechlores in Information Technology from Atmiya university,
                Rajkot Gujarat. Completed in 2021
              </p>
              <span class="more">Mouse over the card for more info</span>
            </div>
          </div>
        </div>

        <div className="school">
          <div class="card">
            <div class="additional">
              <div class="user-card">
                <img src="/images/school.png" alt="school" />

                <div class="points center">HSC Science</div>
              </div>
              <div class="more-info">
                <h1>School</h1>
                <div class="coords">
                  <span>HSC Science</span>
                  <span>55% </span>
                </div>
                <div class="coords">
                  <span>Primary</span>
                  <span>95% </span>
                </div>
              </div>
            </div>
            <div class="general">
              <h1>School</h1>
              <p>
                I completed my elementary education at Rajkot's Masoom English
                Medium School.  I completed my eleventh and twelth grades at Krishna English Medium School in Rajkot after that.
              </p>
              <span class="more">Mouse over the card for more info</span>
            </div>
          </div>
        </div>

        <div className="home">
          <div className="btn">
            <a className="btn__link" href="/">
              <div className="btn__sq"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
