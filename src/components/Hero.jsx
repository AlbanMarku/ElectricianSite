import Container from 'react-bootstrap/Container';

import '../styles/hero.css';

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <Container style={{ maxWidth: '1500px' }}>
        <div className="wrapper">
          <div className="Hero">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            inventore consequatur molestias adipisci repudiandae natus dicta cum
            culpa, sed necessitatibus deleniti aspernatur architecto doloremque,
            dolor maxime dolorum consequuntur nesciunt quibusdam.
          </div>
        </div>
      </Container>
    </div>
  );
}
