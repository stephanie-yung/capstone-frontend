import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { render } from '@testing-library/react';
import CardList from '../Card/CardList';
import {coffeeInfo} from '../Coffee/Coffee'
class HomePage extends Component{
  render(){
    return (
      <div>
        <CardList c = {coffeeInfo}/>
      </div>
    );
  }
}

export default HomePage;
