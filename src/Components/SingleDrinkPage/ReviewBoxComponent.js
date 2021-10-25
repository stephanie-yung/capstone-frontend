import React, {Component} from 'react';
import ReviewList from './ReviewDrinkList.js';
import {ReviewInfo} from "./ReviewMockInfo.js";
import axios from "axios";

class ReviewBoxComponent extends Component{
    render(){
        let get_review = async() => {
            const {data} = await axios.get("https://brewers-backend.herokuapp.com/get-review?_id=6175dcfea9a59c84906015df");

            console.log(data);
    
        }
        let get_drink = async() => {
            const {data} = await axios.get("https://brewers-backend.herokuapp.com/get-drink?review_id=6175dcfea9a59c84906015db");
    
            console.log(data);
    
        }
        let post_drink = async() => {
    
            const {data} = await axios.post("https://brewers-backend.herokuapp.com/add-drink",{user_email:"steph@gmail.com", drink_name:"Pumpkin Spice Latte",ingredients:[["Pumpkin",3]]});
            
            console.log("POST DRINK");
            console.log(data);
    
        }
        let post_review = async() => {
            
            const {data} = await axios.post("https://brewers-backend.herokuapp.com/add-review",{user_email:"steph@gmail.com", drink_id:"6175dcfea9a59c84906015db",comment:"This is tasty.",rating:4});
            
            console.log("POST REVIEW");
            console.log(data);
    
        }
        return (
            <div>
                {/* <ReviewList review = {ReviewInfo}/>
                 */}
                 <h2>Backend Demo</h2>
                 <button onClick={get_review}>GET REVIEW</button>
                 <button onClick={get_drink}>GET DRINK</button>
                 <button onClick={post_drink}>POST DRINK</button>
                 <button onClick={post_review}>POST REVIEW</button>
            </div>
        )
    }
}

export default ReviewBoxComponent;