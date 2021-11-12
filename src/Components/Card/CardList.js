import React from "react";
import Card from "./Card";

const CardList = ({c}) => {
    return (
        <div>
            {
                c.map((user, i) => {
                    return <Card  img={c[i].img} name={c[i].name} user_name = {c[i].user_name}  id ={c[i].id} />
                })
            }
        </div>
    )
}
export default CardList;