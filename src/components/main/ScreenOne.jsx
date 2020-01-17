import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Character from './Character.jsx';
import bg from '../../images/bg-pentagon.svg';
import characters from '../../characters';

const ScreenOne = ({ playerPick }) => {
  if (!playerPick) {
    return (
      <div className="screen-one">
        <img className="screen-one-bg" src={bg} alt="" />
        {characters.map((character) => (
          <Character character={character} key={character.name} screen="one" />
        ))}
      </div>
    );
  } else return null;
};

ScreenOne.defaultProps = {
  playerPick: null,
};

ScreenOne.propTypes = {
  playerPick: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    beats: PropTypes.arrayOf(PropTypes.string),
  }),
};

const mapStateToProps = ({ playerPick }) => ({
  playerPick,
});

export default connect(mapStateToProps)(ScreenOne);
