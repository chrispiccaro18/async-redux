import reducer from './charReducer';
import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING } from '../actions/characterActions';

describe('character reducer tests', () => {
  it('handles the fetch character action', () => {
    const initialState = {
      loading: true,
      error: null,
      character: {}
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { hi: 'there' }
    });
    expect(newState).toEqual({
      loading: false,
      error: null,
      character: { hi: 'there' }
    });
    expect(initialState).toEqual({
      loading: true,
      error: null,
      character: {}
    });
  });

  it('handles the fetch character loading action', () => {
    const initialState = {
      loading: false,
      error: null,
      character: {}
    };
    const newState = reducer(initialState, {
      type: FETCH_CHARACTER_LOADING
    });
    expect(newState).toEqual({
      loading: true,
      error: null,
      character: {}
    });
    expect(initialState).toEqual({
      loading: false,
      error: null,
      character: {}
    });
  });
});
