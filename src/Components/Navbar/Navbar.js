import React, {Component} from 'react';
import Logo from '../../Components/Logo/Logo';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <nav className="NavbarItems" >
            <Link to="/">
                <Logo/>
            </Link>
            <div className="rightButtons">
                <Link to="locations">
                    <ul>
                        Find a location
                    </ul>
                </Link>
                <Link to="signin">
                    <ul>
                        Sign In
                    </ul>
                </Link>
                <Link to="register">
                    <ul>
                        Join Now
                    </ul>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;