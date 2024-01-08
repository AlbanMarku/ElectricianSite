import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="main-contact">
        <p>
          Mob: <a href="tel:07590360176">07590360176</a>
        </p>
        <p id="email">
          Email:
          <a href="mailto:vecchiovincenzo123@gmail.com">
            vecchiovincenzo123@gmail.com
          </a>
        </p>
      </div>
      <div className="links">
        <ul>
          <Link className="sub-link" to="/">
            Home
          </Link>
          <Link className="sub-link" to="/services">
            Services
          </Link>
          <Link className="sub-link" to="/gallery">
            Gallery
          </Link>
          <Link className="sub-link" to="/testimonials">
            Testimonials
          </Link>
          <Link className="sub-link" to="/contact">
            Contact
          </Link>
        </ul>
      </div>
      <div className="business-address">
        <p>
          <b>Business Address:</b>
        </p>
        <p>Mitchim Eastfields</p>
        <p>London</p>
      </div>
      <div className="socials">
        <a href="#facebooklink" target="_blank">
          <i>
            <FaFacebook color="orange" size="40" />
          </i>
        </a>
        <a href="#twitterlink" target="_blank">
          <i>
            <FaTwitter color="orange" size="40" />
          </i>
        </a>
        <a href="#instagramlink" target="_blank">
          <i>
            <FaInstagram color="orange" size="40" />
          </i>
        </a>
      </div>
    </footer>
  );
}
