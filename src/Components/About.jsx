import React from "react";
import AboutPicture from "./images/about-pic.png";
import Experience from "./images/experience.png";
import Education from "./images/education.png";
import mp3 from './images/my.mp3'
import { useState } from "react";

function About() {

  function play(){
    new Audio(mp3).play()
  }
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
                  Anadolu High School
                  <br />
                  M.Sc. Master's Degree
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
              Hello! I'm <b>AMMAR ALIBRAHIM</b>, and I'm 16 years old. I'm a passionate <b>Full-Stack web developer</b>. My fascination with technology led me into the world of <b>web development</b> at a young age, and I've been continuously honing my skills ever since.

I'm particularly skilled in modern technologies like <b>React</b>, <b>Node.js</b>, and <b>Express.js</b>. On the front-end, I create user-friendly interfaces using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. I often leverage tools like <b>Bootstrap</b> in my projects because I understand the importance of rapid and responsive design.

I'm familiar with <b>NoSQL databases</b> like <b>MongoDB</b> for effective data management and storage. I also use tools like <b>Git</b> and <b>GitHub</b> to keep my code sustainable and collaborative across projects. Additionally, I deploy my projects on platforms like <b>Netlify</b> to establish fast and reliable deployment processes.

I'm always open to learning new technologies and enhancing my current skills. By staying updated, I aim to deliver creative and innovative solutions.

If you're interested in collaborating or working together on projects, please feel free to reach out. I'm excited to make an even bigger impact in the world of technology!
              </p>
            </div>
            
        <hp className="play">Don't want to bother with reading?<span onClick={play}> Listen.</span></hp>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
