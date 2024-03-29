import React, {useState} from 'react';

const SimpleInput = (props) => {
  const [enterName, setEnterName] = useState('');

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
