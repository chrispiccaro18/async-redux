import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING } from '../actions/characterActions';

const initialState = {
  getCharactersLoading: false,
  getCharactersError: null,
  characters: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case FETCH_CHARACTERS:
      return { ...state, characters: payload, getCharactersLoading: false };
    case FETCH_CHARACTERS_LOADING:
      return { ...state, getCharactersLoading: true };
    default:
      return state;
  }
};
