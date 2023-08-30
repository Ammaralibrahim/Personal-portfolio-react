import React from "react";
import heroBG from "../Components/images/hero-bg.png"


function Profile() {
  return (
    <>
      <section id="profile">
      
        <div className="section__pic-container">
          <img src={heroBG}  alt="herobg"/>
        </div>
        <div className="section__text">
          <p className="section__text__p1">Welcome</p>
          <h1 className="title"><span>Reyhana</span> Perfumes</h1>
          <p className="section__text__p2">A Unique Perfume Experience</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
            >
              Product List
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = './#contact')}
            >
              Contact Info
            </button>
          </div>
         
        </div>
      </section>
    </>
  );
}

export default Profile;
