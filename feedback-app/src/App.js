import React, {useState} from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';

export default function App(){
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const removeFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete it?')){
            setFeedbackData(feedbackData.filter((item) => item.id !== id));
        }
    }
    
    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackStats feedbackData={feedbackData} />
                <FeedbackList 
                    feedback={feedbackData}
                    handleRemoveFB={removeFeedback}
                />
            </div>
        </>
    );
}