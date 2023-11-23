import Container from 'react-bootstrap/Container';

import welcome from '../assets/images/welcome.jpg';
import '../styles/welcomeComp.css';

export default function WelcomeComp({ content, title }) {
  return (
    <Container style={{ maxWidth: '1500px' }}>
      <div className="welcome-content">
        <div className="info-area">
          <h1>{title}</h1>
          {content.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="info-area-text" key={index}>
              {item.type === 'paragraph' && (
                <p>
                  {item.formattedText ? (
                    <strong>{item.text}</strong>
                  ) : (
                    item.text
                  )}
                </p>
              )}
              {item.type === 'list' && (
                <ul>
                  {item.items.map((listItem, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="display-area">
          <div className="display-area-text">
            <p>
              With over 10 years experience in the electrical industry you can
              rest assured that you are in good hands with our services. We are
              also accredited with Napit, Part P, and Trust Mark.
            </p>
          </div>
          <div className="display-area-img">
            <img src={welcome} alt="welcome" />
          </div>
        </div>
      </div>
    </Container>
  );
}
