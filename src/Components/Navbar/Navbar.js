import React, {Component} from 'react';
import Logo from '../../Components/Logo/Logo';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <nav className="NavbarItems" >
            <Link to="/capstone-frontend">
                <Logo/>
            </Link>
            <div className="rightButtons">
                <Link to="/capstone-frontend/locations">
                    <ul>
                        Find a location
                    </ul>
                </Link>
                <Link to="/capstone-frontend/drinkreview">
                    <ul>
                        Drink Review
                    </ul>
                </Link>
                <Link to="/capstone-frontend/about">
                    <ul>
                        About Us
                    </ul>
                </Link>
                <Link to="/capstone-frontend/drinkForm">
                    <ul>
                        Create your Own
                    </ul>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;