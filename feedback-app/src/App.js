import React, {useState} from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import Card from './components/shared/Card';

export default function App(){
    const [feedbackData, setFeedbackData] = useState(FeedbackData);
    
    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedbackData} />
            </div>
        </>
    );
}