import React from "react";
import "./ReviewForm.css";
import {FaStar} from "react-icons/fa";
import axios from "axios";

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
 };

const colors = {
    orange: "#FFBA5A",
    grey: "a9a9a9"
}

function ReviewForm(id){
    const stars = Array(5).fill(0);
    const msg = ""
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const [msgValue, setMsgValue] = React.useState(msg);
    const [emailValue, setEmailValue] = React.useState(msg);
    const [drinkIDValue, setDrinkIDValue] = React.useState(msg);

    const handleClick = value =>{
        setCurrentValue(value)
    };

    const handleMouseOver = value =>{
        setHoverValue(value)
    };

    const handleMouseLeave = () =>{
        setHoverValue(undefined)
    };

    const updateDrinkID = (value)=>{
        setDrinkIDValue(value);
    };

    const updateEmail = (value)=>{
        setEmailValue(value);
    };

    const updateMsg = (value)=>{
        setMsgValue(value);
    };

    function handleChange(event){
        console.log(event.target.value);
    }

    let post_review_submit = async() => {
        let params = {
            user_email: emailValue,
            drink_id: "6175dcfea9a59c84906015db",
            // drink_id: drinkIDValue,
            comment: msgValue,
            rating: currentValue
        };
        console.log(params)
        const { data } = await axios.post(`${BASE_URL}/add-review`, params, headers);
        console.log("addReview", data.data);

    }


    return(
        <div style={styles.container}>
            <h1 className=""> Drink Review Form</h1>
            <div className="" style={styles.textareaEmail}>
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address"  id="email-address" onChange={e => setEmailValue(e.target.value)}/>
            </div>
            <div className="" style={styles.textareaEmail}>
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Drink ID</label>
                <input className="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address"  id="email-address" onChange={e => setDrinkIDValue(e.target.value)}/>
            </div>
            <div style = {styles.stars}>
                {stars.map((_, index) =>{
                    return(
                        <FaStar 
                            key = {index}
                            size = {24}
                            style ={{
                                marginRight:10,
                                cursor: "pointer"
                            }}
                            color = {(hoverValue || currentValue)> index ? colors.orange: colors.grey}
                            onClick = {() => handleClick(index+1)}
                            onMouseOver={() => handleMouseOver(index+1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>
            <textarea 
                placeholder="What's your feedback?"
                style={styles.textarea}
                onChange={e => setMsgValue(e.target.value)}
            />
            <button className="mousepointer" style={styles.button} onClick={post_review_submit}>Submit</button>
            <div>
                <h3 className="">Email: {emailValue}</h3>
                <h3 className="">ID: {drinkIDValue}</h3>
                <h3 className="">Star Rating: {currentValue}</h3>
                <h3 className="">Feedback: {msgValue}</h3>
                {/* <h3>Email: {emailValue}</h3> */}

            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textarea:{
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 500,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
    },
    textareaEmail:{
        // border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 500,
        // padding: 10,
        // margin: "20px 0",
        minHeight: 75,
    },
    button:{
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 500,
        padding: 10,
    }
}

export default ReviewForm;