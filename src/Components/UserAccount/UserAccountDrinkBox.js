import React from "react";
import "./UserAccountPage.css";

const UserDrinkBox = ({d}) => {
    // console.log("USER DINRK BOXXXXXXX", d);
    console.log("ACCESSINGV USERDRINKBOX");

    let dName = d[0];
    let dIngredients = d[1];
    var dIngredientsList = [];
    for(let i = 0; i< dIngredients.length; i++){
        var ingredientsFull = dIngredients[i][0]+": "+ dIngredients[i][1]+". ";
        dIngredientsList.push(ingredientsFull);
    }
    const IngredientsItems = dIngredientsList.map((ingredient) =>
        <li>{ingredient}</li>
    );


    return(
        <div>
            <div className="contentBox">
                <div>
                    <button className="deleteButton">
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