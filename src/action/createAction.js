
export const UPDATE_NAME = 'UPDATE_NAME';
export const updateName = name => ({
  type: UPDATE_NAME,
  payload: name
});

export const UPDATE_BREED = 'UPDATE_BREED';
export const updateBreed = breed => ({
  type: UPDATE_BREED,
  payload: breed
});

export const UPDATE_AGE = 'UPDATE_AGE';
export const updateAge = age => ({
  type: UPDATE_AGE,
  payload: age
});
