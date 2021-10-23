import React from 'react'
{/* <a href="/drinkreview" className="db link tc"></a> */}
const Card = ({name, img, username}) => {
    const myStyle = {
        maxWidth:'50%',
        height: '50%'
    }
    return (
        <div className ='tc bg-light-blue dib br1 fl w-30 pa2 ma2 grow bw2 shadow-5'>
            <a href="/drinkreview" className="db link tc"></a>
            <img src= {img} style = {myStyle}alt=''></img>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
            </div>
        </div>
    )
}

export default Card;