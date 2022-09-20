import React, {useContext} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackProvider';

export default function FeedbackList() {
    const { feedbackData } = useContext(FeedbackContext);
    if(!feedbackData || feedbackData.length === 0) return (<p>No Feedback Yest</p>);

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedbackData.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <FeedbackItem 
                            key={item.id}  
                            item={item}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}


