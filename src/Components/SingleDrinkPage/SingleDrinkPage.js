import React , {useState, useEffect}from "react";
import "./SingleDrinkPage.css";
import "../../Components/customerReview/customerReview";
import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter, useParams} from "react-router-dom";
import ReviewList from './ReviewDrinkList.js';
import {ReviewInfo} from "./ReviewMockInfo.js";
import axios from "axios";
import { FaDraft2Digital } from "react-icons/fa";

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };


const SingleDrinkPage = ({id}) =>{
    //initialize variables
    const params = useParams(); //get parameter value 
    const drink_id = params.id;
    var reviewsArray  = []; 
    var drinkComment;
    var validComment;

    const [DrinkData, setDrinkData] = useState(0);
    const [DrinkName, setDrinkName] = useState(0);
    const [DrinkRating, setDrinkRating] = useState(0);
    const [DrinkIngredients, setDrinkIngredients] = useState(0);
    const [DrinkReviewIds, setDrinkReviewIds] = useState(0);
    const [DrinkReviewArray, setDrinkReviewArray] = useState(0);
    const [ReviewsLoaded , setReviewsLoaded] = useState(false);
    var IngredientsMap = new Map()
    var IngredientsList = []

    
    //get endpoint data and set states. 
    useEffect(async () => {
        //get single drink
        let get_drink = async(drink_id) => {
            // drink_id = "619063b464aa0703a8fe7584";
            // drink_id = "619062bf64aa0703a8fe7572"
            const { data } = await axios.get(`${BASE_URL}/drinks/${drink_id}`)
            const drink = data.data

            setDrinkName(drink.name)
            setDrinkRating(drink.rating);
            setDrinkIngredients(drink.ingredients);
            get_reviews(drink.review_ids)
        }

        get_drink(drink_id);

        let get_reviews = async (review_ids) => {
            for(let i = 0; i < review_ids.length ;i++) {
                const { data } = await axios.get(`${BASE_URL}/reviews/${review_ids[i]}`);
                const review = data.data;
                reviewsArray.push(review.comment);
            }

            setDrinkReviewArray(reviewsArray);
            setReviewsLoaded(true);
        }
    }, []);

    for(let i = 0; i< DrinkIngredients.length; i++){
        var ingredientsFull = DrinkIngredients[i][0]+": "+ DrinkIngredients[i][1]+". ";
        IngredientsList.push(ingredientsFull);
    }
    const IngredientsItems = IngredientsList.map((ingredient) =>
        <li>{ingredient}</li>
    );


    return(
        <div style={{padding: "20px" }} >
            <div className="right" style={{margin: "80px 50px" }} >
            <h1 className="">{DrinkName}</h1>
            <h3> Ingredients:</h3>
                <div>{IngredientsItems}</div>
            </div>
            
            <div className="row">
                <div className="column left drinkImg">
                    <h2>Rating: {DrinkRating}</h2>
                    <Link to ="/capstone-frontend/reviewForm">
                        <button className="mousepointer" style={styles.button}>Leave a Review! </button>
                    </Link>
                </div>
                <div className="column right">
                    <h2 >Reviews: </h2>
                    {/* <ReviewList review = {ReviewInfo}/> */}
                    {/* <ReviewList review = {reviewsArray}/> */}
                    {
                        ReviewsLoaded ? <ReviewList review = {DrinkReviewArray}/> : <div>LOADING...</div>

                    }
                </div>
            </div>
        </div>
    );
}

const styles = {

    button:{
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 200,
        padding: 10

    }
}

export default SingleDrinkPage;
