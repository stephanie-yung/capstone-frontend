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
const UserAccount = (props) => {

    //states
    const [FirstName, setFirstName] = useState(0);
    const [LastName, setLastName] = useState(0);
    const [Email, setEmail] = useState(0);

    const [Reviews2DArray, setReviews2DArray] = useState(0);
    const [Drink2DArray, setDrink2DArray] = useState(0);

    //wait for drinks and reviews to be loaded
    const [DrinksLoaded, setDrinksLoaded] = useState(0);
    const [ReviewsLoaded, setReviewsLoaded] = useState(0);

    const [PropsToken, setPropsToken] = useState("");

    //drinks and review arrays
    let drinksArray = [];
    let reviewsArray = [];
    let drinks2DArray = [[]];
    let reviews2DArray = [[]];
    drinks2DArray.pop();
    reviews2DArray.pop();

    //get user data
    let get_user = async(email) =>{
        // email = "andy@gmail.com"; //remove and replace 
        const { data } = await axios.get(`${BASE_URL}/users/${email}`);
        setFirstName(data.data.fname);
        setLastName(data.data.lname);
        setEmail(data.data.email);
        get_drinks(data.data.drink_ids);
        get_reviews(data.data.review_ids);
    }

    //get user drinks
    let get_drinks = async(drink_ids) => {
        for(let i = 0; i < drink_ids.length ;i++) {
            const { data } = await axios.get(`${BASE_URL}/drinks/${drink_ids[i]}`);
            const drinks = data.data;

            //push drink keys to arr
            drinksArray.push(drinks.name);
            drinksArray.push(drinks.ingredients);
            drinksArray.push(drinks._id);
            drinks2DArray.push(drinksArray);
            drinksArray = [];
        }
        setDrink2DArray(drinks2DArray); //set 2D Drink array
        setDrinksLoaded(true); //drinks array loaded
    }

    //get user reviews
    let get_reviews = async (review_ids) => {
        for (let i = 0; i < review_ids.length; i++) {
            const { data } = await axios.get(`${BASE_URL}/reviews/${review_ids[i]}`)
            const review = data.data;

            //push review objects to arr
            reviewsArray.push(review.drink_id);
            reviewsArray.push(review.comment);
            reviewsArray.push(review._id);
            
            reviews2DArray.push(reviewsArray);
            reviewsArray = [];
        }
        setReviews2DArray(reviews2DArray); //set 2D review array
        setReviewsLoaded(true); //reviews array loaded
    }

    useEffect(() => { 
        setPropsToken(props.token);
        get_user(props.user.email);
    
    }, [props]);

    return (
       <div className="margin2">
           <h1>{FirstName} {LastName}</h1>
           <h3>{Email}</h3>
           <br></br>
           <br></br>

           <h1>My Drinks:</h1>
           <div >
                {
                    DrinksLoaded ? <UserDrinkList drink = {Drink2DArray} propsToken = {PropsToken}/> : drinksArray.length === 0? <h2> No drinks yet!</h2>  : <div></div>
                }
           </div>

           <br></br>

           <h1>My Reviews:</h1>
           <div> 
                {
                    ReviewsLoaded ? <UserReviewList review = {Reviews2DArray} propsToken = {PropsToken}/> : reviewsArray.length === 0? <h2> No reviews yet!</h2> : <div></div>
                }
           </div>

       </div>
    )
}

export default UserAccount;