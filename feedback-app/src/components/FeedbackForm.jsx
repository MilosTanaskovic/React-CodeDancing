import React, {useState} from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

export default function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleTextChange = (event) => {
        if(text === ''){
            setBtnDisabled(true);
        }else if (text !== '' && text.trim().length <= 1){
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false);
        }

        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(text.trim().length > 2){
            const newFeedback = {
                text,
                rating,
            }

            handleAdd(newFeedback);
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with you?</h2>
                {/** @todo - rating selection component */}
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text' 
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button 
                        type='submit'
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>
                </div>
            </form>
        </Card>
    )
}
