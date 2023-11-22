import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Lightbox from 'yet-another-react-lightbox';
// eslint-disable-next-line import/no-unresolved
import 'yet-another-react-lightbox/styles.css';

import img2 from '../assets/images/review.jpg';
import img1 from '../assets/images/service.jpg';

export default function GalleryComp() {
  const [open, setOpen] = useState(false);
  return (
    <div className="GalleryComp">
      <Container style={{ maxWidth: '1500px' }}>
        <h1>Some content</h1>
        <button type="button" onClick={() => setOpen(!open)}>
          open me
        </button>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: img1 }, { src: img2 }]}
        />
      </Container>
    </div>
  );
}
