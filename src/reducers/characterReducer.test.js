import reducer from './characterReducer';
import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING } from '../actions/characterActions';

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
    expect(initialState).toEqual({
      loading: true,
      error: null,
      characters: []
    });
  });

  it('handles the fetch characters loading action', () => {
    const initialState = {
      loading: false,
      error: null,
      characters: []
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_LOADING
    });
    expect(newState).toEqual({
      loading: true,
      error: null,
      characters: []
    });
    expect(initialState).toEqual({
      loading: false,
      error: null,
      characters: []
    });
  });
});
