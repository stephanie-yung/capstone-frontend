import React from "react";
import Card from "./Card";

const CardList = ({c}) => {
    return (
        <div>
            {
                c.map((user, i) => {
                    return <Card  img={c[i].img} name={c[i].name} username = {c[i].username}/>
                })
            }
        </div>
    )
}
export default CardList;