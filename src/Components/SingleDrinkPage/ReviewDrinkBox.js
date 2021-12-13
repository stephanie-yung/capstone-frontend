import React from "react";
import "./SingleDrinkPage.css";

//reviewBox component -- passed in comment
const ReviewBox = ({comment, email, rating}) => {
    // const myStyle = {
    //     border: "1px solid #a9a9a9",
    //     borderRadius: 5,
    //     width: 500,
    //     padding: 10,
    //     margin: "20px 0",
    //     minHeight: 100,
    // }

    //display comment into reviewRectangle.
    return(
        <div>
            <div className="reviewRectangle">
                <div>{email}</div>
                <br/>
                <div>{rating}/5</div>
                <br/>
                <div>{comment}</div>
            </div>
        </div>
    )
}

export default ReviewBox;