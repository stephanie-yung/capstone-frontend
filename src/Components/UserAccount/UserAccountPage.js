import React ,{useState, useEffect}from 'react'
import { FaCentercode } from 'react-icons/fa';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./UserAccountPage.css";
import axios from 'axios';
import UserDrinkList from "./UserAccountDrinkList"
import UserDrinkBox from './UserAccountDrinkBox';


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
    const [Drink2DArray, setDrink2DArray] = useState(0);
    const [DrinksLoaded, setDrinksLoaded] = useState(0);
    var IngredientsList = [];

    let drinksArray = [];
    let drinks2DArray = [[]];
    drinks2DArray.pop();
    let dInfo;

    useEffect(async () => { 

        //get user data
        let get_user = async(email) =>{
            email = "andy@gmail.com";
            const { data } = await axios.get(`${BASE_URL}/users/${email}`);
            setFirstName(data.data.fname);
            setLastName(data.data.lname);
            setEmail(data.data.email);
            console.log(data.data.drink_ids);
            get_drinks(data.data.drink_ids);
            
            // get_reviews(data.data.review_ids);
        }
        get_user();

        //get user drinks
        let get_drinks = async(drink_ids) => {
            for(let i = 0; i < drink_ids.length ;i++) {
                const { data } = await axios.get(`${BASE_URL}/drinks/${drink_ids[i]}`);
                const drinks = data.data;
                console.log(drinks);
                console.log("DRINK NAMEMEMEMEE",drinks.name)

                setDrinkName(drinks.name);
                setDrinkIngredients(drinks.ingredients);
                drinksArray.push(drinks.name);
                drinksArray.push(drinks.ingredients);
                console.log("DRINKSARRAYYY",drinksArray.length);

                if(drinksArray.length !== 0){
                    drinks2DArray.push(drinksArray);
                }
                
                console.log("non state 2d arrayyyyyyyy",drinks2DArray);
                // setDrink2DArray(drinks2DArray);
                drinksArray = [];
                console.log("DRNK 2D Aarrraayayyyy",Drink2DArray);


            }
            console.log("drinks2darray outside of func", drinks2DArray);
            // displayDrinks(drinks2DArray);
            
            setDrink2DArray(drinks2DArray);
            setDrinksLoaded(true);
            // console.log("Drink2DArrayyyyyyyyyyyyyy",Drink2DArray);
        }

        let displayDrinks = (drinks) =>{
            console.log("DISPLAY DRINKS FUNC",drinks);
            for (let i = 1; i < drinks.length; i++){
                console.log("FOR LOOOPPP DISPLAYYY DRINKSSKSKSKSSSK",drinks[i]);
                let dName = drinks[i][0];
                let dIngredients = drinks[i][1];
                for(let i = 0; i< dIngredients.length; i++){
                    var ingredientsFull = dIngredients[i][0]+": "+ dIngredients[i][1]+". ";
                    IngredientsList.push(ingredientsFull);
                    console.log("DIPSLAY DRINKS FOR LOOP  INGREDIENTSLIST",IngredientsList)
                }
                const dInfoIngredients = IngredientsList.map((ingredient) =>
                    <li>{ingredient}</li>
                );
                dInfo = drinks.map((d) =>
                    <div>
                        <h5>Drink Name: {d.name}</h5>
                        <div>
                            {dInfoIngredients}
                        </div>
                    </div>

                );
            }

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
        // console.log(IngredientsList)
    }
    const IngredientsItems = IngredientsList.map((ingredient) =>
        <li>{ingredient}</li>
    );
    // for (let i = 1; i < D)

    return (
       <div className="margin2">
           <h1>{FirstName} {LastName}</h1>
           <h3>{Email}</h3>
           <br></br>
           <br></br>

           <h1>My Drinks:</h1>
           <h1>
               {dInfo}
           </h1>
           <div >
                {/* <div>
                    <button className="deleteButton">
                        Delete
                    </button>
                    <h2>Drink Name: {DrinkName} </h2>
                </div>
                <h3>Ingredients:</h3>
                    <div>{IngredientsItems}</div> */}
                {/* <div>
                    <button className="deleteButton">
                        Delete
                    </button>
                </div> */}
                {
                    DrinksLoaded ? <UserDrinkList drink = {Drink2DArray}/> : <div>LOADING...</div>

                }

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