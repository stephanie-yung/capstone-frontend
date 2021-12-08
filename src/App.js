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
import UserAccount from './Components/UserAccount/UserAccountPage';


class App extends Component{
  constructor(){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      token: "",
      user: {}
      //This state function has no functionality at the moment besides checking which page the suer is on, will use this for user auth
    }
  }
  
//Below is the function to determine the page
   onRouteChange = (route, token, user) => {
    this.setState({
      token: token,
      user: user
    });
     if (route ==='signout') {
       this.setState({isSignedIn : false})
     }else if (route === 'home') {
       this.setState({isSignedIn:true})
     }
    this.setState({route: route});
   }
  render(){
    const { token, user } = this.state;
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
                  <Route exact path="/capstone-frontend/drinkreview/:id" render={(props) => (<SingleDrinkPage token={this.state.token} user={this.state.user}/>)}/>
                  <Route exact path="/capstone-frontend/drinkForm" render={(props) => (<Create token={this.state.token} user={this.state.user}/>)}/>
                  <Route exact path="/capstone-frontend/about" component={About} />
                  {/* <Route exact path="/capstone-frontend/reviewForm" component={ReviewForm} /> */}
                  <Route exact path="/capstone-frontend/reviewForm/:id" render={(props) => (<ReviewForm token={this.state.token} user={this.state.user}/>)}/>
                  {/* <Route exact path="/capstone-frontend/userAccount" component={UserAccount} /> */}
                  <Route exact path="/capstone-frontend/userAccount" render={(props) => (<UserAccount token={this.state.token} user={this.state.user}/>)} />
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
