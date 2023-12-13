import { Rating } from '@mui/material';
import { FaLocationDot } from 'react-icons/fa6';

import '../styles/reviewBox.css';

export default function ReviewBox({ location, review }) {
  return (
    <div className="ReviewBox">
      <Rating readOnly value="5" size="large" />
      <p>{`"${review}"`}</p>
      <div className="details">
        <h4>Customer from Google Reviews</h4>
        <div className="details-name">
          <FaLocationDot style={{ marginTop: '-5px' }} />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
