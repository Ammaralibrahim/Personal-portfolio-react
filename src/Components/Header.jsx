import Logo from "../Components/images/logo.png";
import whatsapp from "../Components/images/whatsapp.png";
import instagram from "../Components/images/instagram.png";
import facebook from "../Components/images/facebook.png";

function Header() {

  return (
    <>
      <nav id="desktop-nav">
        <div class="logo">
          <img src={Logo} alt="Reyhana logo" className="logo" />
        </div>
        
        <div>
          <ul class="nav-links">
            <li>
              <a href="#products">Products</a>
            </li>

            <li>
              <a href="#essences">Essences</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <div id="socials-container">
                <a
                  href="https://api.whatsapp.com/send?phone=+905383654262&text=هل يمكنني معرفة المزيد عن منتجاتكم؟"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatsapp}  className="icon" alt="whatsapp"/>
                </a>
                <a
                  href="https://www.instagram.com/reyhana_538?r=nametag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram}  className="icon" alt="whatsapp" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083401821237"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook}  className="icon" alt="whatsapp" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div class="logo">
          <img src={Logo} alt="Reyhana logo"  className="logo" />
        </div>
      </nav>
    </>
  );
}

export default Header;
