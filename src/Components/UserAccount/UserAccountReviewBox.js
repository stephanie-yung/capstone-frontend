import React from "react";
import "./UserAccountPage.css";
import axios from "axios";

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };

///need to add token to useraccount reviewbox and useraccount drinkbox
const UserReviewBox = ({r, propsToken}) =>{
    console.log("reviewbox:", propsToken)

    //get review keys: drink name, review comment, and review id.
    let dName = r[0];
    let reviewComment = r[1];
    let rID = r[2];

    const headers = {
        Authorization: `Bearer ${propsToken}`
    }
    //delete a review
    let delete_review = async(review_id) => {
        var { data } = await axios.delete(`${BASE_URL}/reviews`, {data: {_ids: [review_id]} }, {headers: headers})
        console.log("deleted review:", data);
    }
    
    return(
        <div>
            <div className="contentBox">
                <div>
                    <button className="deleteButton" onClick={() => delete_review(rID)}>
                        Delete
                    </button>
                    <h1>Drink Name: {dName}</h1>
                </div>
                <div>
                    <h2>
                        Review:
                    </h2>
                    {reviewComment}
                </div>
            </div>
        </div>
    )
}

export default UserReviewBox;