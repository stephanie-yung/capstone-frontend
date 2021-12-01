import React ,{useState, useEffect} from "react";
import "./UserAccountPage.css";
import axios from "axios";

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };

const UserDrinkBox = ({d}) => {
    // console.log("USER DINRK BOXXXXXXX", d);
    console.log("ACCESSINGV USERDRINKBOX");

    let dName = d[0];
    let dIngredients = d[1];
    var dIngredientsList = [];
    const dID = d[2];

    for(let i = 0; i< dIngredients.length; i++){
        var ingredientsFull = dIngredients[i][0]+": "+ dIngredients[i][1]+". ";
        dIngredientsList.push(ingredientsFull);
    }
    const IngredientsItems = dIngredientsList.map((ingredient) =>
        <li>{ingredient}</li>
    );


    //delete a drink
    let delete_drink = async(drink_id) => {
        console.log("DRINK ID TO BE DELETED",drink_id);
        var { data } = await axios.delete(`${BASE_URL}/drinks`, {data: {_ids: [drink_id]}})
        console.log("drink deelted!!!!!!!!");

    }
    // delete_drink();


    return(
        <div>
            <div className="contentBox">
                <div>
                    <button className="deleteButton" onClick={() => delete_drink(dID)}>
                        Delete
                    </button>
                    <h1>Drink Name: {dName}</h1>
                </div>
                {/* <h1>Testing Drink Name: {dName}</h1> */}
                <div> {IngredientsItems} </div>
                {/* <div>testing</div> */}
            </div>
        </div>
    )
}

export default UserDrinkBox;