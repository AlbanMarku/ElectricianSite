import { Rating } from '@mui/material';

import '../styles/reviewBox.css';

export default function ReviewBox() {
  return (
    <div className="ReviewBox">
      <Rating readOnly value="5" size="large" />
    </div>
  );
}
