import React ,{useState, useEffect}from 'react';
import axios from 'axios';
import UserDrinkList from "./UserAccountDrinkList";
import UserReviewList from './UserAccountReviewList';
import qs from "querystring";
import "./UserAccountPage.css";

const BASE_URL = "https://brewers-backend.herokuapp.com";

 //userAccount component
const UserAccount = (props) => {

    //states
    const [FirstName, setFirstName] = useState(0);
    const [LastName, setLastName] = useState(0);
    const [Email, setEmail] = useState(0);

    const [Reviews2DArray, setReviews2DArray] = useState([]);
    const [Drink2DArray, setDrink2DArray] = useState([]);

    //wait for drinks and reviews to be loaded
    const [DrinksLoaded, setDrinksLoaded] = useState(0);
    const [ReviewsLoaded, setReviewsLoaded] = useState(0);
    const [PropsToken, setPropsToken] = useState("");

    useEffect(() => {
        //get user data
        let get_user = async (email) =>{
            const { data } = await axios.get(`${BASE_URL}/users/${email}`);
            setFirstName(data.data.fname);
            setLastName(data.data.lname);
            setEmail(data.data.email);
            get_drinks(data.data.drink_ids);
            get_reviews(data.data.review_ids);
        }

        //get user drinks
        let get_drinks = async (drink_ids) => {
            if (drink_ids.length === 0) {
                setDrinksLoaded(true);
                return;
            }

            const queryParams = qs.encode({
                _ids: drink_ids
            });
            const { data } = await axios.get(`${BASE_URL}/drinks?${queryParams}`);
            let drinks2DArray = data.data.map((drink) => [drink.name, drink.ingredients, drink._id]);
            setDrink2DArray(drinks2DArray);
            setDrinksLoaded(true);
        }

        // get reviews for passed in drink id
        let get_reviews = async (review_ids) => {
            if (review_ids.length === 0) {
                setReviewsLoaded(true);
                return;
            }

            const queryParams = qs.encode({ _ids: review_ids });
            const { data } = await axios.get(`${BASE_URL}/reviews?${queryParams}`);
            let reviews2DArray = data.data.map((review) => [review.drink_name, review.comment, review._id]);
            console.log(reviews2DArray)
            setReviews2DArray(reviews2DArray); //set 2D review array
            setReviewsLoaded(true); //reviews array loaded
        }

        setPropsToken(props.token);
        get_user(props.user.email);
    
    }, [props.user.email, props.token]);

    return (
       <div className="margin2">
           <h1>{FirstName} {LastName}</h1>
           <h3>Email: {Email}</h3>
           <br></br>
           <br></br>

           <h1>My Drinks:</h1>
           <div className="lineUser"></div>
           <div >
                {
                    DrinksLoaded? Drink2DArray.length === 0 ? <h2> No drinks yet! </h2> : <UserDrinkList drink = {Drink2DArray} propsToken = {PropsToken}/> : <div></div>
                }
           </div>

           <br></br>

           <h1>My Reviews:</h1>
           <div className="lineUser"></div>
           <div> 
                {
                    (ReviewsLoaded && Reviews2DArray.length !== 0) ? <UserReviewList reviews = {Reviews2DArray} propsToken = {PropsToken}/> : <h2>No Reviews yet!</h2>
                }
           </div>

       </div>
    )
}

export default UserAccount;