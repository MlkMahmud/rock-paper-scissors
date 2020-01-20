import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';


const Character = ({ character, dispatch, screen }) => (
  <button
    type="button"
    className={`character ${character.name} ${screen}`}
    aria-label={character.name}
    onClick={() => {
      if (screen === 'one') {
        dispatch({ type: 'PLAYER PICK', payload: character });
      }
    }}
  >
    <img alt={character.name} src={character.image} />
  </button>
);

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    beats: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  screen: PropTypes.string,
};

export default connect()(Character);
