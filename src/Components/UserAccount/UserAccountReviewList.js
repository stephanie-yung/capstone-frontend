import React from "react";
import UserReviewBox from "./UserAccountReviewBox";

const UserReviewList = ({review}) =>{
    console.log("THIS IS RVEVIWW??????",review)
    var reviewList = [[]];
    reviewList.pop();

    for (let i = 0; i < review.length ; i++){
        reviewList.push(review[i]);
    }
    console.log("this is review listt???????",reviewList);
    
    return(
        <div>
            {
                reviewList.map((review1, i) =>{
                    return <UserReviewBox key={i} r={review1} />
                })
            }
        </div>
    )
}

export default UserReviewList;