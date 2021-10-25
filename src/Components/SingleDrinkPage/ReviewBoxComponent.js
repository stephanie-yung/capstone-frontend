import React, {Component} from 'react';
import ReviewList from './ReviewDrinkList.js';
import {ReviewInfo} from "./ReviewMockInfo.js";
import axios from "axios";
import "./ReviewBoxComponent.js";

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };

class ReviewBoxComponent extends Component{
    render(){
        let get_review = async() => {
            var qs = require('qs');
            let params = qs.stringify({ review_id: "6175dcfea9a59c84906015dd" });
            const { data } = await axios.get(`${BASE_URL}/get-review?${params}`);
            console.log("GET REVIEW", data.data);
            // const {data} = await axios.get("https://brewers-backend.herokuapp.com/get-review?_id=6175dcfea9a59c84906015dd");

            // console.log("GET REVIEW");
            // console.log(data);
    
        }
        let get_drink = async() => {
            var qs = require('qs');
            let params = qs.stringify({ drink_id: "6175dcfea9a59c84906015db" });
            const { data } = await axios.get(`${BASE_URL}/get-drink?${params}`);
            console.log("GET DRINK", data.data);
            // const {data} = await axios.get("https://brewers-backend.herokuapp.com/get-drink?review_id=6175dcfea9a59c84906015db");
    
            // console.log("GET DRINK");
            // console.log(data);
    
        }
        let post_drink = async() => {
            let params = {
                user_email: 'andy@gmail.com',
                drink_name: 'Pumpkin Spice Latte',
                ingredients: [["Pumpkin", "2 oz"]]
            };
            const { data } = await axios.post(`${BASE_URL}/add-drink`, params, headers);
            console.log("addDrink", data.data);
    
            // const {data} = await axios.post("https://brewers-backend.herokuapp.com/add-drink",{user_email:"steph@gmail.com", drink_name:"Pumpkin Spice Latte",ingredients:[["Pumpkin",3]]});
            
            // console.log("POST DRINK");
            // console.log(data);
    
        }
        let post_review = async() => {
            let params = {
                user_email: 'sony@gmail.com',
                drink_id: "6175dcfea9a59c84906015db",
                comment: "This drink sucks",
                rating: 4
            };
            const { data } = await axios.post(`${BASE_URL}/add-review`, params, headers);
            console.log("addReview", data.data);


            // const {data} = await axios.post("https://brewers-backend.herokuapp.com/add-review",{user_email:"steph@gmail.com", drink_id:"6175dcfea9a59c84906015db",comment:"This is tasty.",rating:4});
            
            // console.log("POST REVIEW");
            // console.log(data);
    
        }
        return (
            <div >
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