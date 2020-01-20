import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';



const ResetBtn = ({ dispatch }) => (
  <button
    className="reset-btn"
    name="reset"
    type="button"
    onClick={() => dispatch({  type: 'RESET' })}
  >
    play again
  </button>
);

ResetBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect()(ResetBtn);
