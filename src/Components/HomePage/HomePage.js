import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
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
