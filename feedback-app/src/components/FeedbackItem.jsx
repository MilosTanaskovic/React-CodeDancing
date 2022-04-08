import React, { useState } from 'react';
import { FaTimes} from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

export default function FeedbackItem({item, handleRemoveFB}) {
    const {rating, text, id} = item;

    return (
        <Card reverse>
            <div className='num-display'>{rating}</div>
            <button onClick={() => handleRemoveFB(id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <div className='text-display'>{text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
