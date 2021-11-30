import React ,{useState, useEffect}from 'react'
import { FaCentercode } from 'react-icons/fa';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./UserAccountPage.css";
import axios from 'axios';


const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };


 //userAccount component
const UserAccount = () => {

    //states
    const [FirstName, setFirstName] = useState(0);
    const [LastName, setLastName] = useState(0);
    const [Email, setEmail] = useState(0);
    const [ReviewsArray, setReviewsArray] = useState([])
    const [DrinkName, setDrinkName] = useState(0);
    const [DrinkIngredients, setDrinkIngredients] = useState(0);
    var IngredientsList = [];

    let drinksArray;

    useEffect(async () => { 

        //get user data
        let get_user = async(email) =>{
            email = "andy@gmail.com";
            const { data } = await axios.get(`${BASE_URL}/users/${email}`);
            setFirstName(data.data.fname);
            setLastName(data.data.lname);
            setEmail(data.data.email);
            get_drinks(data.data.drink_ids);
            // get_reviews(data.data.review_ids);
        }
        get_user();

        //get user drinks
        let get_drinks = async(drink_ids) => {
            for(let i = 0; i < drink_ids.length ;i++) {
                const { data } = await axios.get(`${BASE_URL}/drinks/${drink_ids[i]}`);
                const drinks = data.data;

                setDrinkName(drinks.name);
                setDrinkIngredients(drinks.ingredients);
                // drinksArray.push(drinks);
            }

            // setDrinkReviewArray(reviewsArray);
            // setReviewsLoaded(true);
        }

        //get user reviews
        let get_reviews = async (review_ids) => {
            let reviewsArray = [];
            for (let i = 0; i < review_ids.length; i++) {
                const { data } = await axios.get(`${BASE_URL}/reviews/${review_ids[i]}`)
                const review = data.data;
                reviewsArray.push(review)
            }

            setReviewsArray(reviewsArray)
        }

        //delete a drink
        let delete_drink = async(drink_id) => {
            var { data } = await axios.delete(`${BASE_URL}/drinks`, {data: {_ids: [drink_id]}})

        }
        // delete_drink();

        //delete a review
        let delete_review = async(review_id) => {
            var { data } = await axios.delete(`${BASE_URL}/reviews`, {data: {_ids: [review_id]}})

        }
    //delete_review()
    }, []);

    for(let i = 0; i< DrinkIngredients.length; i++){
        var ingredientsFull = DrinkIngredients[i][0]+": "+ DrinkIngredients[i][1]+". ";
        IngredientsList.push(ingredientsFull);
        console.log(IngredientsList)
    }
    const IngredientsItems = IngredientsList.map((ingredient) =>
        <li>{ingredient}</li>
    );

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
                <h3>Ingredients:</h3>
                    <div>{IngredientsItems}</div>

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