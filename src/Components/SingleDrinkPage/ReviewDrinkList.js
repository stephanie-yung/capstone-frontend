import React from "react";
import ReviewBox from "./ReviewDrinkBox"

const ReviewList = ({review}) => {
    //push reviews to reviewList to map
    var reviewList = []
    for (let i = 0; i< review.length ; i++){
        reviewList.push(review[i]);
    }

    //map reviewList into each reviewbox.
    return(
        <div className="drinkListContainer">
            {
                reviewList.map((comment, i) => {
                    return <ReviewBox key={i} comment={review[i]}/>
                })
            }
        </div>
    )
}

export default ReviewList;