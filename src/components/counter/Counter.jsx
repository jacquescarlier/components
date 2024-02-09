import React, { useState } from 'react';
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container" >
      <h2>Compteur</h2>
      <div className="counter">
        <p>Valeur : {count}</p>
        <div className="counter-button">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
