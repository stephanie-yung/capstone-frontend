import React from 'react';
import Logo from '../../Components/Logo/Logo';
import {Link} from "react-router-dom";
import './Navbar.css';


function Navbar(){
    return(
        <nav className="NavbarItems f4 white pa1 no-underline" >
            {/* Logo on the NavBar, linking to the homepage */}
            <Link to="/">
                <Logo/>
            </Link>
            {/* Links to tabs on NavBar */}
            <div className="rightButtons no-underline">
                <Link to="/locations">
                    <ul className= "dim">
                        Find a location
                    </ul>
                </Link>
                <Link to="/about">
                    <ul className= "dim">
                        About Us
                    </ul>
                </Link>
                <Link to="/drinkForm">
                    <ul className= "dim">
                        Create your Own
                    </ul>
                </Link>
                <Link to="/userAccount">
                    <ul className= "dim">
                        My Account
                    </ul>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;