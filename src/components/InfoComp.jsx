import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function InfoComp() {
  return (
    <div className="InfoComp">
      <p style={{ fontSize: '40px', lineHeight: '40px' }}>
        For more information about the electrical services we provide, please
        get in touch now by giving us a call on{' '}
        <a style={{ color: 'orange' }} href="tel:07590360176">
          07590360176
        </a>{' '}
        or by clicking the link below to view our contact page where you can
        send us an enquiry online.
      </p>
      {/* <Button id="choose-btn">
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/services">
          edit my link
        </Link>
      </Button> */}
    </div>
  );
}
