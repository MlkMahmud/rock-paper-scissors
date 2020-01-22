import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Character from './Character.jsx';
import { filterCharacterList, selectRandomCharacter } from '../../helpers';
import characters from '../../characters';

const CpuPick = ({ playerPick, cpuPick, dispatch, verdict }) => {
  useEffect(() => {
    const availableCharacters = filterCharacterList(characters, playerPick);
    const payload = selectRandomCharacter(availableCharacters);
    setTimeout(() => dispatch({ type: 'CPU PICK', payload }), 1000);
  }, []);

  return (
    <div className="character-wrapper">
      <span className="screen-two-text">the house picked</span>
      {cpuPick ? <Character character={cpuPick} screen={verdict === 'LOSE' ? 'two winner' : 'two'} /> : <div className="cpu-pick-placeholder" />}
    </div>
  );
};

CpuPick.defaultProps = {
  cpuPick: null,
  verdict: null,
};

CpuPick.propTypes = {
  cpuPick: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    beats: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),

  playerPick: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    beats: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,

  dispatch: PropTypes.func.isRequired,
  verdict: PropTypes.string,
};

const mapStateToProps = ({ cpuPick, playerPick , verdict }) => ({
  cpuPick,
  playerPick,
  verdict,
});

export default connect(mapStateToProps)(CpuPick);
