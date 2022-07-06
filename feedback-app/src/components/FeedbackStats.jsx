import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackStats({feedbackData}) {
    // Calculate ratings avg
    let average = feedbackData.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0) / feedbackData.length;

    average = average.toFixed(1).replace(/[.,]0/, '');
    return (
        <div className='feedback-stats'>
            <h4>{feedbackData.length} Reviews</h4>
            <h4>Avarge Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedbackData: PropTypes.array.isRequired,
}


