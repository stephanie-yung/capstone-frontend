import React from "react";
import UserReviewBox from "./UserAccountReviewBox";

const UserReviewList = ({reviews, propsToken}) =>{
    // var reviewList = [[]];
    // reviewList.pop();

    // //push each review comment to list
    // for (let i = 0; i < review.length ; i++){
    //     reviewList.push(review[i]);
    // }
    
    return(
        <div>
            {
                reviews.map((review1, i) =>{
                    return <UserReviewBox key={i} r={review1} propsToken={propsToken} />
                })
            }
        </div>
    )
}

export default UserReviewList;