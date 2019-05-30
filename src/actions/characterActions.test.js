import { fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_FULFILLED,
  FETCH_CHARACTERS_REJECTED,
  fetchCharacter,
  FETCH_CHARACTER, 
  FETCH_CHARACTER_LOADING,
  FETCH_CHARACTER_FULFILLED,
  FETCH_CHARACTER_REJECTED
} from './characterActions';


jest.mock('../services/lastAirbenderApi.js');

describe('characters actions', () => {
  it('fetches a list of characters then dispatches an action', () => {
    expect(fetchCharacters()).toEqual({
      type: FETCH_CHARACTERS,
      pendingType: FETCH_CHARACTERS_LOADING,
      fulfilledType: FETCH_CHARACTERS_FULFILLED,
      rejectedType: FETCH_CHARACTERS_REJECTED,
      payload: expect.any(Promise)
    });
  });
  
  it('fetches a character then dispatches an action', () => {
    expect(fetchCharacter()).toEqual({
      type: FETCH_CHARACTER,
      pendingType: FETCH_CHARACTER_LOADING,
      fulfilledType: FETCH_CHARACTER_FULFILLED,
      rejectedType: FETCH_CHARACTER_REJECTED,
      payload: expect.any(Promise)
    });
  });
});
