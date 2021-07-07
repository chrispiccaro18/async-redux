// import React from 'react';
// import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// import App from './components/App';

const reducer = (state, action) => {
  const { type } = action;
  switch(type) {
    default:
      return state;
  }
};

// eslint-disable-next-line no-unused-vars
const logger = store => next => action => {
  console.log(action);
};

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      logger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.dispatch({
  type: 'Hello'
});

// render(
//   <App />,
//   document.getElementById('root')
// );
