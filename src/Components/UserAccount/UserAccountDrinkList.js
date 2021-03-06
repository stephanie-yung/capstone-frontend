import React from "react";
import UserDrinkBox from "./UserAccountDrinkBox"

const UserDrinkList = ({drink, propsToken}) => {
    //push drinks to list
    var drinkList = [[]];
    drinkList.pop();
    for (let i = 0; i< drink.length ; i++){
        if(drink[i] !== []){
            drinkList.push(drink[i]);
        }
    }

    return(
        <div>
            {
                drink.map((drink1, i) => {
                    return <UserDrinkBox key={i} d={drink1} propsToken={propsToken} />
                })
            }
        </div>
    )
}

export default UserDrinkList;