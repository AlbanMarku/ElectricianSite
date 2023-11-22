import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// eslint-disable-next-line import/no-unresolved
import 'yet-another-react-lightbox/styles.css';

import img2 from '../assets/images/review.jpg';
import img1 from '../assets/images/service.jpg';
import img3 from '../assets/images/service.jpg';
import img4 from '../assets/images/service.jpg';
import img5 from '../assets/images/service.jpg';
import '../styles/galleryComp.css';

const photos = [
  { src: img1, width: 1732, height: 2000 },
  { src: img2, width: 2465, height: 1500 },
  { src: img3, width: 2465, height: 1500 },
  { src: img4, width: 2465, height: 1500 },
  { src: img5, width: 2465, height: 1500 },
  { src: img5, width: 2465, height: 1500 },
  { src: img5, width: 2465, height: 1500 },
  { src: img5, width: 2465, height: 1500 },
  { src: img5, width: 2465, height: 1500 },
  { src: img5, width: 2465, height: 1500 },
  { src: img5, width: 2465, height: 1500 }
];

export default function GalleryComp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="GalleryComp">
      <Container style={{ maxWidth: '1500px' }}>
        <h1>Some content</h1>
        <button type="button" onClick={() => setOpen(!open)}>
          open me
        </button>

        <div style={{ padding: '0 100px 100px 100px' }}>
          <PhotoAlbum layout="rows" photos={photos} />
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: img1 },
            { src: img2 },
            { src: img3 },
            { src: img4 },
            { src: img5 }
          ]}
        />
      </Container>
    </div>
  );
}
