import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App(){
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (deleteId) => {
        if(window.confirm('Are you sure you want to delete this feedback?')){
            setFeedback(feedback.filter((item) => item.id !== deleteId));
            //Filter vraca novi niz koji sadrzi sve elemente koji zadovoljavaju uvjet
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([...feedback, newFeedback])
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm handleAdd={ addFeedback } feedback={ feedback } setFeedback={ setFeedback } />
                <FeedbackStats feedback={ feedback } />
                <FeedbackList feedback={ feedback } handleDelete={deleteFeedback} />
            </div>
        </>
    );
}

export default App;