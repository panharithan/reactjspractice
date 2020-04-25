import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; // import Greet component from Greet.js
import {Greet2} from './components/Greet'; // another way to import a component
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Greet2/>
      <Welcome/>
      
      
    </div>
  );
}

export default App;
