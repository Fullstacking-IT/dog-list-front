import { UPDATE_NAME, UPDATE_BREED, UPDATE_AGE } from '../action/createAction';

//have all three

const initialState = {
  name: '',
  breed: '',
  age: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_BREED:
      return { ...state, breed: action.payload };
    case UPDATE_AGE:
      return { ...state, age: action.payload };    
    default:
      return state;
  }
}
