const initialState = {
  dog: {
    name: '',
    breed: '',
    age: ''
  },
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DOG_LOADING:
      return { ...action, loading: true };
    case FETCH_DOG:
      return { ...state, loading: false, error: null, dog: action.payload };
    default:
      return state;
  }
}
