import React from 'react'
import {Link} from "react-router-dom";

// Card Component -- params passed in to display drinks on cards.
const Card = ({name, img, id , description}) => {
    const myStyle = {
        maxWidth:'50%',
        height: '50%',
    }
    return (
 
        <Link to= {{
            pathname: `/drinkreview/${id}`
        }} className="db link tc">
            <div style={{background: '#1f3933', color: '#fff', padding: '20px', textAlign:'left'}}    className ='tc bg-light-blue dib br1 fl pa2 ma3 grow bw2 shadow-5 heightCard300 widthSpaced31'>
                <img src= {img} style = {myStyle}alt=''></img>
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>

    )
}

export default Card;