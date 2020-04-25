import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; // import Greet component from Greet.js
import {Greet2} from './components/Greet'; // another way to import a component
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';


function App() {
  return (
    <div className="App">
      {
      <Message/>
      /* <Greet/>
      <Greet2 name='Panharith' codeName='The Man'/>
      <Welcome/>
      <Hello/>
      <Greet2 name="Panharith" codeName="The Man">
        <p>The Man of Men</p>
      </Greet2>
      
      <Welcome name="Panharith" codeName="The Man">

      </Welcome> */
      }
    </div>
  );
}

export default App;
