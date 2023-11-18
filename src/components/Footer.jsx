import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="services.html">Our Services</a>
          </li>
          <li>
            <a href="gallery.html">Gallery</a>
          </li>
          <li>
            <a href="testimonials.html">Testimonials</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="business-address">
        <p>
          <b>Business Address:</b>
        </p>
        <p>2 Mellison Road</p>

        <p>London</p>
        <p>SW17 9AY</p>
      </div>
      <div className="socials">
        <a href="#facebooklink" target="_blank">
          <i>
            <FaFacebook />
          </i>
        </a>
        <a href="#twitterlink" target="_blank">
          <li>
            <FaTwitter />
          </li>
        </a>
        <a href="#instagramlink" target="_blank">
          <i>
            <FaInstagram />
          </i>
        </a>
      </div>
    </footer>
  );
}
