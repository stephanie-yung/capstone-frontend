import React from "react";
import Card from "./Card";

const CardList = ({c}) => {
    return (
        <div>
            {
                c.map((user, i) => {
                    return <Card key={c[i]._id} img={c[i].img} name={c[i].name} ingredients = {c[i].ingredients}  id ={c[i]._id} />
                })
            }
        </div>
    )
}
export default CardList;