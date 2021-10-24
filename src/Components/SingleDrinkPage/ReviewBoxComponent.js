import React, {Component} from 'react';
import ReviewList from './ReviewDrinkList.js';
import {ReviewInfo} from "./ReviewMockInfo.js";

class ReviewBoxComponent extends Component{
    render(){
        return (
            <div>
                <ReviewList review = {ReviewInfo}/>
            </div>
        )
    }
}

export default ReviewBoxComponent;