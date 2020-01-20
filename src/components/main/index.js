import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScreenOne from './ScreenOne.jsx';
import ScreenTwo from './ScreenTwo.jsx';



const Main = ({ playerPick }) => (
  <main className="main">
    {!playerPick ? <ScreenOne /> : <ScreenTwo />}
  </main>
);


Main.defaultProps = {
  playerPick: null,
};

Main.propTypes = {
  playerPick: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    beats: PropTypes.arrayOf(PropTypes.string),
  }),
};


const mapStateToProps = ({ playerPick }) => ({
  playerPick,
});

export default connect(mapStateToProps)(Main);
