import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// eslint-disable-next-line import/no-unresolved
import 'yet-another-react-lightbox/styles.css';

import img2 from '../assets/images/review.jpg';
import img1 from '../assets/images/service.jpg';
import '../styles/galleryComp.css';

const photos = [
  { src: img1, width: 1732, height: 2000 },
  { src: img2, width: 2465, height: 1500 }
];

export default function GalleryComp() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="GalleryComp">
      <Container style={{ maxWidth: '1500px' }}>
        <div style={{ padding: '0 100px 100px 100px' }}>
          <h1>Photo Gallery</h1>

          <PhotoAlbum
            layout="rows"
            photos={photos}
            targetRowHeight={150}
            onClick={({ index: current }) => setIndex(current)}
          />
        </div>
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={[{ src: img1 }, { src: img2 }]}
          index={index}
        />
      </Container>
    </div>
  );
}
