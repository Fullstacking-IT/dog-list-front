export const createDog = (name, breed, age) => {
  return fetch('https://doggie-backend.herokuapp.com/api/v1/dogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, breed, age })
  })
    .then(res => {
      if(!res.ok) throw 'could not save dog';
      return res.json();
    });
};

export const getDog = () => {
  return fetch('https://doggie-backend.herokuapp.com/api/v1/dogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'unable to fetch route';
      return res.json();
    });
};
