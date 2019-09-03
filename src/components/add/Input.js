import React from 'react';
import PropTypes from 'prop-types';

function Input({ name, breed, age, inputChange, handleSubmit }) {
  return (
    <section>
      <input type="text" placeholder="pupper's name" name="name" value={name} onChange={inputChange} />
      <input type="text" placeholder="doggo's breed" name="breed" value={breed} onChange={inputChange} />
      <input type="text" placeholder="how old that doge" name="age" value={age} onChange={inputChange} />
      <button onClick={() => handleSubmit(name, breed, age)}>Add A Dog</button>
    </section>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Input;
