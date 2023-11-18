import { Rating } from '@mui/material';
import Container from 'react-bootstrap/Container';

import '../styles/review.css';

export default function Review() {
  return (
    <div className="Review">
      <Container>
        <div className="container">
          <div className="review-img" />
          <div className="review-info">
            <div className="stars">
              <Rating readOnly value="5" size="large" />
            </div>
            <div className="review-text">
              <p>
                &quot; Rapid response from Luca. We couldn&apos;t work out why
                the power to kitchen was tripping, we called Luca quite late
                around 5pm after another electrician let us down, and he was
                able to attend same day! Issue was traced and resolved in quick
                order, very happy. &quot;
              </p>
              <p id="customer">Customer from Checkatrade</p>
              <p id="location">London</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
