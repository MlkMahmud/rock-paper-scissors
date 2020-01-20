import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ResetBtn from './ResetBtn.jsx';

const Verdict = ({ playerPick, cpuPick, verdict, dispatch }) => {
  useEffect(() => {
    if (playerPick && cpuPick) {
      const { name } = cpuPick;
      const result = playerPick.beats.includes(name) ? 'WIN' : 'LOSE';
      dispatch({
        type: result,
      });
    }
  }, [playerPick, cpuPick]);

  if (verdict) {
    return (
      <div className="verdict">
        <span className="verdict-text">
          {`YOU ${verdict}`}
        </span>
        <ResetBtn />
      </div>
    );
  } else return null;
};

Verdict.defaultProps = {
  verdict: null,
  cpuPick: null,
};

Verdict.propTypes = {
  playerPick: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    beats: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  cpuPick: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    beats: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  dispatch: PropTypes.func.isRequired,
  verdict: PropTypes.string
};


const mapStateToProps = ({ cpuPick, playerPick, verdict }) => ({
  cpuPick,
  playerPick,
  verdict,
});


export default connect(mapStateToProps)(Verdict);
