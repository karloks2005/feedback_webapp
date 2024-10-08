import { FaEdit, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

function FeedbackItem({item}) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reversed={false}>
      <div className='num-display'> {item.rating} </div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple' />
      </button>
      <div className='text-display'> {item.text} </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem;