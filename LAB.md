* npm init alchemy-react async-redux
* create branch middleware-logger (git checkout -b middleware-logger)
* npm i redux
* inside index.js create store
* inside index.js create logging middleware
* play with logging middleware
* what other middleware can you think of???


* log every action
* BONUS: log the new state if state changes

# Redux Async Exercises

## Create an Avatar character list

Demo [Redux Avatar Thunk](https://demo.alchemycodelab.io/redux-avatar-thunk)

* Create your `App` component
* Create your presentational components
  * `Character`
  * `Characters`
* create a service to get characters from https://last-airbender-api.herokuapp.com/api/v1/characters
* implement redux
  * create actions to fetch characters
  * create a combine reducer
  * create a store with middleware
    * use the `redux-thunk` middleware
  * create selectors to get character state
    * `getCharacters`
    * `getCharactersLoading`
    * `getCharactersError`
  * create `AllCharacters` container
    * pass it your characters and loading state
    * pass it a function that will fetch from the avatar API and update state

## Create an Avatar character list with promises

Demo [Redux Avatar Promise](https://demo.alchemycodelab.io/redux-avatar-promise)

* create a new branch based on the Redux Avatar Thunk exercise
  * refactor your store to use the promise middleware
  * refactor your action creator
BONUS:
  * Add a character detail page
