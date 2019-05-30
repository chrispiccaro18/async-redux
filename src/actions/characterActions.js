import { createAction } from 'promise-middleware-redux';
import { getCharacters, getCharacter } from '../services/lastAirbenderApi';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
] = createAction('FETCH_CHARACTERS', getCharacters);

export const [
  fetchCharacter,
  FETCH_CHARACTER,
  FETCH_CHARACTER_LOADING,
] = createAction('FETCH_CHARACTER', getCharacter);
