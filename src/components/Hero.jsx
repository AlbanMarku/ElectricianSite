import Container from 'react-bootstrap/Container';

import '../styles/hero.css';

export default function Hero({ content, size }) {
  return (
    <div className="hero-wrapper">
      <Container style={{ maxWidth: '1500px' }}>
        <div className="wrapper">
          <header className={size}>
            <h1>{content}</h1>
          </header>
        </div>
      </Container>
    </div>
  );
}
