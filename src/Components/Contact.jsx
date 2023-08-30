import React from "react";
import email from "../Components/images/email.png"
function Contact() {
  return (
    <>
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Us</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src={email}
              class="icon contact-icon email-icon"
              alt="email"
            />
            <p>
            <a href="mailto:montasar.alharyry@gmail.com">montasar.alharyry@gmail.com</a>
            </p>
          </div>
        
        </div>
      </section>
    </>
  );
}

export default Contact;
