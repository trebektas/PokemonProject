import "./Footer.css";
import facebook from "../assets/facebookLogo.svg";
import youtube from "../assets/youtubeLogo.svg";
import twitter from "../assets/twitterLogo.svg";
import instagram from "../assets/instagramLogo.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="paragraph-container">
        <p>Copyright © 2023 ebektas.</p>
        <p>All Rights Reserved</p>
      </div>
      <div className="footer-logos">
        <ul className="logos-list">
          <li>
            <a href="https://www.facebook.com/PokemonUKGB">
              <img src={facebook} alt="Facebook"></img>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/Pokemon">
              <img src={youtube} alt="Youtube"></img>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/PokemonNewsUK">
              <img src={twitter} alt="Twitter"></img>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/PokemonNewsUK">
              <img src={instagram} alt="Instagram"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
