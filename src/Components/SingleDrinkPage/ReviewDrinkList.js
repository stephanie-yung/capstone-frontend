import React from "react";
import ReviewBox from "./ReviewDrinkBox"

const ReviewList = ({review}) => {
    return(
        <div>
            {
                review.map((drink_id, i) => {
                    <li key = {review[i].drink_id}></li>
                    return <ReviewBox drink_id={review[i].drink_id} comment={review[i].comment}/>
                })
            }
        </div>
    )
}

export default ReviewList;