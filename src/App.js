import React, { Component } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Locations from './Components/Locations/Locations.js';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter, useParams} from "react-router-dom";
import './App.css';
import { render } from '@testing-library/react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Signin from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Card from './Components/Card/Card';
import SingleDrinkPage from './Components/SingleDrinkPage/SingleDrinkPage';
import Create from './Components/Create/Create';
import About from './Components/About/About';
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ReviewBoxComponent from "./Components/SingleDrinkPage/ReviewBoxComponent.js"


class App extends Component{
  constructor(){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }
  

   onRouteChange = (route) => {
     if (route ==='signout') {
       this.setState({isSignedIn : false})
     }else if (route === 'home') {
       this.setState({isSignedIn:true})
     }
    this.setState({route: route});
   }
  render(){
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home' ?
          <div>
            {/* <Logo/> */}
            {/* <Card/> */}
            <Router>
              <Navbar/>
                <Switch>
                  <Route exact path="/capstone-frontend" component={HomePage} />
                  <Route exact path="/capstone-frontend/reviewbox" component={ReviewBoxComponent} />
                  <Route exact path="/capstone-frontend/locations" component={Locations} />
                  {/* <Route exact path="/capstone-frontend/drinkreview" component={SingleDrinkPage} /> */}
                  {/* <Route exact path="/capstone-frontend/drinkreview/:id" component={SingleDrinkPage} /> */}
                  <Route exact path="/capstone-frontend/drinkreview/:id" component={SingleDrinkPage}/>
                  <Route exact path="/capstone-frontend/drinkForm" component={Create} />
                  <Route exact path="/capstone-frontend/about" component={About} />
                  <Route exact path="/capstone-frontend/reviewForm" component={ReviewForm} />
                  
                </Switch>
            </Router>
          </div> : 
          (
            this.state.route ==='signin' ?
             <Signin onRouteChange={this.onRouteChange}/>
            :<Register onRouteChange={this.onRouteChange} />
          )
        }
      
      </div>
    );
  }
}


export default App;
