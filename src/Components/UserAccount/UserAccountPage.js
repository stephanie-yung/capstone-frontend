import React ,{useState, useEffect}from 'react'
import { FaCentercode } from 'react-icons/fa';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./UserAccountPage.css";
import axios from 'axios';


const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };


const UserAccount = () => {
    const [FirstName, setFirstName] = useState(0);
    const [LastName, setLastName] = useState(0);
    const [Email, setEmail] = useState(0);

    let get_user = async(email) =>{
        email = "andy@gmail.com";
        const { data } = await axios.get(`${BASE_URL}/users/${email}`);
        console.log("USER DATAAAAA.DATAAAAA",data.data);
        // console.log("USER INFO",data.data.fname);
        setFirstName(data.data.fname);
        setLastName(data.data.lname);
        setEmail(data.data.email);

    }
    get_user();

    // let post_user = async() =>{
    //     let params = {
    //         fname: ,
    //         lname: ,
    //         email: email,
    //         pw:
    //     };
  
    //     const { data } = await axios.post(`${BASE_URL}/users`, params, headers);

    // }

    let delete_drink = async(drink_id) => {
        var { data } = await axios.delete(`${BASE_URL}/drinks`, {data: {_ids: [drink_id]}})

    }
    // delete_drink();
    let delete_review = async(review_id) => {
        var { data } = await axios.delete(`${BASE_URL}/reviews`, {data: {_ids: [review_id]}})

    }
    //delete_review()

    return (
       <div className="margin2">
           <h1>{FirstName} {LastName}</h1>
           <h3>{Email}</h3>
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