import { getDog, createDog } from '../services/dogApi';

export const CREATE_DOG = 'CREATE_DOG';
export const FETCH_DOGS = 'FETCH_DOGS';
export const FETCH_DOGS_LOADING = 'FETCH_DOGS_LOADING';

export const addDog = () => ({
  type: CREATE_DOG,
  payload: createDog()
});

export const fetchDog = () => ({
  type: FETCH_DOGS,
  payload: getDog(),
  pending: FETCH_DOGS_LOADING
});
