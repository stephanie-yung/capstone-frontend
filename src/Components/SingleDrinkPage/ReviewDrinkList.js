import React from "react";
import ReviewBox from "./ReviewDrinkBox"

const ReviewList = ({review}) => {
    console.log("REVIEWLIST PAGE COMPONENT: ",review[0]);
    return(
        <div>
            {
                review.map((comment, i) => {
                    return <ReviewBox key={i} comment={review[i]}/>
                })
            }
        </div>
    )
}

export default ReviewList;