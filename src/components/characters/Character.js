import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ character }) {
  const { photoUrl, name, _id } = character;
  return (
    <Link to={`/character/${_id}`}>
      <li>
        <img src={photoUrl} alt={`Image of ${name}`} />
        <h3>{name}</h3>
      </li>
    </Link>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    name: PropTypes.string.isRequired
  })
};

export default Character;
