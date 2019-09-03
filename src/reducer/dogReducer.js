import { CREATE_DOG, FETCH_DOGS, FETCH_DOGS_LOADING } from '../action/dogActions';

const initialState = {
  dogs: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_DOG:
      return { ...state, loading: false, dogs:[...state.dogs, action.payload] };
    case FETCH_DOGS_LOADING:
      return { ...action, loading: true };
    case FETCH_DOGS:
      return { ...state, loading: false, error: null, dogs: action.payload };
    default:
      return state;
  }
}
