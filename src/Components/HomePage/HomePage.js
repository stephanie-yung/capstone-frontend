import React, { Component } from 'react';
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
