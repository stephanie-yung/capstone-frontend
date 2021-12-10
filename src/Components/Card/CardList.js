import React from "react";
import Card from "./Card";
//The cardlist takes in data and outputs a card component, so you don't have to manually keep creating a card, but just add a new card to the backend
const CardList = ({c}) => {
    return (
        <div className="drink-container">
            {
                c.map((user, i) => {
                    return <Card key={c[i]._id} img={c[i].img} name={c[i].name} ingredients = {c[i].ingredients}  id ={c[i]._id} />
                })
            }
        </div>
    )
}
export default CardList;