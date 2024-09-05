import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext(); 

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    useEffect(() => {
        fetchFeedback();
    }, [])

    //Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc');

        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

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
        console.log("Edit feedback", item)
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
        isLoading,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;