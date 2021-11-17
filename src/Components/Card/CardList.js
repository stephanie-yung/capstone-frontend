import React from "react";
import Card from "./Card";

const CardList = ({c}) => {
    return (
        <div>
            {
                c.map((user, i) => {
                    return <Card  img={c[i].img} name={c[i].name} ingredients = {c[i].ingredients}  id ={c[i].id} />
                })
            }
        </div>
    )
}
export default CardList;