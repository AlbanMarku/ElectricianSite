import Container from 'react-bootstrap/Container';

import '../styles/servicesComp.css';

export default function ServicesComp() {
  return (
    <div className="ServicesComp">
      <Container style={{ maxWidth: '1500px' }}>
        <div className="service-img" />

        <div className="service-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus laborum aperiam cumque porro cupiditate, culpa
            explicabo nostrum placeat perferendis ad magnam in! Sunt quos
            dignissimos quae, consectetur reprehenderit voluptatum eveniet?
          </p>
        </div>
      </Container>
    </div>
  );
}
