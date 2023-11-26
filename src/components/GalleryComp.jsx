import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// eslint-disable-next-line import/no-unresolved
import 'yet-another-react-lightbox/styles.css';

import img1 from '../assets/images/gallery/img1.jpeg';
import img10 from '../assets/images/gallery/img10.jpeg';
import img11 from '../assets/images/gallery/img11.jpeg';
import img12 from '../assets/images/gallery/img12.jpeg';
import img13 from '../assets/images/gallery/img13.jpeg';
import img14 from '../assets/images/gallery/img14.jpeg';
import img15 from '../assets/images/gallery/img15.jpeg';
import img16 from '../assets/images/gallery/img16.jpeg';
import img17 from '../assets/images/gallery/img17.jpeg';
import img18 from '../assets/images/gallery/img18.jpeg';
import img19 from '../assets/images/gallery/img19.jpeg';
import img2 from '../assets/images/gallery/img2.jpeg';
import img20 from '../assets/images/gallery/img20.jpeg';
import img21 from '../assets/images/gallery/img21.jpeg';
import img22 from '../assets/images/gallery/img22.jpeg';
import img23 from '../assets/images/gallery/img23.jpeg';
import img24 from '../assets/images/gallery/img24.jpeg';
import img25 from '../assets/images/gallery/img25.jpeg';
import img26 from '../assets/images/gallery/img26.jpeg';
import img27 from '../assets/images/gallery/img27.jpeg';
import img28 from '../assets/images/gallery/img28.jpeg';
import img29 from '../assets/images/gallery/img29.jpeg';
import img3 from '../assets/images/gallery/img3.jpeg';
import img4 from '../assets/images/gallery/img4.jpeg';
import img5 from '../assets/images/gallery/img5.jpeg';
import img6 from '../assets/images/gallery/img6.jpeg';
import img7 from '../assets/images/gallery/img7.jpeg';
import img8 from '../assets/images/gallery/img8.jpeg';
import img9 from '../assets/images/gallery/img9.jpeg';
import '../styles/galleryComp.css';

export default function GalleryComp() {
  const [index, setIndex] = useState(-1);
  const photos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29
  ];
  return (
    <div className="GalleryComp">
      <Container style={{ maxWidth: '1500px' }}>
        <div style={{ padding: '0 100px 100px 100px' }}>
          <h1>Photo Gallery</h1>

          <PhotoAlbum
            layout="rows"
            photos={photos.map(photo => ({
              src: photo,
              width: 4,
              height: 3
            }))}
            targetRowHeight={150}
            onClick={({ index: current }) => setIndex(current)}
          />
        </div>
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={photos.map(photo => ({ src: photo }))}
          index={index}
        />
      </Container>
    </div>
  );
}
