import { getDog } from '../services/dogApi';
import { createDog } from '../services/dogApi';

export const CREATE_DOG = 'CREATE_DOG';

export const addDog = (name, breed, age) => ({
  type: CREATE_DOG,
  payload: createDog(name, breed, age)
});

export const FETCH_DOGS = 'FETCH_DOGS';
export const FETCH_DOGS_LOADING = 'FETCH_DOGS_LOADING';

export const fetchDog = () => ({
  type: FETCH_DOGS,
  payload: getDog(),
  pending: FETCH_DOGS_LOADING
});
