///
import React, { useEffect, useState } from 'react';
import './GamePlay.css';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';

const GamePlay = () => {
  const [selectNumber, setSelectNumber] = useState(null);
  const [number, setNumber] = useState(null);
  const [diceImage, setDiceImage] = useState('');
  const [rolling, setRolling] = useState(false);
  const [score, setScore] = useState(0);

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
    setNumber(num);
    return `./images/dice/dice_${num}.png`;
  };

  useEffect(() => {
    // Set the initial dice image on component mount
    const initialDiceImage = generateRandomNumber();
    setDiceImage(initialDiceImage);
  }, []);

  useEffect(() => {
    if (rolling) {
      const interval = setInterval(() => {
        const randomDiceImage = generateRandomNumber();
        setDiceImage(randomDiceImage);
      }, 100); // Change dice image every 100ms

      return () => clearInterval(interval);
    }
  }, [rolling]);

  useEffect(() => {
    if (!rolling && selectNumber && number) {
      if (parseInt(selectNumber) === number) {
        alert('Yeyy! You guessed the correct number!');
        setScore(prev => prev + 1);
      } else {
        setScore(prev => prev - 1);
      }
      setDiceImage(`./images/dice/dice_${number}.png`); // Display the correct dice image
    }
  }, [rolling, selectNumber, number]);

  const startRolling = () => {
    setRolling(true);
    setSelectNumber(null); // Reset selected number when rolling starts
  };

  const stopRolling = () => {
    setRolling(false); // Stop rolling when the user selects a number
  };

  const resetScore = () => {
    setScore(0);
  };

  const showRules = () => {
    alert("Click on dice to roll and guess number. For every right guess, +1 will be awarded; else -1.");
  };

  return (
    <div className="top-container">
      <main>
        <div className='total-score'>
          <h1>{score}</h1>
          <h5>Total Score</h5>
        </div>
        <div className="select-number">
          <div className="number-selector">
            <NumberSelector
              setSelectNumber={setSelectNumber}
              selectNumber={selectNumber}
              stopRolling={stopRolling} // Pass stopRolling to stop dice when a number is selected
            />
          </div>
          <h5>Select Number</h5>
        </div>
      </main>
      <div className="role-dice">
        <RoleDice
          diceImage={diceImage}
          startRolling={startRolling}
          rolling={rolling}
          resetScore={resetScore} // Pass resetScore to RoleDice
          showRules={showRules}   // Pass showRules to RoleDice
        />
      </div>
    </div>
  );
};

export default GamePlay;
