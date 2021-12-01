import React ,{useState, useEffect}from 'react'
import { FaCentercode } from 'react-icons/fa';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./UserAccountPage.css";
import axios from 'axios';
import UserDrinkList from "./UserAccountDrinkList";
import UserReviewList from './UserAccountReviewList';


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
    const [Reviews2DArray, setReviews2DArray] = useState(0);
    const [Drink2DArray, setDrink2DArray] = useState(0);
    const [DrinksLoaded, setDrinksLoaded] = useState(0);

    const [ReviewsLoaded, setReviewsLoaded] = useState(0);
    var IngredientsList = [];

    let drinksArray = [];
    let reviewsArray = [];
    let drinks2DArray = [[]];
    let reviews2DArray = [[]];
    drinks2DArray.pop();
    reviews2DArray.pop();

    useEffect( () => { 

        //get user data
        let get_user = async(email) =>{
            email = "andy@gmail.com";
            const { data } = await axios.get(`${BASE_URL}/users/${email}`);
            setFirstName(data.data.fname);
            setLastName(data.data.lname);
            setEmail(data.data.email);
            console.log(data.data.drink_ids);
            get_drinks(data.data.drink_ids);
            console.log("RREVIEW IDS RETRIEVED::::",data.data.review_ids);
            setReviewsArray(data.data.review_ids);
            get_reviews(data.data.review_ids);
            // setReviewsLoaded(true);
        }
        get_user();

        //get user drinks
        let get_drinks = async(drink_ids) => {
            for(let i = 0; i < drink_ids.length ;i++) {
                const { data } = await axios.get(`${BASE_URL}/drinks/${drink_ids[i]}`);
                const drinks = data.data;
                console.log(drinks);
                console.log("DRINK NAMEMEMEMEE",drinks.name)
                console.log("THERE IS AN IDDDDDDDDD", drinks._id)

                setDrinkName(drinks.name);
                setDrinkIngredients(drinks.ingredients);
                drinksArray.push(drinks.name);
                drinksArray.push(drinks.ingredients);
                drinksArray.push(drinks._id);
                console.log("DRINKSARRAYYY",drinksArray.length);

                if(drinksArray.length !== 0){
                    drinks2DArray.push(drinksArray);
                }
                
                console.log("non state 2d arrayyyyyyyy",drinks2DArray);
                drinksArray = [];
                console.log("DRNK 2D Aarrraayayyyy",Drink2DArray);


            }
            console.log("drinks2darray outside of func", drinks2DArray);

            setDrink2DArray(drinks2DArray);
            setDrinksLoaded(true);
            // console.log("Drink2DArrayyyyyyyyyyyyyy",Drink2DArray);
        }

        //get user reviews
        let get_reviews = async (review_ids) => {
            for (let i = 0; i < review_ids.length; i++) {
                const { data } = await axios.get(`${BASE_URL}/reviews/${review_ids[i]}`)
                const review = data.data;
                reviewsArray.push(review.drink_id);
                reviewsArray.push(review.comment);
                reviews2DArray.push(reviewsArray);
                reviewsArray = [];
            }
            
            setReviews2DArray(reviews2DArray);
            console.log("USER ACOUNTTT  REVIEWSSSARRAYYYYY NON STATE",reviews2DArray);
            console.log("USER ACOUNTTT  REVIEWSSSARRAYYYYY",Reviews2DArray);
            setReviewsLoaded(true);
        }
        // get_reviews(ReviewsArray);

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
    console.log("USER ACOUNTTT  REVIEWSSSARRAYYYYY NON STATE!!!!!!!!!!!!",Reviews2DArray);

    return (
       <div className="margin2">
           <h1>{FirstName} {LastName}</h1>
           <h3>{Email}</h3>
           <br></br>
           <br></br>

           <h1>My Drinks:</h1>
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
           <div> 
                {/* <div>
                    <button className="deleteButton">
                        Delete
                    </button>
                    <h2>Drink Name: </h2>
                </div>
                <h3>Review: </h3> */}

                {
                    ReviewsLoaded ? <UserReviewList review = {Reviews2DArray}/> : <div>LOADING...</div>
                }
                {/* <UserReviewList review = {reviews2DArray}/> */}

           </div>


       </div>
    )
}

export default UserAccount;