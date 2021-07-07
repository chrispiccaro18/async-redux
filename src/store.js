import { createStore, compose, applyMiddleware } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers';
import logger from './middleware/logger';

export default createStore(
  reducer,
  compose(
    applyMiddleware(
      logger,
      promiseMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
