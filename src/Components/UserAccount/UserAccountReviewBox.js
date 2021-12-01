import React from "react";
import "./UserAccountPage.css";

const UserReviewBox = ({r}) =>{
    console.log("USERRRRRREVVIEWWWWEBOXXXXX",r)
    let dName = r[0];
    let reviewComment = r[1];
    
    return(
        <div>
            <div className="contentBox">
                <div>
                    <button className="deleteButton">
                        Delete
                    </button>
                    <h1>Drink Name: {dName}</h1>
                </div>
                <div>
                    <h2>
                        Review:
                    </h2>
                    {reviewComment}
                </div>
            </div>
        </div>
    )
}

export default UserReviewBox;