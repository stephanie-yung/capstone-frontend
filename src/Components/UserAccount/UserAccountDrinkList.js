import React from "react";
import UserDrinkBox from "./UserAccountDrinkBox"

const UserDrinkList = ({drink}) => {
    var drinkList = [[]];
    drinkList.pop();

    for (let i = 0; i< drink.length ; i++){
        if(drink[i] !== []){
            drinkList.push(drink[i]);
        }
        // drinkList.push(drink[i]);
    }
    console.log("user account drinrkkninknrnknLSOISISIITTT33333333",drinkList);

    return(
        <div>
            {
                drinkList.map((drink1, i) => {
                    return <UserDrinkBox key={i} d={drink1} />
                })
            }
        </div>
    )
}

export default UserDrinkList;