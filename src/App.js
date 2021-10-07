import React, { Component } from 'react';
import Logo from './Components/Logo/Logo';
import './App.css';
import Card from './Components/Card/Card';
function App() {
  return (
    <div className="App">
      <div>
            <Logo/>
            <Card/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
