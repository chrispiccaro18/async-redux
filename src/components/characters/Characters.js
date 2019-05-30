import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterLis = characters.map(character => (
    <Character key={character._id} character={character} />
  ));

  return (
    <ul>
      {characterLis}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))
};

export default Characters;
