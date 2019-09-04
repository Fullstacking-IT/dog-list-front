import React from 'react';
import PropTypes from 'prop-types';
import DogItem from './DogItem';
import styles from './DogList.css';

function DogList({ dogs }) {
  const dogList = dogs.map(dog => {
    return (
      <li key={dog._id}>
        <DogItem name={dog.name} breed={dog.breed} age={dog.age} />
      </li>
    );
  });
  return (
    <ul className={styles.DogList}>
      {dogList}
    </ul>
  );
}

DogList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
  })).isRequired
};

export default DogList;
