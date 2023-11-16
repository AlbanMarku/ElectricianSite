/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';

import welcome from '../assets/images/welcome.jpg';
import '../styles/welcome.css';

export default function Welcome() {
  return (
    <div className="welcome-wrapper">
      <div className="outer-container">
        <div className="inner-container">
          <Container style={{ maxWidth: '1500px' }}>
            <div className="welcome-content">
              <div className="info-area">
                <h1>Welcome to The One Electrician Ltd</h1>
                <p id="bolder">
                  <strong>
                    A friendly and reliable team who work hard to maintain our
                    reputation as one of London's most trustworthy electrical
                    companies.
                  </strong>
                </p>
                <p>
                  We are conscientious tradesmen and we take pride in our work.
                  Our aim is to ensure a 100% customer satisfaction. We are a
                  friendly, polite team and we believe in quality of work and we
                  will always aim to deliver the best possible job. We
                  accommodate services for both domestic and commercial clients.
                </p>
                <p>
                  We pride ourselves on offering a hassle free and affordable
                  service where the customer needs always take priority, as do
                  excellent quality workmanship and operating to modern
                  standards. As a company we are confident that we can meet all
                  your requirements on your next electrical project and also
                  exceed your expectations when it comes to quality and
                  affordable electricians in London. All of our team are highly
                  skilled in the electrical trade and have built up a wealth of
                  experience over the last several years, so no job is too
                  demanding for us as we have all been trained to deal with
                  every situation that the electrical trade can offer.
                </p>
                <p>
                  So if you're looking for a electrical company in London with
                  many years experience in the electrical trade then look no
                  further than The One Electrician Ltd. Whether it’s a query or
                  a quote, pick up the phone and call 07590360176 today or visit
                  our contact page or send us an email.
                </p>
              </div>
              <div className="display-area">
                <div className="display-area-text">
                  <p>
                    With over 5 years experience in the electrical industry you
                    can rest assured that you are in good hands with our
                    services. We are also accredited with Napit, Part P, and
                    Trust Mark.
                  </p>
                </div>
                <div className="display-area-img">
                  <img src={welcome} alt="welcome" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
