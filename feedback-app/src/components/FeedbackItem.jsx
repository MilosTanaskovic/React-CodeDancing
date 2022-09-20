import React, { useState, useContext } from 'react';
import { FaTimes} from 'react-icons/fa';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackProvider';

export default function FeedbackItem({item}) {
    const {rating, text, id} = item;
    const { removeFeedback } = useContext(FeedbackContext)
    return (
        <Card reverse>
            <div className='num-display'>{rating}</div>
            <button onClick={() => removeFeedback(id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <div className='text-display'>{text}</div>
        </Card>
    )
}
