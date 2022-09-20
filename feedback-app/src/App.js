import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { v4 as uuidv4} from 'uuid';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import FeedbackProvider from './context/FeedbackProvider';

export default function App(){
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbackData([newFeedback, ...feedbackData]);
        console.log(newFeedback)
    }
    
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route 
                            exact 
                            path='/'
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats feedbackData={feedbackData} />
                                    <FeedbackList />
                                </>
                            }
                        >
                        </Route>
                        <Route path='/about' element={<AboutPage/>} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
}