///
import React from 'react';
import Button from './Button';
import './RoleDice.css';

const RoleDice = ({ diceImage, startRolling, rolling, resetScore, showRules }) => {
  return (
    <div className='dice-container'>
      <div className="img" onClick={startRolling}>
        <img src={diceImage} alt="Dice" />
      </div>
      <div className="Title">
        <h2>{rolling ? "ROLLING..." : "CLICK ON THE DICE TO ROLL"}</h2>
      </div>
      <Button text='Reset Score' onClick={resetScore} />
      <Button text='Show Rules' onClick={showRules} />
    </div>
  );
};

export default RoleDice;
