import Container from 'react-bootstrap/Container';

import ReviewBox from './ReviewBox';

export default function TestimonialsComp() {
  return (
    <div className="TestimonialsComp">
      <Container style={{ maxWidth: '1500px' }}>
        <h1>Testimonials</h1>
        <main>
          <ReviewBox
            location="London"
            review=" Luca came to do an EICR and did a great job. There were a few extra bit of work identified as needing doing which his electrician came to do the following week. Work was done quickly and to a great standard. We were pleased. "
          />
          <ReviewBox
            location="Hounslow"
            review=" Really good and reliable , friendly and very professional. Would recommended and will definitely use again. "
          />
          <ReviewBox
            location="London"
            review=" Luca and Mirjan are a great team. They are both very professional. Luca gave a good price for the work, and Mirjan carried it out very efficiently. Would recommend the One! "
          />
        </main>
      </Container>
    </div>
  );
}
