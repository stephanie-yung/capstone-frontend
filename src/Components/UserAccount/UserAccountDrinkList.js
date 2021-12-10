import React from "react";
import UserDrinkBox from "./UserAccountDrinkBox"

const UserDrinkList = ({drink, propsToken}) => {
    // console.log("USER DRINK LIST",propsToken)
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
                drinkList.map((drink1, i) => {
                    return <UserDrinkBox key={i} d={drink1} propsToken={propsToken} />
                })
            }
        </div>
    )
}

export default UserDrinkList;