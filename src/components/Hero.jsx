import Container from 'react-bootstrap/Container';

import '../styles/hero.css';

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <Container style={{ maxWidth: '1500px' }}>
        <div className="wrapper">
          <header className="Hero">
            <h1>
              We provide a full range of high quality, reliable domestic and
              commercial electrical services throughout London and the
              surrounding areas
            </h1>
          </header>
        </div>
      </Container>
    </div>
  );
}
