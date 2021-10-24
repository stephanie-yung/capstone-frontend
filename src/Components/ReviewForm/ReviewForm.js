import React from "react";
import "./ReviewForm.css";
import {FaStar} from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "a9a9a9"
}

function ReviewForm(){
    const stars = Array(5).fill(0);
    const msg = ""
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const [msgValue, setMsgValue] = React.useState(msg);

    const handleClick = value =>{
        setCurrentValue(value)
    };

    const handleMouseOver = value =>{
        setHoverValue(value)
    };

    const handleMouseLeave = () =>{
        setHoverValue(undefined)
    };

    const updateMsg = (value)=>{
        setMsgValue(value);
    };

    function handleChange(event){
        console.log(event.target.value);
    }

    return(
        <div style={styles.container}>
            <h1> Drink Review Form</h1>
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
            <button className="mousepointer" style={styles.button}>Submit</button>
            {/* <div>
                <h3>Star Rating: {currentValue}</h3>
                <h3>Feedback: {msgValue}</h3>
            </div> */}
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
    button:{
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 500,
        padding: 10,
    }
}

export default ReviewForm;