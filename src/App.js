import React, { Component } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Locations from './Components/Locations/Locations.js';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/locations" component={Locations} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
