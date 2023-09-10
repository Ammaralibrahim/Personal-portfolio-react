import React, { useEffect, useState } from "react";
import "./style.css";
import products from "./Components/productsData";
import productsImage from "./Components/images/products-image.jpeg";

export default function ProductList() {
 

  const [selectedCategory, setSelectedCategory] = useState("الكل");

  useEffect(() => {
    const field = document.querySelector(".items");
    Array.from(field.children);

    function FilterProduct() {
      this.run = function () {
        const indicator = document.querySelector(".indicator").children;
        for (let i = 0; i < indicator.length; i++) {
          indicator[i].onclick = function () {
            for (let x = 0; x < indicator.length; x++) {
              indicator[x].classList.remove("active");
            }
            this.classList.add("active");
            const displayItems = this.getAttribute("data-filter");
            setSelectedCategory(displayItems);
          };
        }
      };
    }

    new FilterProduct().run();
  }, []);

  // Ürün listesi için kategoriye göre arka plan rengi atanacak stil nesnesi
  const categoryStyles = {
    الرجالي: { backgroundColor: "lightblue" },
    النسائي: { backgroundColor: "lightpink" },
    الهدايا: {}, // Diğer kategoriler için stil belirtilmediyse varsayılan olarak boş bırakabilirsiniz.
  };


  return (
    <>
      <main>
        <header>
        <ul className="indicator">
            <li
              data-filter="الكل"
              className={selectedCategory === "الكل" ? "active" : ""}
            >
              <a href="ddd">الكل</a>
            </li>
            <li
              data-filter="النسائي"
              className={selectedCategory === "النسائي" ? "active" : ""}
            >
              <a href="ddd">النسائي</a>
            </li>
            <li
              data-filter="الرجالي"
              className={selectedCategory === "الرجالي" ? "active" : ""}
            >
              <a href="ddd">الرجالي</a>
            </li>
            <li
              data-filter="الهدايا"
              className={selectedCategory === "الهدايا" ? "active" : ""}
            >
              <a href="ddd">الهدايا</a>
            </li>
          </ul>
        </header>
        <div className="product-field">
          <ul className="items">
            {products.map((product, index) => (
              <li
                key={index}
                data-category={product.category}
                data-price={product.price}
                style={{
                  display:
                    selectedCategory === "الكل" ||
                    selectedCategory === product.category
                      ? "block"
                      : "none",
                  ...categoryStyles[product.category], // Kategoriye göre arka plan rengini ekleyin
                }}
              >
                <div className="detail">
                <img src={productsImage} className="products-image" alt="productsImage"/>
                  <strong>{product.title}</strong>
                </div>
                <h4>{product.price}</h4>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}