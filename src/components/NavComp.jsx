import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import '../styles/navComp.css';

export default function NavComp() {
  return (
    <div className="bar-wrapper">
      <div className="NavComp">
        <Container fluid style={{ maxWidth: '1500px' }}>
          <Navbar expand="lg" className="nav-bar">
            <Container>
              <Navbar.Brand href="#home">The One Electrician</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-links me-auto">
                  <Link className="sub-link" to="/">
                    Home
                  </Link>
                  <Link className="sub-link" to="/services">
                    Our Services
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}
