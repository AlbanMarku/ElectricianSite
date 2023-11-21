import Container from 'react-bootstrap/Container';

import '../styles/chooseUs.css';

export default function ChooseUs({ WhyUs, List }) {
  return (
    <div className="ChooseUs">
      <Container style={{ maxWidth: '1500px' }}>
        <div className="choose-us-info">
          {WhyUs && <div className="why-choose">{WhyUs}</div>}
          {List && <div className="what-choose">{List}</div>}
        </div>
        <div className="choose-us-img" />
      </Container>
    </div>
  );
}
