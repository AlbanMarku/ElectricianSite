import Container from 'react-bootstrap/Container';

import logo from '../assets/images/logo.png';
import '../styles/banner.css';

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <Container style={{ maxWidth: '1500px' }}>
        <div className="Banner">
          <div className="contact-area">
            <p>Mobile: 07590360176</p>
            <p>Email: vecchiovincenzo123@gmail.com</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
      </Container>
    </div>
  );
}
