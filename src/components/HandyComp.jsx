import Container from 'react-bootstrap/Container';

import '../styles/handy.css';

export default function HandyComp() {
  return (
    <div className="HandyComp">
      <div className="handy-img" />

      <Container className="handy-wrap" style={{ maxWidth: '1500px' }}>
        <div className="handy-info">
          <h1>Handyman Services</h1>
          <p>
            The One Electrician Ltd now offers handyman services! Ranging from
            quick fixes and construction to painting your home, you will find
            what you need right here.
          </p>
          <ul>
            <li>Painter</li>
            <li>Repair wall, ceiling and ect..</li>
            <li>Room painting</li>
            <li>Door Painter</li>
            <li>Tails</li>
            <li>Carpet</li>
            <li>Lock-smith: change and repairs</li>
            <li>Indoor cleaning</li>
            <li>Grass cutting and garden services</li>
            <li>Clean patio with water-pressure hose</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
