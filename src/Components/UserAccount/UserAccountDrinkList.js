import React from "react";
import UserDrinkBox from "./UserAccountDrinkBox"

const UserDrinkList = ({drink}) => {
    console.log("user account drinrkkninknrnkn",drink.length)
    var drinkList = [[]];
    console.log("user account drinrkkninknrnknLISSSTTTTTTTTTT",drinkList.length)
    drinkList.pop();
    console.log("user account drinrkkninknrnknLISSSTTTTTTTTTT2222222",drinkList.length)
    for (let i = 0; i< drink.length ; i++){
        if(drink[i] !== []){
            drinkList.push(drink[i]);
        }
        // drinkList.push(drink[i]);
    }
    console.log("user account drinrkkninknrnknLSOISISIITTT33333333",drinkList);

    // map drinkList into each reviewbox.
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