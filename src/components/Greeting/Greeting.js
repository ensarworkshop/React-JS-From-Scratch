import React from 'react';
import './Greeting.css';

function Greeting(props) {
  return (
    <div className="greeting">
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default Greeting;
