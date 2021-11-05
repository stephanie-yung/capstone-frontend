import React from "react";
import ReviewBox from "./ReviewDrinkBox"

const ReviewList = ({review}) => {
    return(
        <div>
            {
                review.map((comment, i) => {
                    return <ReviewBox key={i} comment={review[i].comment}/>
                })
            }
        </div>
    )
}

export default ReviewList;