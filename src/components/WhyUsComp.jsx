import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import Form from './Form';

export default function WhyUsComp() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <div>
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
      <h1>Why Choose Us?</h1>
      <p>
        The One Electrician Ltd have been providing the people of London with a
        wide range of customer focused electrical services for many years!
      </p>
      <p>
        The One Electrician Ltd have many satisfied and returning customers
        because we provide the best and most comprehensive electrical services
        in and around London, with a friendly service from start to completion,
        and a time served and highly skilled team, you can rest assured that you
        are getting both excellent value for money and a personal service at
        each and every job we attend.
      </p>
      <Button id="choose-btn" style={{ marginRight: '20px' }}>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
          to="/services"
        >
          View Services
        </Link>
      </Button>
      <Button
        style={{ backgroundColor: 'orange', color: 'black' }}
        onClick={handleClick}
        id="choose-btn"
      >
        GET A QUOTE!
      </Button>
    </div>
  );
}
