import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../styles/form.css';
import Form from './Form';

export default function InfoComp() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  return (
    <div className="InfoComp">
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

      <p style={{ fontSize: '40px', lineHeight: '40px' }}>
        For more information about the electrical services we provide, please
        get in touch now by giving us a call on{' '}
        <a style={{ color: 'orange' }} href="tel:07590360176">
          07590360176
        </a>{' '}
        or by clicking{' '}
        <button
          type="button"
          onClick={handleClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'orange',
            textDecoration: 'underline',
            fontWeight: '300',
            padding: '0',
            margin: '0'
          }}
        >
          HERE
        </button>{' '}
        to view our contact page where you can send us an enquiry online.
      </p>
    </div>
  );
}
