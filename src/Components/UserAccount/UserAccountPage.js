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
    const [ReviewsArray, setReviewsArray] = useState([])
    const [DrinkName, setDrinkName] = useState(0);
    const [DrinkIngredients, setDrinkIngredients] = useState(0);
    var IngredientsMap = new Map();
    var IngredientsList = [];

    let drinksArray;
    useEffect(async () => {
    let get_user = async(email) =>{
        email = "andy@gmail.com";
        const { data } = await axios.get(`${BASE_URL}/users/${email}`);
        console.log("USER DATAAAAA.DATAAAAA",data.data);
        console.log("USER DATAAAAA.DATAAAAA.Drink-ids",data.data.drink_ids);
        // console.log("USER INFO",data.data.fname);
        setFirstName(data.data.fname);
        setLastName(data.data.lname);
        setEmail(data.data.email);
        get_drinks(data.data.drink_ids);
        // get_reviews(data.data.review_ids);
    }
    get_user();

    let get_drinks = async(drink_ids) => {
        for(let i = 0; i < drink_ids.length ;i++) {
            const { data } = await axios.get(`${BASE_URL}/drinks/${drink_ids[i]}`);
            console.log(data);
            const drinks = data.data;
            setDrinkName(data.data.name);
            setDrinkIngredients(data.data.ingredients);
            // drinksArray.push(drinks);
        }

        console.log("/THIS IS THE DINRKS ARRAY INSIDER FUNC2: ", drinksArray);
        // setDrinkReviewArray(reviewsArray);
        // setReviewsLoaded(true);
    }
    
    // for(let i = 0; i< DrinkIngredients.length; i++){
    //     var ingredientsFull = DrinkIngredients[i][0]+": "+ DrinkIngredients[i][1]+". ";
    //     IngredientsList.push(ingredientsFull);
    //     console.log(IngredientsList)
    // }
    // console.log("Drink Ingredients Map", IngredientsMap);
    // const IngredientsItems = IngredientsList.map((ingredient) =>
    //     <li>{ingredient}</li>
    // );

    let get_reviews = async (review_ids) => {
        let reviewsArray = [];
        for (let i = 0; i < review_ids.length; i++) {
            const { data } = await axios.get(`${BASE_URL}/reviews/${review_ids[i]}`)
            const review = data.data;
            reviewsArray.push(review)
        }

        setReviewsArray(reviewsArray)
    }



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
    }, []);

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
                    <h2>Drink Name: {DrinkName} </h2>
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