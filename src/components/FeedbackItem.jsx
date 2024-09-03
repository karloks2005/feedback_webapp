import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from './shared/Card';

function FeedbackItem({item}) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('Nice feedback item you got there!');

  return (
    <Card reversed={false}>
      <div className='num-display'> {item.rating} </div>
      <div className='text-display'> {item.text} </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;