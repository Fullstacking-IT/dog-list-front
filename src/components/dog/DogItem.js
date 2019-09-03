import React from 'react';
import PropTypes from 'prop-types';

function DogItem({ name, breed, age }) {
  return (
    <section>
      <h2>{name}</h2>
      <h4>breed: {breed}</h4>
      <h4>age: {age}</h4>
    </section>
  );
}

DogItem.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
};

export default DogItem;
