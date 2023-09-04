import React from "react";
import product1 from "../Components/images/product-1.jpeg";
import product2 from "../Components/images/product-2.jpeg";
import product3 from "../Components/images/product-3.jpeg";
import product4 from "../Components/images/product-4.jpeg";
import product5 from "../Components/images/product-5.jpeg";
import product6 from "../Components/images/product-6.jpeg";
import product7 from "../Components/images/product-7.jpg";
import product8 from "../Components/images/product-8.jpg";
import product9 from "../Components/images/product-9.jpg";
import product10 from "../Components/images/product-10.jpg";

const products = [
  {
    img: product1,
    title: "Product Name",
    text: "الطقم الدبلماسي الفاخر",
  },
  {
    img: product2,
    title: "Product Name",
    text: "الفراشة دات الألوان الزاهية",
  },
  {
    img: product3,
    title: "Product Name",
    text: "زجاجة العباءة الوان رجالية",
  },
  {
    img: product4,
    title: "Products Name",
    text: "الزجاجة الكرستالية الفاخرة100 مل",
  },
  {
    img: product5,
    title: "Product Name",
    text: "زجاجة العباءة الالوان النسائية",
  },
  {
    img: product6,
    title: "Product Name",
    text: "الزجاجة الدبلماسية الوان مت 80 مل",
  },
  {
    img: product7,
    title: "Product Name",
    text: "جرة الوالي الجديدة 40 مل",
  },
  {
    img: product8,
    title: "Product Name",
    text: "طاقية الوان رجالي 50 مل",
  },
  {
    img: product9,
    title: "Product Name",
    text: "الزجاجة المزخرفة العثمانية سعة 80 مل ",
  },
  {
    img: product10,
    title: "Product Name",
    text: "الزجاجة المزخرفة  العثماني سعة 80 ",
  },

];

function Cards() {
  return (
    <>
      <h1 className="title">Products</h1>

      <div className="main">
        <ul className="cards">
          {products.map((product, index) => (
            <li className="cards_item" key={index}>
              <div className="card">
                <div className="card_image">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{product.title}</h2>
                  <p className="card_text">{product.text}</p>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Cards;
