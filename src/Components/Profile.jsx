import React from "react";
import ProfilePicture from "./images/profile-pic.png";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github.png";

function Profile() {
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img src={ProfilePicture} alt="Profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Ammar Alibrahim</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('./assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = './#contact')}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={Linkedin}
                alt="LinkedIn Profile"
                className="icon"
              />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={Github}
                alt="Github Profile"
                className="icon"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
