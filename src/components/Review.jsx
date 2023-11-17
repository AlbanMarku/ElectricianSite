import Container from 'react-bootstrap/Container';

import '../styles/review.css';

export default function Review() {
  return (
    <div className="Review">
      <Container>
        <div className="review-img" />
        <div className="review-info">
          <div className="stars">star</div>
          <div className="review-text">
            <p>review here</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
