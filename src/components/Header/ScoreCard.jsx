import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ScoreCard = ({ score }) => (
  <div className="score-card">
    <p className="score-card__text">score</p>
    <p className="score-card__score">{score}</p>
  </div>
);

ScoreCard.propTypes = {
  score: PropTypes.number.isRequired,
};

const mapStateToProps = ({ score }) => ({
  score,
});

export default connect(mapStateToProps)(ScoreCard);
