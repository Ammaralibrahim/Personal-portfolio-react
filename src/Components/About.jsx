import React from "react";
import AboutPicture from "./images/about-pic.png";
import Experience from "./images/experience.png";
import Education from "./images/education.png";

function About() {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
          <img src={AboutPicture} alt="Profile" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
              <img src={Experience} alt="Experience Icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend & Backend Development
                </p>
              </div>
              <div className="details-container">
              <img src={Education} alt="Education Icon" className="icon" />
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelor's Degree
                  <br />
                  M.Sc. Master's Degree
                </p>
              </div>
            </div>
            <div className="text-container">
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
