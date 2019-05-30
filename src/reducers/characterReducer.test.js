import reducer from './characterReducer';
import { FETCH_CHARACTERS } from '../actions/characterActions';

describe('characters reducer tests', () => {
  it('handles the fetch characters action', () => {
    const initialState = {
      loading: true,
      error: null,
      characters: []
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS,
      payload: ['hi', 'there']
    });
    expect(newState).toEqual({
      loading: false,
      error: null,
      characters: ['hi', 'there']
    });
  });
});
