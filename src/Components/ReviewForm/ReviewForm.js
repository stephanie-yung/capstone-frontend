import React,{useState, useEffect} from "react";
import "./ReviewForm.css";
import {FaStar} from "react-icons/fa";
import axios from "axios";
import {useParams} from "react-router-dom";
let token = "Random token value"

const BASE_URL = "https://brewers-backend.herokuapp.com";

const colors = {
    orange: "#FFBA5A",
    grey: "a9a9a9"
}

//reviewform component
function ReviewForm(props){
    const stars = Array(5).fill(0);
    const msg = ""
    const params = useParams(); //get parameter (drink id)value 

    //set states
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [msgValue, setMsgValue] = useState(msg);
    const [emailValue, setEmailValue] = useState(msg);
    const [drinkIDValue, setDrinkIDValue] = useState(msg);
    const [drinkName, setDrinkName] = useState("");
    const [drinkDesc, setDrinkDesc] = useState("");
    const [creatorEmail, setCreatorEmail] = useState("");


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


    //get single drink data
    let get_drink = async(drink_id) => {
        // drink_id = "619063b464aa0703a8fe7584";
        // drink_id = "619062bf64aa0703a8fe7572";
        const { data } = await axios.get(`${BASE_URL}/drinks/${drink_id}`)
        const drink = data.data

        //set drink states
        setDrinkName(drink.name);
        setDrinkDesc(drink.des);
        setCreatorEmail(drink.user_email);
    }

    useEffect(() => {
        setDrinkIDValue(params.id)
        get_drink(params.id);
    }, [])

    //post review to DB
    let post_review_submit = async() => {
        //params to be passed
        let params = {
            user_email: props.user.email,
            // drink_id: "6190678855e104fa42e3e4f7",
            drink_id: drinkIDValue,
            comment: msgValue,
            rating: currentValue
        };

        const headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${props.token}`
         };
        const { data } = await axios.post(`${BASE_URL}/reviews`, params, {headers: headers});
        // console.log("addReview", data.data);
        //submitted confirmation
        document.getElementById('submitted').textContent="Your review has been submitted. Thank you!"

    }

    return(
        <div style={styles.container}>
            <h1 className=""> Drink Review Form</h1>
            {/* drink id section */}
            <h1>Review for {drinkName} by {creatorEmail}</h1>
            <h2>{drinkDesc}</h2>
            {/* star rating section */}
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
            {/* review comment section */}
            <textarea 
                placeholder="What's your feedback?"
                style={styles.textarea}
                onChange={e => setMsgValue(e.target.value)}
            />
            {/* submit button */}
            <button className="mousepointer" style={styles.button} onClick={post_review_submit}>Submit</button>
            <h1 id="submitted"></h1>
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
        borderRadius: 5,
        width: 500,
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