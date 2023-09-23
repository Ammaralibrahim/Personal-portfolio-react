import React from "react";
import { Link } from "react-router-dom"; // react-router-dom'dan Link'i içe aktarın
import Logo from "../Components/images/logo.png";
import whatsapp from "../Components/images/whatsapp.png";
import instagram from "../Components/images/instagram.png";
import facebook from "../Components/images/facebook.png";

function Header() {
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Reyhana logo" className="logo" />
          </Link>
        </div>

        <div>
          <ul className="nav-links">
            <li>
              <Link to="/product-list">Products</Link>
            </li>

            <li>
              <Link to="/essences">Essences</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <div id="socials-container">
                <a
                  href="https://api.whatsapp.com/send?phone=+905383654262&text=%D9%87%D9%84%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D9%8A%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%B2%D9%8A%D8%AF%20%D8%B9%D9%86%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%D9%83%D9%85%D8%9F%20%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20daha%20fazla%20bilgi%20sahibi%20olabilir%20miyim%3F%20Can%20I%20have%20more%20information%20about%20your%20products%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatsapp} className="icon" alt="whatsapp" />
                </a>
                <a
                  href="https://www.instagram.com/reyhana_538?r=nametag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} className="icon" alt="instagram" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083401821237"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} className="icon" alt="facebook" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">
          <img src={Logo} alt="Reyhana logo" className="logo" />
        </div>
      </nav>
    </>
  );
}

export default Header;
