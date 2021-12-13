import React from "react";
import "./SingleDrinkPage.css";

//reviewBox component -- passed in comment
const ReviewBox = ({comment, email, rating}) => {

    //display comment into reviewRectangle.
    return(
        <div>
            <div className="reviewRectangle">
                <div>Reviewer: {email} &emsp; Rating: {rating}/5</div>
                <br/>
                <div>{comment}</div>
            </div>
        </div>
    )
}

export default ReviewBox;