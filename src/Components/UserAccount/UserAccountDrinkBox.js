import React ,{useState, useEffect} from "react";
import "./UserAccountPage.css";
import axios from "axios";

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };

const UserDrinkBox = ({d, propsToken}) => {
    console.log("USER DRINK BOX",propsToken)
    //get drink keys: name, ingredients
    let dName = d[0];
    let dIngredients = d[1];
    const dID = d[2];

    //push and format drink ingredients to list
    var dIngredientsList = [];
    for(let i = 0; i< dIngredients.length; i++){
        var ingredientsFull = dIngredients[i][0]+": "+ dIngredients[i][1]+". ";
        dIngredientsList.push(ingredientsFull);
    }

    //map items w/ li tag
    const IngredientsItems = dIngredientsList.map((ingredient) =>
        <li>{ingredient}</li>
    );


    const headers = {
        Authorization: `Bearer ${propsToken}`
    }
    //delete a drink
    let delete_drink = async(drink_id) => {
        const { data } = await axios.delete(`${BASE_URL}/drinks/${drink_id}`, {headers: headers})
    }

    return(
        <div>
            <div className="contentBox">
                <div>
                    <button className="deleteButton" onClick={() => delete_drink(dID)}>
                        Delete
                    </button>
                    <h1>Drink Name: {dName}</h1>
                </div>
                <div> {IngredientsItems} </div>
            </div>
        </div>
    )
}

export default UserDrinkBox;