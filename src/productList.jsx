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
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <main>
        <header>
          <ul className="indicator">
            <li
              data-filter="الكل"
              className={selectedCategory === "الكل" ? "active" : ""}
            >
              <p>الكل</p>
            </li>
            <li
              data-filter="النسائي"
              className={selectedCategory === "النسائي" ? "active" : ""}
            >
              <p>النسائي</p>
            </li>
            <li
              data-filter="الرجالي"
              className={selectedCategory === "الرجالي" ? "active" : ""}
            >
              <p>الرجالي</p>
            </li>
            <li
              data-filter="الهدايا"
              className={selectedCategory === "الهدايا" ? "active" : ""}
            >
              <p>الهدايا</p>
            </li>
          </ul>
        </header>
        <div className="product-field">
         <div className="filter-input-div">
           <input
            type="text"
            className="filter-input"
            placeholder="البحث حسب الأسم"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
         </div>
          <ul className="items">
            {products
              .filter((product) =>
                selectedCategory === "الكل"
                  ? true
                  : product.category === selectedCategory
              )
              .filter(
                (product) =>
                  searchValue === "" || product.title.includes(searchValue) // Değer boşsa veya başlığı içeriyorsa göster
              )
              .map((product, index) => (
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
                    ...categoryStyles[product.category],
                  }}
                >
                  <div className="detail">
                    <img
                      src={productsImage}
                      className="products-image"
                      alt="productsImage"
                    />
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
