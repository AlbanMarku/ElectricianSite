import Container from 'react-bootstrap/Container';

import '../styles/servicesComp.css';

export default function ServicesComp() {
  return (
    <div className="ServicesComp">
      <Container className="serv-wrap" style={{ maxWidth: '1500px' }}>
        <div className="service-img" />

        <div className="service-info">
          <h1>Our Services</h1>
          <p>
            Here at The One Electrician Ltd, we provide a complete range of high
            quality, professional electrical services in London and the
            surrounding areas, covering all aspects of electrical including the
            following:
          </p>
          <ul>
            <li>EICR Safety Checks</li>
            <li>Full re-wiring</li>
            <li>Part re-wiring</li>
            <li>Periodic Inspection and Testing</li>
            <li>New Installations/Partial Installations</li>
            <li>Fuseboards</li>
            <li>PAT Testing</li>
            <li>Fault Finding</li>
            <li>Smoke Alarms</li>
            <li>Earth Bonding</li>
            <li>Cooker Installation</li>
            <li>Electric Shower</li>
            <li>Bathroom Radiators</li>
            <li>Commercial and Domestic Jobs</li>
          </ul>
          <p>
            So if you&apos;re looking for a electrical company in London with
            many years experience in the electrical trade then look no further
            than The One Electrician Ltd. Whether it&apos;s a query or a quote,
            pick up the phone and call 07590360176 today or visit our contact
            page or send us an email.
          </p>
        </div>
      </Container>
    </div>
  );
}
