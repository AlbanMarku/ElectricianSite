import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import Container from 'react-bootstrap/Container';

import '../styles/contact.css';

export default function ContactComp() {
  const center = {
    lat: 51.41929741737679,
    lng: -0.15565799999999996
  };
  return (
    <div className="ContactComp">
      <Container style={{ maxWidth: '1500px' }}>
        <h1>Contact Us</h1>
        <div className="contact-area">
          <div className="contact-details">
            <h2>07590360176</h2>
            <h2>vecchiovincenzo123@gmail.com</h2>
          </div>
          <div className="map-area">
            <LoadScript googleMapsApiKey="AIzaSyAygloPwikyFUCSEQr3MBCasYMiOYzLr54">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={center}
                zoom={12}
              >
                <MarkerF position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </Container>
    </div>
  );
}
