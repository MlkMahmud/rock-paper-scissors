import React from 'react';
import Character from '../misc/Character.jsx';
import bg from '../../images/bg-pentagon.svg';
import characters from '../../characters';

const ScreenOne = () => (
  <div className="screen-one">
    <img className="screen-one-bg" src={bg} alt="" />
    {characters.map((character) => (
      <Character character={character} key={character.name} screen="one" />
    ))}
  </div>
);


export default ScreenOne;
