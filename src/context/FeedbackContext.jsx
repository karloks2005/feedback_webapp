import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext(); 

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is a sample feedback',
            rating: 5
        },
        {
            id: 2,
            text: 'This is a sample feedback2',
            rating: 1
        },
        {
            id: 3,
            text: 'This is a sample feedback3',
            rating: 3
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([...feedback, newFeedback])
    }

    const deleteFeedback = (deleteId) => {
        if(window.confirm('Are you sure you want to delete this feedback?')){
            setFeedback(feedback.filter((item) => item.id !== deleteId));
            //Filter vraca novi niz koji sadrzi sve elemente koji zadovoljavaju uvjet
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {
            ... item, ...updItem } : item ))
    }

    return <FeedbackContext.Provider  value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;