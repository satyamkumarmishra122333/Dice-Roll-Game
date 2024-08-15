///
import React from 'react';

const NumberSelector = ({ setSelectNumber, selectNumber, stopRolling }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  function getValue(event) {
    const selectedValue = event.target.innerHTML;
    setSelectNumber(selectedValue);
    stopRolling(); // Stop the dice rolling immediately
  }

  return (
    <div>
      {arrNumber.map((value, i) => (
        <button
          key={i}
          onClick={getValue}
          id={value}
          className={value == selectNumber ? 'clicked' : ''}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default NumberSelector;
