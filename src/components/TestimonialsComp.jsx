import Container from 'react-bootstrap/Container';
import { v4 as uuidv4 } from 'uuid';

import reviewData from '../reviews.json';
import ReviewBox from './ReviewBox';

export default function TestimonialsComp() {
  return (
    <div className="TestimonialsComp">
      <Container style={{ maxWidth: '1500px' }}>
        <h1>Testimonials</h1>
        <main>
          {reviewData.map((item, index) => (
            <ReviewBox
              location={item.location}
              review={item.review}
              key={uuidv4()}
            />
          ))}
        </main>
      </Container>
    </div>
  );
}
