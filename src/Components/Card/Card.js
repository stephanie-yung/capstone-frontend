import React from 'react'
import { FaCentercode } from 'react-icons/fa';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter} from "react-router-dom";

{/* <a href="/drinkreview" className="db link tc"></a> */}
const Card = ({name, img, username}) => {
    const myStyle = {
        maxWidth:'50%',
        height: '50%',
    }
    return (
        <Link to="/capstone-frontend/drinkreview" className="db link tc">
            <div className ='tc bg-light-blue dib br1 fl w-30 pa2 ma3 grow bw2 shadow-5'>
                <img src= {img} style = {myStyle}alt=''></img>
                <div>
                    <h2>{name}</h2>
                    <p>{username}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;