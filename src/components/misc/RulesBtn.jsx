import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RulesBtn = ({ dispatch }) => (
  <button
    className="rules-btn"
    type="button"
    onClick={() => dispatch({type: 'OPEN'})}
  >
    rules
  </button>
);

RulesBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(RulesBtn);
