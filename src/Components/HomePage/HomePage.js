import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { render } from '@testing-library/react';
import CardList from '../Card/CardList';
import {coffeeInfo} from '../Coffee/Coffee'
import SearchBox from '../Searchbox/SearchBox';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';

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
  let filtered2;
  useEffect(async () => {
    let get_drink = async() => {
      var { data } = await axios.get(`${BASE_URL}/drinks`)
      console.log("dataaaa: ",data.data);
      SetDrink(data.data);
      return data.data;

    }
    await get_drink();

  }
  ,[])


  return (
    <div className = "tc">
      <SearchBox  searchChange={onSearchChange}/>
      <CardList c = {drinks}/>
    </div>
  );
}

export default HomePage;
