import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  const inputState = useState({ title: '', amount: '' });
  console.log(inputState);
  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  return (
    <section className='ingredient-form'>
      <Card>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Name</label>
            <input
              type='text'
              id='title'
              value={inputState[0].title}
              onChange={(e) =>
                inputState[1]({
                  title: e.target.value,
                  amount: inputState[0].amount,
                })
              }
            />
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              id='amount'
              value={inputState[0].amount}
              onChange={(e) =>
                inputState[1]({
                  amount: e.target.value,
                  title: inputState[0].title,
                })
              }
            />
          </div>
          <div className='ingredient-form__actions'>
            <button type='submit'>Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
