import React from "react";
import Email from "./images/email.png";
import Linkedin from "./images/linkedin.png";

function Contact() {
  return (
    <>
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src={Email}
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p>
            <a href="mailto:ammaryasir8088@gmail.com">ammaryasir8088@gmail.com</a>
            </p>
          </div>
          <div class="contact-info-container">
            <img src={Linkedin} alt="LinkedIn icon" class="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/yasser-alibrahim">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
