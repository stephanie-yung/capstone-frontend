import React, { Component } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Locations from './Components/Locations/Locations.js';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import SingleDrinkPage from './Components/SingleDrinkPage/SingleDrinkPage';
import Create from './Components/Create/Create';
import About from './Components/About/About';
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ReviewBoxComponent from "./Components/SingleDrinkPage/ReviewBoxComponent.js"
import UserAccount from './Components/UserAccount/UserAccountPage';
import jwtDecode from 'jwt-decode';

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

  componentDidMount(){
    if (localStorage.authToken){
      let decoded = jwtDecode(localStorage.authToken) //decode token that is in localStorage
      const currentTime = Date.now() / 1000 //get current time

      //check if token has expired
      if (decoded.exp < currentTime){

        //clear local storage
        localStorage.removeItem("authToken");

      }
      else{ //go here if token is valid
        const token = localStorage.authToken;
        const {sub} = decoded;
        this.onRouteChange("home", token, sub);
      }
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
       localStorage.removeItem("authToken");
     }else if (route === 'home') {
       localStorage.setItem("authToken", token);
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
