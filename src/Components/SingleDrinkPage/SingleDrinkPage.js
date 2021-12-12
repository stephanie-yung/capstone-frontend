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


const SingleDrinkPage = (props, image) =>{
    //initialize variables
    const params = useParams(); //get parameter (drink id)value 
    const drink_id = params.id;
    var reviewsArray  = []; 

    const [DrinkData, setDrinkData] = useState(0);
    const [DrinkName, setDrinkName] = useState(0);
    const [DrinkRating, setDrinkRating] = useState(0);
    const [DrinkIngredients, setDrinkIngredients] = useState(0);
    const [DrinkReviewIds, setDrinkReviewIds] = useState(0);
    const [DrinkReviewArray, setDrinkReviewArray] = useState(0);
    const [ReviewsLoaded , setReviewsLoaded] = useState(false);
    const [DrinkImg, setDrinkImg] = useState("");
    var IngredientsList = []

    
    //get endpoint data and set states. 
    useEffect(() => {
        //get single drink data
        const get_drink = async (drink_id) => {
            // drink_id = "619063b464aa0703a8fe7584";
            // drink_id = "619062bf64aa0703a8fe7572";
            const { data } = await axios.get(`${BASE_URL}/drinks/${drink_id}`)
            const drink = data.data

            //set drink states
            setDrinkName(drink.name)
            setDrinkRating(drink.rating);
            setDrinkIngredients(drink.ingredients);
            setDrinkImg(drink.img);
            get_reviews(drink.review_ids);
            console.log(drink.img);
        }

        get_drink(drink_id);

        // get reviews for passed in drink id
        let get_reviews = async (review_ids) => {
            // retrieve review comment per review_id
            for(let i = 0; i < review_ids.length ;i++) {
                const { data } = await axios.get(`${BASE_URL}/reviews/${review_ids[i]}`);
                const review = data.data;
                reviewsArray.push(review.comment); //push review comment to arrray
            }

            setDrinkReviewArray(reviewsArray); //set DrinkReviewArray state
            setReviewsLoaded(true); //set loaded reviews to true
        }
    });

    // Add ingredients to list 
    for(let i = 0; i< DrinkIngredients.length; i++){
        if( !(DrinkIngredients[i][1] == "None" || DrinkIngredients[i][1] == "0")){
            // console.log("drink has none or 0", DrinkIngredients[i][1]);
            var ingredientsFull = DrinkIngredients[i][0]+": "+ DrinkIngredients[i][1];
            IngredientsList.push(ingredientsFull);
        }
        // else{
        //     var ingredientsFull = DrinkIngredients[i][0]+": "+ DrinkIngredients[i][1]+". ";
        //     IngredientsList.push(ingredientsFull);
        // }
    }
    // map ingredients to <li>
    const IngredientsItems = IngredientsList.map((ingredient) =>
        <li>{ingredient}</li>
    );

    // Display retrieved drink data
    return(
        <div style={{padding: "20px" }} >
            <div className="right" style={{margin: "80px 50px" }} >
            <h1 className="">{DrinkName}</h1>
            <h3> Ingredients:</h3>
                <div className="drinkpage-list">{IngredientsItems}</div>
            </div>
            
            <div className="row">
                <div className="column left drinkImg">
                  <img src={DrinkImg}/>
                    {DrinkRating === -1 ? <h2>No ratings yet!</h2> : <h2>Rating: {DrinkRating}</h2>}

                    <Link to= {{
                        pathname: `/capstone-frontend/reviewForm/${drink_id}`
                    }}>
                        <button className="mousepointer" style={styles.button}>Leave a Review! </button>
                    </Link>
                </div>
                <div className="column right">
                    <h2 className = "marginleft20">Reviews: </h2>
                      <div className="line"></div>

                      {
                        //   reviewsArray.length === 0? <h2 className = "marginleft20"> No reviews yet!</h2> : ReviewsLoaded ? <ReviewList review = {DrinkReviewArray}/> : <div>LOADING...</div>
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
