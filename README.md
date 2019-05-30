# Redux Middleware

## Agenda

* Why might we need middleware?
* What is redux middleware?
* Compose

## Resources

* [Middleware](https://redux.js.org/advanced/middleware)
* [Compose](https://redux.js.org/api/compose)

## Why?

Redux middleware are functions that sit between a dispatched action
and the reducers. They allow us to customize behavior based on the
action. They also allow us to customize behavior after the reducers
finish.

For example:

* we can log every action that redux handles
* we can wait for asynchronous actions
* we can store state in local storage

## What?

Redux middleware takes the form

```js
const myMiddleware = store => next => action => {
  // ...do stuff here
}
```

parameter | description
--------- | -----------
`store`   | the redux store with all of its methods
`next`    | a function to move to the next middleware (returns new state)
`action`  | the incoming (dispatched) action

Middleware can be applied when you create your store:

```js
import {
  createStore,
  applyMiddleware
} from 'redux';
import reducer from './reducers';
import { myMiddleware } from './middleware/myMiddleware.js';

export default createStore(
  reducer,
  applyMiddleware(
    myMiddleware
  )
);
```

## Compose

When we applied middleware before we applied a store enhancer. Middleware
isn't a fundamental part of redux, but is added as an enhancement. We've
used another redux enhancement when we used redux devtools.

To add multiple enhancements we need to `compose` the enhancements together.

```js
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';
import { myMiddleware } from './middleware/myMiddleware.js';

export default createStore(
  reducer,
  compose(
    applyMiddleware(
      myMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
```

# Async Redux

## Agenda

* thunk
* promise

## Dependencies

* `npm i redux-thunk`
* `npm i promise-middleware-redux`

## Thunk middleware

By default redux can only handle plain JavaScript objects. Because of
this all state transformations are synchronous. One approach to handling
asynchronous state transformation is to create redux middleware that can
handle function actions instead of object actions. With the `redux-thunk`
middleware, we can then dispatch functions. These functions are responsible
for dispatching further actions as asynchronous operations finish.

```js
export const myActionCreator = () => dispatch => {
  return someService()
    .then(results => {
      dispatch({
        type: 'MY_ACTION',
        payload: results
      });
    });
};
```

```js
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
```

## Promise middleware

Another approach is to create redux middleware that can handle an action
where the payload is a promise. The middleware will then dispatch a new
action after the payload promise resolves.

```js
export const myActionCreator => () => ({
  type: 'MY_ACTION',
  payload: someService()
});
```

```js
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';
import { promiseMiddleware } from 'promise-middleware-redux';

export default createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
```
