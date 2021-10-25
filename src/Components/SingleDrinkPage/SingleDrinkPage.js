import React from "react";
import "./SingleDrinkPage.css";
import "../../Components/customerReview/customerReview";
import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
import ReviewList from './ReviewDrinkList.js';
import {ReviewInfo} from "./ReviewMockInfo.js";
import axios from "axios";


const SingleDrinkPage = () =>{
    let test_function = async() => {
        // const {data} = await axios.get("https://brewers-backend.herokuapp.com/get-review?_id=6175dcfea9a59c84906015df");
        
        // const {data} = await axios.get("https://brewers-backend.herokuapp.com/get-drink?review_id=6175dcfea9a59c84906015db");

        // const {data} = await axios.post("https://brewers-backend.herokuapp.com/add-drink",{user_email:"steph@gmail.com", drink_name:"Pumpkin Spice Latte",ingredients:[["Pumpkin",3]]});
        
        const {data} = await axios.post("https://brewers-backend.herokuapp.com/add-review",{user_email:"steph@gmail.com", drink_id:"6175dcfea9a59c84906015db",comment:"This is tasty.",rating:4});
        console.log(data);

    }
    return(
        <div>
            <h1 className="centerHeader">Pumpkin Cream Cold Brew</h1>
            <div className="row">
                <div className="column left drinkImg">
                    <img src="data:image/jpeg;base64,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"/>
                    <h2>Rating: 8.3</h2>
                    <Link to ="reviewForm">
                        <button className="mousepointer" style={styles.button}>Leave a Review!</button>
                    </Link>
                </div>
                <div className="column right">
                    <h2 >Reviews: </h2>
                    <ReviewList review = {ReviewInfo}/>
                    {/* <div className="reviewRectangle">As a cold brew fan, I was excited to try it, but I also was concerned it was still going to be too sweet for my taste. Still, I am always up for a fun experiment! It’s not like a total sugar-bomb bright-pink Frappuccino concoction with extra whip</div>
                    <div className="reviewRectangle">I actually LOVED it — and was surprised. At first I just tasted the cold brew, no pumpkin. If your straw is fully in the cup, you don’t taste the pumpkin at all — it’s literally just classic cold brew. Then I just lifted by straw to try the foam alone, and the pumpkin cream was actually so good. REALLY. It was light and creamy, but also rich-tasting, with some good froth and a sweet pumpkin flavor that wasn’t overwhelmingly sweet</div>
                    <div className="reviewRectangle">It's pretty similar to that Vanilla Sweet Cream Cold Brew we all know and love, but with a pumpkin cream foam instead</div>
                    <div className="reviewRectangle">After a few minutes it kind of all swirls together. You still get that rich, strong cold brew flavor but with a soothing sweet finish</div> */}
                </div>
                <button onClick={test_function}>Test</button>
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
