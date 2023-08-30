import React from "react";
import product1 from "../Components/images/product-1.jpeg";
import product2 from "../Components/images/product-2.jpeg";
import product3 from "../Components/images/product-3.jpeg";
import product4 from "../Components/images/product-4.jpeg";
import product5 from "../Components/images/product-5.jpeg";
import product6 from "../Components/images/product-6.jpeg";

function Cards() {
  return (
    <>
      <h1 class="title">Products</h1>

      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={product1} alt="" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Product Name</h2>
                <p className="card_text">الطقم الدبلماسي الفاخر</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={product2} alt="product2" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Product Name</h2>
                <p className="card_text">الفراشة دات الألوان الزاهية</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={product3} alt="product3" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Product Name</h2>
                <p className="card_text">زجاجة العباءة الوان رجالية</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={product4} alt="product4" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Products Name</h2>
                <p className="card_text">الزجاجة الكرستالية الفاخرة100 مل</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={product5} alt="product5" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Product Name</h2>
                <p className="card_text">زجاجة العباءة الالوان النسائية</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={product6} alt="product6" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Product Name</h2>
                <p className="card_text">الزجاجة الدبلماسية الوان مت 80 مل</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cards;
