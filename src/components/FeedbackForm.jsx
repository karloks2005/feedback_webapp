import { useState, useContext, useEffect } from 'react';

import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm () {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        //Radi kao init state u flutteru, na pocetku loadanja i samo jednom
        if(feedbackEdit.edit){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])
    
    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.length <= 10){
            setMessage('Text must be at least 10 characters long');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault(); //Sprjecava da se writea u file
        if(text.trim().length < 10){
            setMessage('Text must be at least 10 characters long');
            return;
        }
        //Add feedback to the list
        const newFeedback = {
            text,
            rating
        }

        if(feedbackEdit.edit){
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)
        }
    
    }

    return <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            {/*rating select component*/}
            <RatingSelect rating={rating} setRating={setRating} select={(rating) => setRating(rating)} />
            <div className='input-group'>
                <input 
                    onChange={handleTextChange}
                    type='text' 
                    placeholder='Write a review'
                    value={text}
                />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
}

export default FeedbackForm