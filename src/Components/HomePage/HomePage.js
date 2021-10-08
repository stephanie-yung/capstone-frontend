import React, { Component } from 'react';
import Logo from '../../Components/Logo/Logo';
import Card from '../../Components/Card/Card';
import Locations from '../../Components/Locations/Locations.js';
import Navbar from '../../Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { render } from '@testing-library/react';

class HomePage extends Component{
  render(){
    return (
      <div>
        <Card/>
      </div>
    );
  }
}

export default HomePage;
