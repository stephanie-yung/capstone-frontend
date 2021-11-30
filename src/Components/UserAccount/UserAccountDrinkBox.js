import React from "react";
import "./UserAccountPage.css";

const UserDrinkBox = ({d}) => {
    const myStyle = {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 500,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
    }
    console.log("USER DINRK BOXXXXXXX", d)
    let dName = d[0];
    let dIngredients = d[1];
    var dIngredientsList = [];
    for(let i = 0; i< dIngredients.length; i++){
        var ingredientsFull = dIngredients[i][0]+": "+ dIngredients[i][1]+". ";
        dIngredientsList.push(ingredientsFull);
        // console.log(IngredientsList)
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