import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';

export default function FeedbackItem({item}) {
    const {rating, text} = item;

    return (
        <Card reverse>
            <div className='num-display'>{rating}</div>
            <div className='text-display'>{text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
