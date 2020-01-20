import React from 'react';
import CpuPick from '../misc/CpuPick.jsx';
import PlayerPick from '../misc/PlayerPick.jsx';
import Verdict from '../misc/Verdict.jsx';


const ScreenTwo = () => (
  <div className="screen-two">
    <PlayerPick />
    <Verdict />
    <CpuPick />
  </div>
);

export default ScreenTwo;
