import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import '../styles/chooseUs.css';

export default function ChooseUs() {
  return (
    <div className="ChooseUs">
      <Container style={{ maxWidth: '1500px' }}>
        <div className="choose-us-info">
          <div className="why-choose">
            <h1>Why Choose Us?</h1>
            <p>
              The One Electrician Ltd have been providing the people of London
              with a wide range of customer focused electrical services for many
              years!
            </p>
            <p>
              The One Electrician Ltd have many satisfied and returning
              customers because we provide the best and most comprehensive
              electrical services in and around London, with a friendly service
              from start to completion, and a time served and highly skilled
              team, you can rest assured that you are getting both excellent
              value for money and a personal service at each and every job we
              attend.
            </p>
            <Button id="choose-btn">View Services</Button>
          </div>
          <div className="what-choose">
            <h1>What We Do</h1>
            <ul>
              <li>EICR Safety Checks</li>
              <li>Full re-wireing</li>
              <li>Part re-wireing</li>
              <li>Periodic Inspection and Testing</li>
              <li>New Installations/Partial Installations</li>
              <li>PAT Testing</li>
              <li>Fault Finding</li>
              <li>Cooker Installations</li>
              <li>and more...</li>
            </ul>
          </div>
        </div>
        <div className="choose-us-img" />
      </Container>
    </div>
  );
}
