import React from 'react';
import Greeting from './components/Greeting/Greeting';
import Counter from './components/Counter/Counter';
import ToDoList from './components/ToDoList/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting name="Boss" />
      <Counter />
      <ToDoList />
    </div>
  );
}

export default App;
