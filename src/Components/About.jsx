import React from "react";
import AboutPicture from "./images/about-pic.png";
import Expreience from "./images/experience.png";
import Education from "./images/education.png";

function About() {
  return (
    <>
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img src={AboutPicture} alt="Profile" class="about-pic" />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img src={Expreience} alt="Experience" class="icon" />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend & Backend Development
                </p>
              </div>
              <div class="details-container">
                <img src={Education} alt="Education" class="icon" />
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelors Degree
                  <br />
                  M.Sc. Masters Degree
                </p>
              </div>
            </div>
            <div class="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quis reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus
                sint delectus velit in eos quo officiis explicabo deleniti
                dignissimos. Eligendi illum libero dolorum cum laboriosam
                corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;