import React from "react";
import ReviewBox from "./ReviewDrinkBox"

const ReviewList = ({review}) => {
    console.log("REVIEWLIST PAGE COMPONENT: ",review);
    var reviewList = []
    for (let i = 0; i< review.length ; i++){
        reviewList.push(review[i]);
    }
    return(
        <div>
            {
                reviewList.map((comment, i) => {
                    return <ReviewBox key={i} comment={review[i]}/>
                })
            }
        </div>
    )
}

export default ReviewList;