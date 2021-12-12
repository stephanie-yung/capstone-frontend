import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { render } from '@testing-library/react';
import CardList from '../Card/CardList';
import {coffeeInfo} from '../Coffee/Coffee'
import SearchBox from '../Searchbox/SearchBox';
import axios from 'axios';

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };

function HomePage(){
  const [search,SetSearch] = useState('') ;
  const [drinks,SetDrink] = useState([]) ;
  const onSearchChange = (event) => {
    SetSearch(event.target.value)
  }

  useEffect(() => {
    let get_drink = async() => {
      var { data } = await axios.get(`${BASE_URL}/drinks`)
      SetDrink(data.data);
      return data.data;

    }
    get_drink();

  }, [])
  const filteredDrinks = drinks.filter(drinks => {
      return drinks.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className = "tc">
      <SearchBox  searchChange={onSearchChange}/>  
      {/* SearchBox takes in a searchChange function described above which can be used to filter drinks */}
      <CardList c = {filteredDrinks}/> 
      {/* Cardlists takes the card componenet and information to put in those cards, right now using dummy data */}
    </div>
  );
}

export default HomePage;
