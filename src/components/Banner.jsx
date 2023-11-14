import Container from 'react-bootstrap/Container';

import logo from '../assets/images/logo.png';
import '../styles/banner.css';

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <Container>
        <div className="Banner">
          <div className="contact-area">
            <p>Mobile: 07306066306</p>
            <p>Email: albanmarku@duck.com</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
      </Container>
    </div>
  );
}
