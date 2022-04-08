import React from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({feedback, handleRemoveFB}) {
    if(!feedback || feedback.length === 0) return (<p>No Feedback Yest</p>);

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem 
                    key={item.id}  
                    item={item}
                    handleRemoveFB={handleRemoveFB}
                />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}


