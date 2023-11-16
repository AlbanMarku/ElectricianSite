import Container from 'react-bootstrap/Container';

import '../styles/welcome.css';

export default function Welcome() {
  return (
    <div className="welcome-wrapper">
      <div className="outer-container">
        <div className="inner-container">
          <Container style={{ maxWidth: '1800px' }}>
            <h1>cont 2</h1>
          </Container>
        </div>
      </div>
    </div>
  );
}
