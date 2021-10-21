import React, { Component } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Locations from './Components/Locations/Locations.js';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
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
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/locations" component={Locations} />
                  <Route exact path="/drinkreview" component={SingleDrinkPage} />
                  <Route exact path="/drinkForm" component={Create} />
                  <Route exact path="/about" component={About} />
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
