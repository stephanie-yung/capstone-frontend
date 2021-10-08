import React from "react";
import './Logo.css';
import star from './coffee.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Logo = () => {
    return(
        <div>
            <div className="shrink">
                <img style={{paddingTop:'20px'}} src={star} alt='logo'/>
            </div>
        </div>
    );
}

export default Logo;