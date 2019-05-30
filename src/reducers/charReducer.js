import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING } from '../actions/characterActions';

const initialState = {
  loading: true,
  error: null,
  character: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case FETCH_CHARACTER:
      return { ...state, character: payload, loading: false };
    case FETCH_CHARACTER_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
