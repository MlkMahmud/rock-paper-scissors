import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import rules from '../../images/image-rules-bonus.svg';
import icon from '../../images/icon-close.svg';


const RulesModal = ({ dispatch, isOpen }) => (
  <>
    < div
      className={isOpen ? "modal-overlay" : "modal-overlay close"}
      onClick={() => dispatch({ type: 'CLOSE' })}
    />
    <div className={isOpen ? "modal" : "modal close"}>
      <span className="modal-text">rules</span>
      <button
        aria-label="close modal"
        type="button"
        className="modal-close-btn"
        onClick={() => dispatch({ type: 'CLOSE' })}
      >
        <img className="close-btn-icon" alt="" src={icon} />
      </button>
      <div className="modal-image-wrapper">
        <img alt="" src={rules} />
      </div>
    </div>
  </>
);

RulesModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};


const mapStateToProps = ({ isOpen }) => ({
  isOpen,
});

export default connect(mapStateToProps)(RulesModal);
