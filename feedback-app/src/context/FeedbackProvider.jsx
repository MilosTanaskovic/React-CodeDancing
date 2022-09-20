
import React, {createContext, useState} from 'react'
import { FeedbackData } from '../data/FeedbackData'
const FeedbackContext = createContext();

export default function FeedbackProvider({children}) {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const removeFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete it?')){
            setFeedbackData(feedbackData.filter((item) => item.id !== id));
        }
    }

    return (
        <FeedbackContext.Provider 
            value={{ 
                feedbackData, 
                removeFeedback
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}