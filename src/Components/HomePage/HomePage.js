import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { render } from '@testing-library/react';
import CardList from '../Card/CardList';
import {coffeeInfo} from '../Coffee/Coffee'
import SearchBox from '../Searchbox/SearchBox';
function HomePage(){
  const [search,SetSearch] = useState('') 
  const onSearchChange = (event) => {
    SetSearch(event.target.value)
  }
  render();{
    const filtered = coffeeInfo.filter(coffeeInfo => {
      return coffeeInfo.name.toLowerCase().includes(search.toLowerCase());
    })
    return (
      <div className = "tc">
        <SearchBox  searchChange={onSearchChange}/>
        <CardList c = {filtered}/>
      </div>
    );
  }
}

export default HomePage;
