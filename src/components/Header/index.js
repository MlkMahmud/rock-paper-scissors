import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../images/logo-bonus.svg';


const Header = ({ score }) => (
  <header className="header">
    <img className="logo" src={logo} alt="logo" />
    <div className="score-card">
      <p className="score-card__text">score</p>
      <p className="score-card__score">{score}</p>
    </div>
  </header>
);

Header.propTypes = {
  score: PropTypes.number.isRequired,
}

const mapStateToProps = ({ score }) => ({
  score,
});


export default connect(mapStateToProps)(Header);
