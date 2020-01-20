import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Character from './Character.jsx';


const PlayerPick = ({ playerPick }) => (
  <div className="character-wrapper">
    <span className="screen-two-text">
      you picked
    </span>
    <Character character={playerPick} screen="two" />
  </div>
);


PlayerPick.propTypes = {
  playerPick: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    beats: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};


const mapStateToProps = ({ playerPick }) => ({
  playerPick,
});


export default connect(mapStateToProps)(PlayerPick);
