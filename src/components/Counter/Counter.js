import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="counter">
      <button className="toggle-btn" onClick={toggleVisibility}>
        {isVisible ? 'Minimize Counter' : 'Show Counter'}
      </button>
      {isVisible && (
        <div className="counter-container">
          <h3>Counter: {count}</h3>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      )}
    </div>
  );
}

export default Counter;
