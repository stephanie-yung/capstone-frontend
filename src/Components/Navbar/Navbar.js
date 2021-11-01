import React, {Component} from 'react';
import Logo from '../../Components/Logo/Logo';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <nav className="NavbarItems f4 white pa1 no-underline" >
            <Link to="/capstone-frontend">
                <Logo/>
            </Link>
            <div className="rightButtons no-underline">
                <Link to="/capstone-frontend/locations">
                    <ul className= "dim">
                        Find a location
                    </ul>
                </Link>
                <Link to="/capstone-frontend/drinkreview">
                    <ul className= "dim">
                        Drink Review
                    </ul>
                </Link>
                <Link to="/capstone-frontend/about">
                    <ul className= "dim">
                        About Us
                    </ul>
                </Link>
                <Link to="/capstone-frontend/drinkForm">
                    <ul className= "dim">
                        Create your Own
                    </ul>
                </Link>
                <Link to="/capstone-frontend/reviewbox">
                    <ul className= "dim">
                        Backend Demo
                    </ul>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;