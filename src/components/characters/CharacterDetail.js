import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  const { photoUrl, name, affiliation, position } = character;
  return (
    <section>
      <img src={photoUrl} alt={`Image of ${name}`} />
      <h3>{name}</h3>
      <p>{affiliation}</p>
      <p>{position}</p>
    </section>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterDetail;
