import React from "react";
import "./SingleDrinkPage.css";
const ReviewBox = ({comment}) => {
    const myStyle = {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 500,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
    }

    return(
        <div>
            <div className="reviewRectangle">
                <div>{comment}</div>
                {/* <h2>{drink_id}</h2> */}
            </div>
        </div>
    )
}

export default ReviewBox;