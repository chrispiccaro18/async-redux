import { getCharacters } from '../services/lastAirbenderApi';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
] = createAction('FETCH_CHARACTERS', getCharacters);
