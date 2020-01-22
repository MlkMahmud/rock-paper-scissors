import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Character from './Character.jsx';


const PlayerPick = ({ playerPick, verdict  }) => (
  <div className="character-wrapper">
    <span className="screen-two-text">
      you picked
    </span>
    <Character character={playerPick} screen={verdict === 'WIN' ? 'two winner' : 'two' } />
  </div>
);


PlayerPick.defaultProps = {
  verdict: null,
};

PlayerPick.propTypes = {
  playerPick: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    beats: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  verdict: PropTypes.string,
};


const mapStateToProps = ({ playerPick, verdict }) => ({
  playerPick,
  verdict,
});


export default connect(mapStateToProps)(PlayerPick);
