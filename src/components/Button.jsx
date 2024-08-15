///
import React from 'react';
import { GrPowerReset } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import './Button.css';

const Button = ({ text, onClick }) => {
  const getLogo = () => {
    if (text === 'Reset Score') {
      return <GrPowerReset />;
    } else if (text === 'Show Rules') {
      return <GiNotebook />;
    }
    return null;
  };

  return (
    <button className='button' onClick={onClick}>
      {getLogo()}
      <p>{text}</p>
    </button>
  );
};

export default Button;
