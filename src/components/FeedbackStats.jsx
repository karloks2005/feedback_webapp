import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats(){
    const { feedback } = useContext(FeedbackContext);
    //Calculate average rating
    //Loopa kroz sve elemente i zbraja ratinge
    const totalRating = feedback.reduce((acc, item) => acc + item.rating, 0)
    let average = totalRating/feedback.length

    average = average.toFixed(1).replace(/\.0$/, '');

    return <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
}

export default FeedbackStats;