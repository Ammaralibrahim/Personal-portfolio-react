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
                  href="https://api.whatsapp.com/send?phone=+905383654262&text=Can I have more information about your products? Ürünleriniz hakkında daha fazla bilgi sahibi olabilirmiyim? هل يمكنني معرفة المزيد عن منتجاتكم؟"
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
