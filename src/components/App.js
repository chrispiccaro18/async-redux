import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import CharacterById from '../containers/CharacterById';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/character/:id" component={CharacterById} />
        <Route path="/" component={AllCharacters} />
      </Switch>
    </Router>
  );
}
