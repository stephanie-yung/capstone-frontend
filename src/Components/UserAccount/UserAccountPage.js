import React from 'react'
import { FaCentercode } from 'react-icons/fa';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./UserAccountPage.css";

const UserAccount = () => {

    return (
       <div className="margin2">
           <h1>Joe Smith</h1>
           <h3>joesmith@gmail.com</h3>
           <br></br>
           <br></br>

           <h1>My Drinks:</h1>
           <div className="contentBox"> 
                <div>
                    <button className="deleteButton">
                        Delete
                    </button>
                    <h2>Drink Name: </h2>
                </div>
                <h3>Ingredients: </h3>

           </div>

           <br></br>
           <h1>My Reviews:</h1>
           <div className="contentBox"> 
                <div>
                    <button className="deleteButton">
                        Delete
                    </button>
                    <h2>Drink Name: </h2>
                </div>
                <h3>Review: </h3>

           </div>


       </div>
    )
}

export default UserAccount;