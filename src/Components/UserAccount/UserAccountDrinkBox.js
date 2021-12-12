import React from "react";
import "./UserAccountPage.css";
import axios from "axios";

const BASE_URL = "https://brewers-backend.herokuapp.com";

const UserDrinkBox = ({d, propsToken}) => {
    //get drink keys: name, ingredients
    let dName = d[0];
    let dIngredients = d[1];
    const dID = d[2];

    //push and format drink ingredients to list
    var dIngredientsList = [];
    for(let i = 0; i< dIngredients.length; i++){
        if(!(dIngredients[i][1] === "None" || dIngredients[i][1] === "0")){
            var ingredientsFull = dIngredients[i][0]+": "+ dIngredients[i][1];
            dIngredientsList.push(ingredientsFull);
        }
    }

    //map items w/ li tag
    const IngredientsItems = dIngredientsList.map((ingredient, idx) =>
        <li key={idx}>{ingredient}</li>
    );


    const headers = {
        Authorization: `Bearer ${propsToken}`
    }
    //delete a drink
    let delete_drink = async(drink_id) => {
        await axios.delete(`${BASE_URL}/drinks/${drink_id}`, {headers: headers})
        window.location.href="/capstone-frontend/userAccount";
        // window.location.reload(false);
    }

    return(
        <div>
            <div className="contentBox">
                <div>
                    <button className="deleteButton" onClick={() => {delete_drink(dID)}}>
                        Delete
                    </button>
                    <h1>Drink Name: {dName}</h1>
                </div>
                <div className='drinkpage-list'> {IngredientsItems} </div>
            </div>
        </div>
    )
}

export default UserDrinkBox;