import React from 'react'
import Input from '../../UI/Input';

import './MealItemForm.module.css';

const MealItemForm = () => {
    return (
        <form>
            <Input 
                label="Amount" 
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} 
            />
            <button></button>
        </form>
    )
}

export default MealItemForm
