import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING } from '../actions/characterActions';

const initialState = {
  loading: true,
  error: null,
  characters: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case FETCH_CHARACTERS:
      return { ...state, characters: payload, loading: false };
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
