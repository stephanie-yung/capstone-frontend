import React, {Component} from 'react';
import axios from "axios";
import "./ReviewBoxComponent.css";

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };


//testing DB endpoints.
class ReviewBoxComponent extends Component{
    render(){
        let get_review = async() => {
            var qs = require('qs');
            let params = qs.stringify({ review_id: "6175dcfea9a59c84906015dd" });
            await axios.get(`${BASE_URL}/get-review?${params}`);
    
        }

        let get_drink = async() => {
            var qs = require('qs');
            let params = qs.stringify({ drink_id: "6175dcfea9a59c84906015db" });
            await axios.get(`${BASE_URL}/get-drink?${params}`);
        }
        let post_drink = async() => {
            let params = {
                user_email: 'andy@gmail.com',
                drink_name: 'Pumpkin Spice Latte',
                ingredients: [["Pumpkin", "2 oz"]]
            };
            await axios.post(`${BASE_URL}/add-drink`, params, headers);
        }
        let post_review = async() => {
            let params = {
                user_email: 'sony@gmail.com',
                drink_id: "6175dcfea9a59c84906015db",
                comment: "This drink sucks",
                rating: 4
            };
            await axios.post(`${BASE_URL}/add-review`, params, headers);
    
        }
        return (
            <div className="centerContent">
                 <h2>Backend Demo</h2>
                 <button className="button3" onClick={get_review}>GET REVIEW</button>
                 <button className="button3" onClick={get_drink}>GET DRINK</button>
                 <button className="button3" onClick={post_drink}>POST DRINK</button>
                 <button className="button3" onClick={post_review}>POST REVIEW</button>
            </div>
        )
    }
}

export default ReviewBoxComponent;