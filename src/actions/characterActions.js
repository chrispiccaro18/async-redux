import { createAction } from 'promise-middleware-redux';
import { getCharacters, getCharacter } from '../services/lastAirbenderApi';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_FULFILLED,
  FETCH_CHARACTERS_REJECTED
] = createAction('FETCH_CHARACTERS', getCharacters);

export const [
  fetchCharacter,
  FETCH_CHARACTER,
  FETCH_CHARACTER_LOADING,
  FETCH_CHARACTER_FULFILLED,
  FETCH_CHARACTER_REJECTED
] = createAction('FETCH_CHARACTER', getCharacter);
