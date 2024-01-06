import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import '../styles/navComp.css';
import Form from './Form';

export default function NavComp() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  return (
    <div className="bar-wrapper">
      <Modal show={show} onHide={handleClick} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Get a Quotation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                  <Link className="sub-link" to="/gallery">
                    Gallery
                  </Link>
                  <Link className="sub-link" to="/testimonials">
                    Testimonials
                  </Link>
                  <Link className="sub-link" to="/handyman">
                    Handyman
                  </Link>
                  <Link className="sub-link" to="/contact">
                    Contact
                  </Link>
                </Nav>
                <Button onClick={handleClick} id="quote-btn">
                  GET A QUOTE!
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}
