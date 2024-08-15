import React from 'react'
import './StartGame.css'
const StartGame = (props) => {
  return (
    <div className="container">
        <div className="container-left">
        <img src="./images/dices.png" alt="dice img" />
        </div>
        <div className="container-right">
            <h1>DICE GAME</h1>
            <button onClick={props.toggle}>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame
