import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { photoUrl, name } = character;
  return (
    <li>
      <img src={photoUrl} alt={`Image of ${name}`} />
      <h3>{name}</h3>
    </li>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default Character;
