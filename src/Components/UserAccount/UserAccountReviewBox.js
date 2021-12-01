import React from "react";
import "./UserAccountPage.css";
import axios from "axios";

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };


const UserReviewBox = ({r}) =>{
    console.log("USERRRRRREVVIEWWWWEBOXXXXX",r)
    let dName = r[0];
    let rID = r[2];
    let reviewComment = r[1];
    //delete a review
    let delete_review = async(review_id) => {
        console.log("REVIEW ID TO BE DELETED", review_id);
        var { data } = await axios.delete(`${BASE_URL}/reviews`, {data: {_ids: [review_id]}})

    }
    //delete_review()
    
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