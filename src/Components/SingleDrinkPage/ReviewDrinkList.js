import React from "react";
import ReviewBox from "./ReviewDrinkBox"

const ReviewList = ({reviews}) => {
    //map reviewList into each reviewbox.
    return(
        <div className="drinkListContainer">
            {
                reviews.map((review, i) => {
                    return <ReviewBox key={i} comment={review.comment} rating={review.rating} email={review.user_email}/>
                })
            }
        </div>
    )
}

export default ReviewList;